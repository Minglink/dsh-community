/**
 * Build script for dsh-community client bundle.
 * Generates client/client.js wrapped in window.__ModuleLoader__.load.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { basename, dirname, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { isBuiltin } from 'node:module'
import { existsSync } from 'node:fs'

const root = fileURLToPath(new URL('.', import.meta.url))
const sourceRoot = resolve(root, 'src/client')
const outDir = resolve(root, 'client')
await mkdir(outDir, { recursive: true })

async function loadBundler() {
  try {
    const tsdownMod = await import('tsdown')
    const lightningMod = await import('lightningcss')
    return { build: tsdownMod.build, transform: lightningMod.transform }
  } catch {
    const altDir = resolve(root, '../dsh0.2.0-社区版-完整源码/node_modules')
    if (existsSync(resolve(altDir, 'tsdown')) && existsSync(resolve(altDir, 'lightningcss'))) {
      const tsdownMod = await import(pathToFileURL(resolve(altDir, 'tsdown/dist/index.mjs')).href)
      const lightningMod = await import(pathToFileURL(resolve(altDir, 'lightningcss/node/index.mjs')).href)
      return { build: tsdownMod.build, transform: lightningMod.transform }
    }
    throw new Error('Please run `npm install` or `pnpm install` to install tsdown and lightningcss build dependencies.')
  }
}

const { build, transform } = await loadBundler()

const externals = new Set([
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/dsh-client-ui-primitives',
])

const cssPrefix = '\0dsh-community-css:'
const cssSuffix = '.mjs'

const styles = {
  name: 'community-market-css',
  resolveId(source, importer) {
    if (isBuiltin(source)) throw new Error(`Market browser code imports the Node module ${source}`)
    if (!source.endsWith('.module.css') || importer === undefined) return null
    const rel = relative(root, resolve(dirname(importer), source)).replace(/\\/g, '/')
    return cssPrefix + rel + cssSuffix
  },
  async load(id) {
    if (!id.startsWith(cssPrefix)) return null
    const rel = id.slice(cssPrefix.length, -cssSuffix.length)
    const path = resolve(root, rel)
    this.addWatchFile?.(path)
    const compiled = transform({
      filename: path,
      code: await readFile(path),
      cssModules: { pattern: '[hash]_[local]' },
      minify: true,
    })
    const classes = Object.fromEntries(
      Object.entries(compiled.exports ?? {}).map(([name, value]) => [name, value.name])
    )
    const tagId = `dsh-community/${basename(path)}`
    return [
      `const tagId = ${JSON.stringify(tagId)};`,
      'if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {',
      '  const style = document.createElement("style");',
      '  style.dataset.plugin = "dsh-community";',
      '  style.dataset.pluginCss = tagId;',
      `  style.textContent = ${JSON.stringify(compiled.code.toString())};`,
      '  document.head.appendChild(style);',
      '}',
      `export default ${JSON.stringify(classes)};`,
    ].join('\n')
  },
}

console.log('Building dsh-community client bundle...')

await build({
  config: false,
  cwd: root,
  entry: { client: resolve(sourceRoot, 'index.ts') },
  outDir,
  tsconfig: resolve(root, 'tsconfig.client.json'),
  format: 'cjs',
  platform: 'browser',
  target: 'es2024',
  dts: false,
  clean: false,
  sourcemap: true,
  deps: {
    neverBundle: (specifier) => externals.has(specifier),
    alwaysBundle: (specifier) => !externals.has(specifier),
  },
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [styles],
  outputOptions: {
    codeSplitting: false,
    entryFileNames: 'client.js',
    banner: 'window.__ModuleLoader__.load({ id: "dsh-community", factory: (require) => {',
    intro: 'var module = { exports: {} }; var exports = module.exports;',
    footer: 'return module.exports; } });',
  },
})

const outputPath = resolve(outDir, 'client.js')
const output = await readFile(outputPath, 'utf8')
const requested = [...output.matchAll(/\brequire\(["']([^"']+)["']\)/gu)].map((match) => match[1])
const unexpected = requested.filter((specifier) => !externals.has(specifier))
if (unexpected.length > 0) {
  throw new Error(`Market bundle requires unsupported modules: ${unexpected.join(', ')}`)
}

await writeFile(outputPath, output.trimEnd() + '\n')
console.log(`✅ Successfully built client/client.js (${requested.length} shared imports)`)
