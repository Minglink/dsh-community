/**
 * Credential-free records shared by the community market panel and its preload/web bridge.
 */

export type Branded<T extends string> = string & { readonly __brand: T }

/** One community catalog item; download locations remain owned by the main process or web service. */
export interface CommunityPlugin {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly version?: string
  readonly author?: string
  readonly category?: string
  readonly tags?: readonly string[]
  readonly platform?: string
  readonly source?: string
  readonly icon?: string
  readonly readme?: string
  readonly price?: number
  readonly compatibility?: string
  readonly npmPackage?: string
  readonly permissions?: readonly string[]
  readonly screenshots?: readonly string[]
  readonly harnessVersion?: string
  /** Display-only full-package distribution; downloads and author instructions open on the community website. */
  readonly manualDistribution?: true
  /** Display-only installation boundary; release instructions remain on the community website. */
  readonly installationBoundary?: true
}

/** Server-side directory filters; account authorization never comes from these fields. */
export interface CommunityCatalogQuery {
  readonly query?: string
  readonly category?: string
  readonly tag?: string
  readonly platform?: 'all' | 'desktop-exe' | 'web' | 'linux'
  readonly source?: 'all' | 'official' | 'community' | 'user_upload'
  readonly sortBy?: 'hot' | 'essential' | 'soaring' | 'newest' | 'downloads' | 'stars' | 'rating'
  readonly page?: number
  readonly pageSize?: number
}

/** Validated full plugin metadata returned by the community detail endpoint. */
export interface CommunityPluginDetail extends CommunityPlugin {}

/** A complete validated catalog, including the age and origin of an offline copy. */
export interface CommunityCatalog {
  readonly plugins: readonly CommunityPlugin[]
  readonly updatedAt: number
  readonly cached: boolean
  readonly skippedCount?: number
  readonly total?: number
  readonly page?: number
  readonly pageSize?: number
  readonly totalPages?: number
}

/** Account metadata safe for product renderers. */
export interface CommunityAccountSummary {
  readonly username: string
  readonly email: string
}

/** Sign-in failures safe to transport without credentials or server diagnostics. */
export type CommunityLoginFailureCode =
  | 'invalid-account'
  | 'login-invalid-credentials'
  | 'login-forbidden'
  | 'login-rate-limited'
  | 'login-network-failed'
  | 'login-storage-failed'
  | 'login-invalid-response'
  | 'login-server-failed'

/** A fixed sign-in code selected by the main process. */
export interface CommunityLoginProblem {
  readonly code: CommunityLoginFailureCode
}

/** A persisted sign-in result; success exposes no session token to the renderer. */
export type CommunityLoginResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly problem: CommunityLoginProblem }

/** Localized failures are selected in the client from this code; details are optional diagnostics. */
export interface CommunityProblem {
  readonly code: string
  readonly details?: string | undefined
}

/** The identity of one main-owned installation. */
export type CommunityTaskId = string & { readonly __communityTaskId: unique symbol }

/** A protocol or catalog selection awaiting explicit confirmation in the product panel. */
export interface CommunityInstallIntent {
  readonly id: string
  readonly name: string
  readonly version?: string | undefined
  readonly targetKind?: 'plugin' | 'skill' | undefined
  readonly downloadUrl?: string | undefined
  readonly repo?: string | undefined
  /** Display-only origin supplied by main for an external protocol selection. */
  readonly sourceOrigin?: string | undefined
}

export type CommunitySkillCategory =
  | 'dev'
  | 'security'
  | 'ops'
  | 'academic'
  | 'prompt'
  | 'workflow'
  | 'tools'
  | 'research'
  | 'mcp'
  | 'productivity'

/** One community skill item; light agent SOP/Prompt specification. */
export interface CommunitySkill {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly whenToUse?: string | undefined
  readonly version?: string | undefined
  readonly author?: string | undefined
  readonly category?: CommunitySkillCategory | undefined
  readonly tags?: readonly string[] | undefined
  readonly previewMarkdown?: string | undefined // SKILL.md 快速预览正文
  readonly requiredTools?: readonly string[] | undefined
  readonly hasScripts?: boolean | undefined
  readonly enabled?: boolean | undefined // 本地激活状态
  readonly downloadUrl?: string | undefined
  readonly repo?: string | undefined
}

/** Skill catalog returned by the marketplace. */
export interface CommunitySkillCatalog {
  readonly skills: readonly CommunitySkill[]
  readonly total: number
  readonly page: number
  readonly totalPages: number
  readonly updatedAt: number
  readonly cached: boolean
}

/** Intent to install a skill from an external or catalog source. */
export interface CommunitySkillInstallIntent {
  readonly id: string
  readonly name: string
  readonly version?: string | undefined
  readonly downloadUrl?: string | undefined
  readonly repo?: string | undefined
  readonly targetKind?: 'skill' | undefined
}

