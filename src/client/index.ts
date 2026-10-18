/**
 * Native desktop market registration backed by the Electron community capability,
 * with universal Web Fallback for any DeepSeek Harness (DSH) environment.
 */

import { createElement, useSyncExternalStore, type ReactNode } from 'react'
import { IconCordisPluginOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import type { DesktopCommunityApi, CommunityCatalog, CommunitySkillCatalog, CommunityPluginDetail, CommunitySkill } from './community-types.ts'
import { CommunitySection } from './CommunitySection.tsx'
import { communityText } from './community-locales.ts'

interface CommunityContext {
  effect(callback: () => void | (() => void), label?: string): void
  locale: { subscribe(callback: () => void): () => void; getSnapshot(): { active: string } }
  slots: {
    inject(name: string, register: () => void | (() => void)): void
    register(meta: Record<string, unknown>, render: (props: { size: number }) => ReactNode): () => void
  }
  layout: { selectPanel(id: string): void }
}

/** Cordis client identity shared with the package's module-loader registration. */
export const name = 'dsh-community'
/** Services required to register the native market panel and sidebar entry. */
export const inject = ['slots', 'locale', 'layout']

function MarketIcon({ size }: { size: number }): ReactNode {
  return createElement(IconCordisPluginOutlineRegular, { size })
}

/** Web / Fallback API for non-desktop DSH or third-party web instances. */
function createWebCommunityApi(): DesktopCommunityApi {
  const origin = 'https://deepseek.stream'

  return {
    async getState() {
      return { account: null, bundles: [], tasks: [] }
    },
    async catalog(refresh, query) {
      const url = new URL('/api/plugins', origin)
      if (query?.query) url.searchParams.set('query', query.query)
      if (query?.category) url.searchParams.set('category', query.category)
      if (query?.page) url.searchParams.set('page', String(query.page))
      if (query?.pageSize) url.searchParams.set('pageSize', String(query.pageSize))
      const res = await fetch(url.toString())
      if (!res.ok) throw new Error('Failed to fetch plugin catalog')
      const data = await res.json()
      const list = Array.isArray(data) ? data : data.plugins || []
      return {
        plugins: list,
        total: data.total || list.length,
        page: data.page || 1,
        totalPages: data.totalPages || 1,
        updatedAt: Date.now(),
        cached: false,
      } as CommunityCatalog
    },
    async detail(id: string) {
      const res = await fetch(`${origin}/api/plugins/detail?id=${encodeURIComponent(id)}`)
      if (!res.ok) throw new Error('Failed to fetch plugin detail')
      return (await res.json()) as CommunityPluginDetail
    },
    async skillCatalog(refresh, query) {
      const url = new URL('/api/skills', origin)
      if (query?.query) url.searchParams.set('query', query.query)
      if (query?.category) url.searchParams.set('category', query.category)
      if (query?.page) url.searchParams.set('page', String(query.page))
      if (query?.pageSize) url.searchParams.set('pageSize', String(query.pageSize))
      const res = await fetch(url.toString())
      if (!res.ok) throw new Error('Failed to fetch skill catalog')
      const data = await res.json()
      const list = Array.isArray(data) ? data : data.skills || []
      return {
        skills: list,
        total: data.total || list.length,
        page: data.page || 1,
        totalPages: data.totalPages || 1,
        updatedAt: Date.now(),
        cached: false,
      } as CommunitySkillCatalog
    },
    async skillDetail(id: string) {
      const res = await fetch(`${origin}/api/skills/detail?id=${encodeURIComponent(id)}`)
      if (!res.ok) throw new Error('Failed to fetch skill detail')
      return (await res.json()) as CommunitySkill
    },
    async openWebsite(path = '/') {
      window.open(`${origin}${path}`, '_blank')
    },
    async install(intent) {
      window.location.href = `dsh://plugin/install?id=${encodeURIComponent(intent.id)}&name=${encodeURIComponent(intent.name)}`
      return {
        id: ('task-web-' + Date.now()) as any,
        plugin: intent,
        phase: 'applied',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
    },
    async installSkill(intent) {
      window.location.href = `dsh://skill/install?id=${encodeURIComponent(intent.id)}&name=${encodeURIComponent(intent.name)}`
      return {
        id: ('task-web-skill-' + Date.now()) as any,
        plugin: { id: intent.id, name: intent.name, version: intent.version },
        phase: 'applied',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
    },
    async cancel() {},
    async getTaskLog() {
      return { id: '' as any, entries: [], nextCursor: 0, truncated: false, unavailable: true }
    },
    async copyTaskLog() {},
    async exportTaskLog() { return false },
    async setEnabled() {
      return { application: 'applied', changed: false }
    },
    async remove() {
      return { application: 'applied', changed: false }
    },
    async toggleSkill() { return false },
    async removeSkill() { return false },
    async listInstalledSkills() { return [] },
    async login() {
      return { ok: false, problem: { code: 'login-network-failed' } }
    },
    async logout() {},
    async takePending() { return null },
    async claimOpen() { return null },
    async acknowledgeOpen() {},
    subscribe(listener) { return () => {} },
    subscribeOpen(listener) { return () => {} },
  }
}

/** Register the community panel in the host client environment.
 * @param ctx - Host client services whose effects own every registration.
 */
export function apply(ctx: CommunityContext): void {
  const nativeApi = (window as Window & { dshDesktop?: { community?: DesktopCommunityApi } }).dshDesktop?.community
  const api: DesktopCommunityApi = nativeApi ?? createWebCommunityApi()

  const panelId = 'community-market'
  const label = (): string => communityText(ctx.locale.getSnapshot().active, 'marketEntry')
  const Panel = (): ReactNode => {
    const locale = useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot().active)
    return createElement(CommunitySection, { api, locale })
  }
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: panelId }, Panel))
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist', id: panelId, order: 1, label,
  }, MarketIcon))

  if (nativeApi) {
    ctx.effect(() => {
      let disposed = false
      const open = (): void => {
        void nativeApi.claimOpen().then(async (request) => {
          if (disposed || request === null) return
          ctx.layout.selectPanel(panelId)
          await nativeApi.acknowledgeOpen(request)
        }).catch(() => { console.warn('Community navigation is unavailable') })
      }
      const off = nativeApi.subscribeOpen(open)
      open()
      return () => { disposed = true; off() }
    }, 'dsh-community: desktop navigation')
  }
}