/** Main-owned progress survives panel navigation and is never inferred from plugin counts. */
export interface CommunityTask {
  readonly id: CommunityTaskId
  readonly plugin: CommunityInstallIntent
  readonly phase:
    | 'queued'
    | 'downloading'
    | 'adapting'
    | 'validating'
    | 'packaging'
    | 'trial'
    | 'installing'
    | 'activating'
    | 'rolling-back'
    | 'cancelling'
    | 'applied'
    | 'restart-required'
    | 'overridden'
    | 'failed'
    | 'cancelled'
  readonly restored?: boolean
  readonly adapted?: boolean
  readonly createdAt: number
  readonly updatedAt: number
  readonly receivedBytes?: number | undefined
  readonly totalBytes?: number | undefined
  readonly packageName?: string | undefined
  readonly version?: string | undefined
  readonly problem?: CommunityProblem | undefined
}

/** Sanitized, main-owned diagnostic output retained separately from task summaries. */
export interface CommunityTaskLogEntry {
  readonly sequence: number
  readonly time: number
  readonly phase: CommunityTask['phase']
  readonly level: 'info' | 'warning' | 'error'
  readonly source: 'system' | 'pnpm' | 'host'
  readonly text: string
  readonly code?: string | undefined
  readonly exitCode?: number | null | undefined
}

/** A bounded log tail; cursors are monotonic even when older entries have been discarded. */
export interface CommunityTaskLog {
  readonly id: CommunityTaskId
  readonly entries: readonly CommunityTaskLogEntry[]
  readonly nextCursor: number
  readonly truncated: boolean
  readonly unavailable: boolean
}

/** Installed bundle entry. */
export interface CommunityBundle {
  readonly name: string
  readonly version?: string
  readonly enabled: boolean
  readonly removable: boolean
  readonly readOnly: boolean
  readonly problem?: CommunityProblem
}

/** One persisted native management result. */
export interface CommunityChange {
  readonly application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled'
  readonly changed: boolean
  readonly problem?: CommunityProblem
}

/** State queries fail explicitly when the Host is unavailable; account and tasks remain readable. */
export interface CommunityState {
  readonly account: CommunityAccountSummary | null
  readonly bundles: readonly CommunityBundle[]
  readonly tasks: readonly CommunityTask[]
  readonly hostProblem?: CommunityProblem
}

export type CommunityNavigationId = Branded<'CommunityNavigationId'>

/** Client failures captured by the owned Desktop window. */
export interface CommunityRuntimeLogEntry {
  readonly sequence: number
  readonly time: number
  readonly source: 'renderer' | 'system' | 'pnpm'
  readonly level: 'info' | 'warning' | 'error'
  readonly text: string
  readonly file?: string
  readonly line?: number
}

/** Bounded durable client diagnostics. */
export interface CommunityRuntimeLog {
  readonly entries: readonly CommunityRuntimeLogEntry[]
  readonly nextCursor: number
  readonly truncated: boolean
  readonly unavailable: boolean
}

/** Narrow community capability exposed to the panel. */
export interface DesktopCommunityApi {
  getState(): Promise<CommunityState>
  catalog(refresh?: boolean, query?: CommunityCatalogQuery): Promise<CommunityCatalog>
  detail(id: string): Promise<CommunityPluginDetail>
  openWebsite(path?: string, target?: 'system-browser'): Promise<void>
  install(intent: Pick<CommunityInstallIntent, 'id' | 'name' | 'version'>): Promise<CommunityTask>
  cancel(id: CommunityTaskId): Promise<void>
  getRuntimeLog?(after?: number): Promise<CommunityRuntimeLog>
  copyRuntimeLog?(): Promise<void>
  exportRuntimeLog?(): Promise<boolean>
  getTaskLog(id: CommunityTaskId, after?: number): Promise<CommunityTaskLog>
  copyTaskLog(id: CommunityTaskId): Promise<void>
  exportTaskLog(id: CommunityTaskId): Promise<boolean>
  setEnabled(name: string, enabled: boolean): Promise<CommunityChange>
  remove(name: string): Promise<CommunityChange>
  login(email: string, password: string): Promise<CommunityLoginResult>
  logout(): Promise<void>
  takePending(): Promise<CommunityInstallIntent | null>
  claimOpen(): Promise<CommunityNavigationId | null>
  acknowledgeOpen(request: CommunityNavigationId): Promise<void>
  subscribe(listener: () => void): () => void
  subscribeOpen(listener: () => void): () => void

  skillCatalog(
    refresh?: boolean,
    query?: { query?: string | undefined; category?: string | undefined; page?: number | undefined; pageSize?: number | undefined },
  ): Promise<CommunitySkillCatalog>
  skillDetail(id: string): Promise<CommunitySkill>
  installSkill(intent: CommunitySkillInstallIntent): Promise<CommunityTask>
  toggleSkill(id: string, enabled: boolean): Promise<boolean>
  removeSkill(id: string): Promise<boolean>
  listInstalledSkills(): Promise<readonly CommunitySkill[]>
}
