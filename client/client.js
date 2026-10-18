window.__ModuleLoader__.load({
	id: "dsh-community",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/community-locales.ts
		/** Locale-owned community copy shared by the native panel and desktop qualification. */
		/** English labels shared by the page, its dialogs, and task results. */
		const communityEn = {
			title: "Stream community",
			marketEntry: "Plugins & Skills",
			marketEntryEn: "Plugins & Skills",
			marketTitle: "DeepSeek Stream Extension Center",
			marketIntro: "Discover and manage desktop plugin extensions and Agent professional skills (Skills)",
			marketProtected: "The plugin market stays available in the sidebar",
			intro: "Discover plugins, install with verification, and manage your environment",
			navigation: "Community plugins",
			community: "Community",
			installed: "Installed",
			tasks: "Install tasks",
			search: "Search plugins",
			searchPlaceholder: "Search by name, description, or author",
			refresh: "Refresh",
			website: "Community Hub",
			websiteDestination: "deepseek.stream",
			profile: "My community account",
			signInHint: "Connect your account to download plugins and continue installation",
			accountConnected: "Connected to deepseek.stream",
			category: "Category",
			allCategories: "All plugins",
			toolsCategory: "Tools",
			modelsCategory: "Models",
			promptCategory: "Prompts",
			workflowCategory: "Workflows",
			uiCategory: "Appearance",
			devCategory: "Development",
			platform: "Environment",
			allPlatforms: "All environments",
			desktopPlatform: "Desktop",
			webPlatform: "Web",
			linuxPlatform: "Linux",
			allSources: "All sources",
			officialSource: "Official",
			communitySource: "Community",
			uploadedSource: "User uploads",
			sort: "Ranking",
			hotSort: "Popular",
			essentialSort: "Essential",
			soaringSort: "Trending",
			newestSort: "Newest",
			downloadsSort: "Downloads",
			starsSort: "Stars",
			ratingSort: "Rating",
			previousPage: "Previous",
			nextPage: "Next",
			pageCount: "Page {page} of {pages}",
			tagSearch: "Scene or tag",
			tagSearchPlaceholder: "Filter by scene or tag",
			detailFailed: "Could not load full plugin details",
			manualDownload: "Complete package",
			manualInstallTitle: "Download and install {name}",
			manualInstructions: "Open download and installation instructions",
			manualInstallRequired: "This plugin requires manual installation. Download its complete package from the community detail page and follow the author’s instructions.",
			releaseInstructions: "Release instructions",
			releaseInstructionsTitle: "Release instructions for {name}",
			openReleaseInstructions: "Open release instructions",
			externalInstallRequired: "This release cannot be installed as a native plugin. Open its community detail page for the author’s release instructions.",
			readme: "Plugin documentation",
			noReadme: "The author has not provided documentation",
			compatibility: "Compatibility",
			permissions: "Declared permissions",
			screenshots: "Screenshots",
			screenshot: "Plugin screenshot {index}",
			price: "Access",
			free: "Free",
			unlockRequired: "Unlock this plugin in the community before downloading",
			unlock: "View community access",
			copy: "Copy",
			copied: "Copied",
			footnotes: "Footnotes",
			adaptationKeyRequired: "Configure your official DeepSeek API key in model settings to adapt this plugin",
			adaptationFailed: "AI adaptation failed. Your previous environment is retained",
			trialFailed: "The plugin failed its isolated trial and was not enabled",
			activationFailed: "The plugin did not start successfully. Check the restoration result before retrying",
			profileChanged: "The plugin environment changed during installation. Refresh and retry",
			interrupted: "Installation was interrupted. Check the restoration result before retrying",
			storageFailed: "Installation state could not be saved. Check available disk space and retry",
			recoveryRequired: "The environment could not be restored automatically. Use desktop recovery before retrying",
			invalidProfile: "The current plugin configuration cannot be read. Use desktop recovery to inspect it",
			restored: "The previous environment has been restored",
			adapting: "Adapting with DeepSeek Flash",
			trial: "Running isolated trial",
			activating: "Checking activation",
			rollingBack: "Restoring previous environment",
			adapted: "AI adapted",
			verificationNote: "Compatibility checks and an isolated trial run complete before the plugin is enabled. Failed activation restores the previous environment.",
			source: "Source",
			sourceName: "Stream community",
			externalSource: "External HTTPS source",
			target: "Install into",
			targetName: "Current desktop environment",
			targetNote: "The plugin will run with this environment’s permissions",
			publisher: "Author",
			publisherUnknown: "Not specified",
			version: "Version",
			latest: "Latest available",
			packageName: "Package",
			catalogCount: "{count} plugins",
			cached: "Offline copy · {time}",
			liveCatalog: "Updated {time}",
			catalogFailed: "Could not refresh the community catalog",
			skippedEntries: "{count} entries use an unsupported format and were skipped",
			stateFailed: "Could not read this desktop environment",
			hostUnavailable: "The desktop environment is unavailable. Try again when it is ready",
			retry: "Retry",
			close: "Close",
			cancel: "Cancel",
			install: "Install",
			reinstall: "Install again",
			details: "View details",
			installTitle: "Install {name}",
			installConfirm: "Install plugin",
			alreadyInstalled: "Already installed",
			emptyCatalog: "No community plugins are available",
			emptySearch: "No matching plugins",
			emptyInstalled: "No additional plugins installed",
			emptyTasks: "No install tasks yet",
			emptyTasksHint: "Installation progress and results will appear here",
			installedCount: "{count} installed",
			taskCount: "{count} tasks",
			runtimeLogShow: "Show runtime log",
			runtimeLogHide: "Hide runtime log",
			runtimeLogTitle: "Client runtime log",
			runtimeLogLoading: "Loading client runtime log",
			runtimeLogEmpty: "No client errors or warnings have been recorded yet",
			runtimeLogReadFailed: "Could not read the runtime log. Refresh to try again",
			runtimeLogUnsupported: "This desktop version does not support runtime logs. Update the desktop installer",
			runtimeLogCopied: "Client runtime log copied",
			runtimeLogCopyFailed: "Could not copy the runtime log. Try again",
			runtimeLogExported: "Client runtime log exported",
			runtimeLogExportFailed: "Could not export the runtime log. Try again",
			runtimeLogRenderer: "Client",
			runtimeLogSystem: "Desktop startup",
			runtimeLogPnpm: "Startup pnpm",
			taskLogShow: "Show install log",
			taskLogHide: "Hide install log",
			taskLogTitle: "Installation log · {name}",
			taskLogLoading: "Loading installation log",
			taskLogEmpty: "No log entries are available for this task yet",
			taskLogReadFailed: "Could not read the installation log. Refresh to try again",
			taskLogUnsupported: "This desktop version does not support installation logs. Update the desktop installer",
			taskLogUnavailable: "Some log entries could not be saved or read. Available entries are shown below",
			taskLogTruncated: "Earlier entries were omitted to keep this log bounded",
			taskLogPause: "Pause automatic scrolling",
			taskLogResume: "Resume automatic scrolling",
			taskLogCopy: "Copy log",
			taskLogExport: "Export log",
			taskLogCopied: "Installation log copied",
			taskLogCopyFailed: "Could not copy the installation log. Try again",
			taskLogExported: "Installation log exported",
			taskLogExportCancelled: "Log export cancelled",
			taskLogExportFailed: "Could not export the installation log. Try again",
			taskLogSystem: "Installer",
			taskLogPnpm: "pnpm",
			taskLogHost: "Host",
			taskLogInfo: "Info",
			taskLogWarning: "Warning",
			taskLogError: "Error",
			taskLogExit: "Exit code: {code}",
			taskLogUnknownExit: "unavailable",
			enabled: "Enabled",
			disabled: "Disabled",
			enable: "Enable",
			disable: "Disable",
			builtIn: "Built in",
			readOnly: "Managed by another configuration layer",
			remove: "Remove",
			removeTitle: "Remove {name}",
			removeDescription: "Remove this plugin from the current desktop environment?",
			signIn: "Sign in to Stream",
			signOut: "Sign out",
			signedOut: "Community account not connected",
			account: "Community account",
			signInTitle: "Sign in to the community",
			signInDescription: "Use your deepseek.stream account to download community plugins",
			registerCommunityAccount: "Create a community account",
			openCommunityWebsite: "Open Stream community",
			registrationReturnHint: "Open in your default browser. After registering, return to this app to sign in and continue any confirmed installation",
			loginWebsiteFailed: "The browser could not be opened. Try again",
			signInContinue: "Sign in and continue installing",
			username: "Email or username",
			password: "Password",
			loginRequired: "Sign in again to continue installing",
			loginFailed: "Sign-in failed. Check your account details and try again",
			loginForbidden: "The community refused this sign-in request. Update the desktop app or try the community website",
			loginRateLimited: "Too many sign-in attempts. Wait a while and try again",
			loginNetworkFailed: "Could not connect to the community. Check your connection and try again",
			loginStorageFailed: "Sign-in could not be saved. Check local storage permissions or available space and try again",
			loginInvalidResponse: "The community returned an invalid sign-in response. Try again later",
			loginServerFailed: "The community sign-in service is unavailable. Try again later",
			loginFields: "Enter your email or username and password",
			actionFailed: "The operation failed. Try again",
			installFailed: "Installation failed. You can retry this task",
			downloadFailed: "The download failed. Check your connection and retry",
			invalidPackage: "This package could not be installed. Contact the plugin author",
			incompatible: "This plugin is not compatible with this desktop version",
			unavailablePlugin: "This plugin is no longer available in the community catalog",
			busy: "Another plugin operation is running. Try again when it finishes",
			cancelledNote: "The installation was cancelled",
			queued: "Queued",
			downloading: "Downloading",
			validating: "Checking package",
			packaging: "Preparing package",
			installing: "Installing",
			cancelling: "Cancelling",
			applied: "Installed",
			restartRequired: "Installed · restart required",
			overridden: "Installed · configuration overrides activation",
			failed: "Failed",
			cancelled: "Cancelled",
			installedNote: "Package installed and configuration applied",
			restartNote: "The change is saved. Restart DeepSeek Harness to apply it",
			overrideNote: "The change is saved, but another configuration layer controls whether the plugin is enabled",
			changed: "Change applied",
			changeFailed: "The change could not be applied",
			result: "Operation result",
			progress: "Download progress",
			technicalDetails: "Technical details",
			loading: "Loading community plugins",
			pluginsMode: "🔌 Plugins",
			skillsMode: "🧠 Agent Skills",
			skillSquare: "Skills Market",
			installedSkills: "Installed Skills",
			skillTasks: "Task Progress",
			skillCatAll: "All",
			skillCatDev: "💻 Coding",
			skillCatSecurity: "🛡️ Security",
			skillCatOps: "🖥️ DevOps",
			skillCatAcademic: "🎓 Academic",
			skillCatPrompt: "🧠 Prompts",
			skillCatWorkflow: "🔄 Workflow",
			skillCatTools: "⚙️ Tools",
			skillCatResearch: "📊 Research",
			skillCatMcp: "⚙️ MCP Tools",
			skillCatProductivity: "✍️ Productivity",
			installSkill: "Install",
			installingSkill: "Installing…",
			skillEnabled: "Enabled",
			skillDisabled: "Disabled",
			viewSkill: "View",
			viewSkillPrompt: "View Prompt / Rules",
			copyPrompt: "Copy Prompt",
			promptCopied: "Prompt Copied",
			removeSkillConfirmTitle: "Remove Skill {name}",
			removeSkillConfirmDesc: "Are you sure you want to remove this Agent skill? Its local files will be deleted.",
			whenToUse: "When to Use",
			requiredTools: "Required Tools",
			noSkillsFound: "No matching Agent skills found",
			emptyInstalledSkills: "No installed Agent skills yet",
			skillCount: "{count} skills",
			installedSkillCount: "{count} installed skills"
		};
		/** Chinese labels with the same required keys as the English dictionary. */
		const communityZh = {
			title: "深流社区",
			marketEntry: "插件与 Skill 市场",
			marketEntryEn: "Plugins & Skills",
			marketTitle: "深流扩展中心",
			marketIntro: "发现并管理桌面端插件扩展与 Agent 专业技能 (Skills)",
			marketProtected: "插件市场是固定入口，可在此管理其他插件",
			intro: "发现并管理桌面端插件扩展与 Agent 专业技能 (Skills)",
			navigation: "社区插件",
			community: "社区",
			installed: "已安装",
			tasks: "安装任务",
			search: "搜索插件",
			searchPlaceholder: "搜索名称、描述或作者",
			refresh: "刷新",
			website: "深流社区",
			websiteDestination: "deepseek.stream",
			profile: "我的社区账号",
			signInHint: "连接社区账号，即可下载插件并继续安装",
			accountConnected: "已连接 deepseek.stream",
			category: "分类",
			allCategories: "全部插件",
			toolsCategory: "工具",
			modelsCategory: "模型",
			promptCategory: "提示词",
			workflowCategory: "工作流",
			uiCategory: "外观",
			devCategory: "开发",
			platform: "运行环境",
			allPlatforms: "全部环境",
			desktopPlatform: "桌面版",
			webPlatform: "网页版",
			linuxPlatform: "Linux",
			allSources: "全部来源",
			officialSource: "官方",
			communitySource: "社区",
			uploadedSource: "用户上传",
			sort: "榜单",
			hotSort: "热门",
			essentialSort: "必装",
			soaringSort: "飙升",
			newestSort: "最新",
			downloadsSort: "下载量",
			starsSort: "收藏量",
			ratingSort: "评分",
			previousPage: "上一页",
			nextPage: "下一页",
			pageCount: "第 {page} 页，共 {pages} 页",
			tagSearch: "场景或标签",
			tagSearchPlaceholder: "按场景或标签筛选",
			detailFailed: "暂时无法加载完整插件详情",
			manualDownload: "完整包下载",
			manualInstallTitle: "下载与安装 {name}",
			manualInstructions: "打开下载与安装说明",
			manualInstallRequired: "此插件需要手动安装。请在社区详情页下载完整包，并按作者说明安装。",
			releaseInstructions: "发行说明",
			releaseInstructionsTitle: "{name} 发行说明",
			openReleaseInstructions: "打开发行说明",
			externalInstallRequired: "此发行包无法作为原生插件安装。请打开社区详情页查看作者的发行说明。",
			readme: "插件说明",
			noReadme: "作者暂未提供使用说明",
			compatibility: "兼容性",
			permissions: "声明权限",
			screenshots: "截图",
			screenshot: "插件截图 {index}",
			price: "获取方式",
			free: "免费",
			unlockRequired: "请先在社区解锁这个插件，再下载",
			unlock: "查看社区获取方式",
			copy: "复制",
			copied: "已复制",
			footnotes: "脚注",
			adaptationKeyRequired: "请在模型设置中配置官方 DeepSeek API Key，以适配这个插件",
			adaptationFailed: "AI 适配失败，之前的环境已保留",
			trialFailed: "插件未通过独立试运行，未启用",
			activationFailed: "插件未能正常启动，请先确认环境恢复结果再重试",
			profileChanged: "安装期间插件环境发生变化，请刷新后重试",
			interrupted: "安装已中断，请先确认环境恢复结果再重试",
			storageFailed: "暂时无法保存安装状态，请检查磁盘空间后重试",
			recoveryRequired: "环境未能自动恢复，请先使用桌面恢复功能再重试",
			invalidProfile: "暂时无法读取插件配置，请使用桌面恢复功能检查",
			restored: "已恢复之前的环境",
			adapting: "DeepSeek Flash 正在适配",
			trial: "独立试运行",
			activating: "确认启用状态",
			rollingBack: "正在恢复之前的环境",
			adapted: "已通过 AI 适配",
			verificationNote: "兼容性检查和独立试运行通过后才会启用插件。启用失败将恢复之前的环境。",
			source: "来源",
			sourceName: "深流社区",
			externalSource: "外部 HTTPS 来源",
			target: "安装位置",
			targetName: "当前桌面环境",
			targetNote: "插件将使用当前环境的权限运行",
			publisher: "作者",
			publisherUnknown: "未提供",
			version: "版本",
			latest: "最新可用版本",
			packageName: "插件包",
			catalogCount: "{count} 个插件",
			cached: "离线副本 · {time}",
			liveCatalog: "更新于 {time}",
			catalogFailed: "暂时无法刷新社区目录",
			skippedEntries: "有 {count} 个条目格式暂不兼容，已跳过",
			stateFailed: "暂时无法读取当前桌面环境",
			hostUnavailable: "桌面环境暂不可用，就绪后可重试",
			retry: "重试",
			close: "关闭",
			cancel: "取消",
			install: "安装",
			reinstall: "重新安装",
			details: "查看详情",
			installTitle: "安装 {name}",
			installConfirm: "安装插件",
			alreadyInstalled: "已安装",
			emptyCatalog: "社区暂时没有可用插件",
			emptySearch: "没有匹配的插件",
			emptyInstalled: "尚未安装额外插件",
			emptyTasks: "还没有安装任务",
			emptyTasksHint: "安装进度和结果会显示在这里",
			installedCount: "已安装 {count} 个",
			taskCount: "{count} 个任务",
			runtimeLogShow: "查看运行日志",
			runtimeLogHide: "收起运行日志",
			runtimeLogTitle: "客户端运行日志",
			runtimeLogLoading: "正在加载客户端运行日志",
			runtimeLogEmpty: "尚未记录客户端错误或警告",
			runtimeLogReadFailed: "无法读取运行日志，请刷新重试",
			runtimeLogUnsupported: "当前桌面版本不支持运行日志，请更新桌面安装包",
			runtimeLogCopied: "已复制客户端运行日志",
			runtimeLogCopyFailed: "无法复制运行日志，请重试",
			runtimeLogExported: "已导出客户端运行日志",
			runtimeLogExportFailed: "无法导出运行日志，请重试",
			runtimeLogRenderer: "客户端",
			runtimeLogSystem: "桌面启动",
			runtimeLogPnpm: "启动 pnpm",
			taskLogShow: "查看安装日志",
			taskLogHide: "收起安装日志",
			taskLogTitle: "安装日志 · {name}",
			taskLogLoading: "正在读取安装日志",
			taskLogEmpty: "此任务暂时没有可用的日志记录",
			taskLogReadFailed: "暂时无法读取安装日志，请刷新重试",
			taskLogUnsupported: "当前桌面版本不支持安装日志，请更新桌面安装包",
			taskLogUnavailable: "部分日志未能保存或读取，下面显示已有记录",
			taskLogTruncated: "为限制日志大小，较早的记录已省略",
			taskLogPause: "暂停自动滚动",
			taskLogResume: "继续自动滚动",
			taskLogCopy: "复制日志",
			taskLogExport: "导出日志",
			taskLogCopied: "已复制安装日志",
			taskLogCopyFailed: "暂时无法复制安装日志，请重试",
			taskLogExported: "已导出安装日志",
			taskLogExportCancelled: "已取消导出日志",
			taskLogExportFailed: "暂时无法导出安装日志，请重试",
			taskLogSystem: "安装器",
			taskLogPnpm: "pnpm",
			taskLogHost: "运行环境",
			taskLogInfo: "信息",
			taskLogWarning: "警告",
			taskLogError: "错误",
			taskLogExit: "退出码：{code}",
			taskLogUnknownExit: "未提供",
			enabled: "已启用",
			disabled: "已停用",
			enable: "启用",
			disable: "停用",
			builtIn: "内置",
			readOnly: "由其他配置层管理",
			remove: "移除",
			removeTitle: "移除 {name}",
			removeDescription: "从当前桌面环境移除这个插件？",
			signIn: "登录深流社区",
			signOut: "退出登录",
			signedOut: "尚未连接社区账号",
			account: "社区账号",
			signInTitle: "登录深流社区",
			signInDescription: "使用 deepseek.stream 账号下载社区插件",
			registerCommunityAccount: "注册社区账号",
			openCommunityWebsite: "打开深流社区",
			registrationReturnHint: "在系统默认浏览器中打开。注册后请返回桌面登录，继续已确认的安装",
			loginWebsiteFailed: "无法打开浏览器，请重试",
			signInContinue: "登录并继续安装",
			username: "邮箱或用户名",
			password: "密码",
			loginRequired: "请重新登录后继续安装",
			loginFailed: "登录失败，请检查账号信息后重试",
			loginForbidden: "社区拒绝了本次登录请求，请更新桌面客户端或尝试社区网站",
			loginRateLimited: "登录尝试过于频繁，请稍后重试",
			loginNetworkFailed: "无法连接深流社区，请检查网络后重试",
			loginStorageFailed: "登录状态无法保存，请检查本地存储权限或剩余空间后重试",
			loginInvalidResponse: "社区返回的登录信息异常，请稍后重试",
			loginServerFailed: "社区登录服务暂不可用，请稍后重试",
			loginFields: "请输入邮箱或用户名及密码",
			actionFailed: "操作失败，请重试",
			installFailed: "安装失败，可以重试这个任务",
			downloadFailed: "下载失败，请检查网络后重试",
			invalidPackage: "这个插件包无法安装，请联系插件作者",
			incompatible: "插件与当前桌面版本不兼容",
			unavailablePlugin: "这个插件已不在社区目录中",
			busy: "另一个插件操作正在进行，完成后可重试",
			cancelledNote: "安装已取消",
			queued: "等待安装",
			downloading: "正在下载",
			validating: "检查插件包",
			packaging: "准备插件包",
			installing: "正在安装",
			cancelling: "正在取消",
			applied: "安装完成",
			restartRequired: "已安装 · 需要重启",
			overridden: "已安装 · 配置覆盖了启用状态",
			failed: "失败",
			cancelled: "已取消",
			installedNote: "插件包已安装，配置已应用",
			restartNote: "修改已保存，重启 DeepSeek Harness 后生效",
			overrideNote: "修改已保存，但插件的启用状态由其他配置层控制",
			changed: "修改已生效",
			changeFailed: "修改未能生效",
			result: "操作结果",
			progress: "下载进度",
			technicalDetails: "技术详情",
			loading: "正在加载社区插件",
			pluginsMode: "🔌 插件生态",
			skillsMode: "🧠 Agent 技能",
			skillSquare: "技能广场",
			installedSkills: "已安装技能",
			skillTasks: "任务进度",
			skillCatAll: "全部",
			skillCatDev: "💻 编程重构",
			skillCatSecurity: "🛡️ 安全逆向",
			skillCatOps: "🖥️ 运维排障",
			skillCatAcademic: "🎓 论文科研",
			skillCatPrompt: "🧠 提示词工程",
			skillCatWorkflow: "🔄 自动化工作流",
			skillCatTools: "⚙️ 通用工具",
			skillCatResearch: "📊 研报分析",
			skillCatMcp: "⚙️ MCP工具链",
			skillCatProductivity: "✍️ 办公提效",
			installSkill: "一键安装",
			installingSkill: "安装中…",
			skillEnabled: "已启用",
			skillDisabled: "已停用",
			viewSkill: "查看",
			viewSkillPrompt: "查看 Prompt / 规则",
			copyPrompt: "复制 Prompt",
			promptCopied: "已复制 Prompt",
			removeSkillConfirmTitle: "移除技能 {name}",
			removeSkillConfirmDesc: "确定要卸载此 Agent 技能吗？其本地文件将被删除。",
			whenToUse: "触发时机",
			requiredTools: "所需工具",
			noSkillsFound: "未找到匹配的 Agent 技能",
			emptyInstalledSkills: "暂无已安装的 Agent 技能",
			skillCount: "{count} 个技能",
			installedSkillCount: "{count} 个已安装技能"
		};
		/** Localized copy with named replacements, selected by the active client locale.
		* @param locale - Active client locale; Chinese variants use the Chinese dictionary.
		* @param key - Dictionary key.
		* @param values - Named values displayed in the localized sentence.
		* @returns Localized text with the supplied replacements.
		*/
		function communityText(locale, key, values = {}) {
			const dictionary = locale.toLowerCase().startsWith("zh") ? communityZh : communityEn;
			return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), dictionary[key]);
		}
		//#endregion
		//#region \0dsh-community-css:src/client/Community.module.css.mjs
		const tagId = "dsh-community/Community.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const style = document.createElement("style");
			style.dataset.plugin = "dsh-community";
			style.dataset.pluginCss = tagId;
			style.textContent = ".yuD0Fa_page{box-sizing:border-box;height:100%;min-height:0;color:var(--dsw-alias-label-primary);flex-direction:column;align-items:center;gap:24px;padding:0 clamp(24px,4vw,48px) 48px;display:flex;overflow:auto}.yuD0Fa_page>*{width:100%;max-width:960px}.yuD0Fa_head{justify-content:space-between;align-items:flex-start;gap:16px;padding-top:28px;display:flex}[data-platform=darwin] .yuD0Fa_head{padding-top:calc(28px + var(--dsh-frame-top-clearance,0px))}.yuD0Fa_title{margin:0;font-size:20px;font-weight:500;line-height:28px}.yuD0Fa_intro,.yuD0Fa_description,.yuD0Fa_meta,.yuD0Fa_empty p{color:var(--dsw-alias-label-secondary);margin:4px 0 0;font-size:13px;line-height:20px}.yuD0Fa_tools,.yuD0Fa_actions,.yuD0Fa_rowTitle,.yuD0Fa_rowMeta,.yuD0Fa_sectionHead{align-items:center;gap:8px;display:flex}.yuD0Fa_tools,.yuD0Fa_actions{flex-wrap:wrap;flex:none}.yuD0Fa_avatar{background:var(--dsw-alias-bg-layer-2);border-radius:50%;justify-content:center;align-items:center;width:24px;height:24px;font-size:12px;font-weight:500;display:inline-flex}.yuD0Fa_account{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);justify-content:space-between;align-items:center;gap:16px;padding:12px 16px;display:flex}.yuD0Fa_accountCopy{overflow-wrap:anywhere;min-width:0;font-size:13px;line-height:20px}.yuD0Fa_accountCopy p{margin:0}.yuD0Fa_accountLabel{color:var(--dsw-alias-label-secondary)}.yuD0Fa_navigation{flex-direction:column;gap:16px;display:flex}.yuD0Fa_tabs{width:360px;max-width:100%}.yuD0Fa_search{box-sizing:border-box;width:100%}.yuD0Fa_filters,.yuD0Fa_filterTools,.yuD0Fa_pluginTags{flex-wrap:wrap;align-items:center;gap:8px;display:flex}.yuD0Fa_tagSearch{flex:1;min-width:160px;max-width:260px}.yuD0Fa_search input::placeholder,.yuD0Fa_tagSearch input::placeholder{color:var(--dsw-alias-label-secondary)}.yuD0Fa_pluginTags{margin-top:8px}.yuD0Fa_pagination{color:var(--dsw-alias-label-secondary);justify-content:center;align-items:center;gap:16px;padding-top:8px;font-size:13px;line-height:20px;display:flex}.yuD0Fa_panel{flex-direction:column;gap:16px;display:flex}.yuD0Fa_sectionHead{color:var(--dsw-alias-label-secondary);flex-wrap:wrap;justify-content:space-between;font-size:13px;line-height:20px}.yuD0Fa_notice{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);justify-content:space-between;align-items:center;gap:16px;padding:12px 16px;font-size:13px;line-height:20px;display:flex}.yuD0Fa_notice[data-tone=error],.yuD0Fa_problem{color:var(--dsw-alias-state-error-primary)}.yuD0Fa_notice p,.yuD0Fa_problem{margin:0}.yuD0Fa_list{flex-direction:column;margin:0;padding:0;list-style:none;display:flex}.yuD0Fa_row{border-bottom:.5px solid var(--dsw-alias-border-l3);align-items:center;gap:14px;min-width:0;padding:16px 0;display:flex}.yuD0Fa_row:last-child{border-bottom:0}.yuD0Fa_artwork{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);width:44px;height:44px;color:var(--dsw-alias-label-secondary);flex:none;justify-content:center;align-items:center;display:flex;position:relative}.yuD0Fa_artwork img{object-fit:contain;border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);width:32px;height:32px;position:absolute}.yuD0Fa_rowBody{flex:1;min-width:0}.yuD0Fa_rowTitle{flex-wrap:wrap;font-size:14px;font-weight:500;line-height:22px}.yuD0Fa_name{overflow-wrap:anywhere;min-width:0}.yuD0Fa_nameButton{text-align:left;white-space:normal;height:auto;min-height:0;font:inherit;justify-content:flex-start;padding:0}.yuD0Fa_nameButton:hover{background:0 0}.yuD0Fa_description{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.yuD0Fa_rowMeta{color:var(--dsw-alias-label-secondary);flex-wrap:wrap;margin-top:4px;font-size:12px;line-height:18px}.yuD0Fa_rowMeta>span+span:before{content:\"·\";margin-right:8px}.yuD0Fa_empty{text-align:center;flex-direction:column;justify-content:center;align-items:center;gap:8px;min-height:200px;font-size:14px;line-height:22px;display:flex}.yuD0Fa_empty p{margin:0}.yuD0Fa_task{align-items:flex-start}.yuD0Fa_taskLog{margin-top:10px}.yuD0Fa_taskLogPanel{min-width:0;margin-top:8px}.yuD0Fa_taskLogControls{flex-wrap:wrap;gap:6px;display:flex}.yuD0Fa_taskLogOutput{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);max-height:320px;margin-top:8px;padding:10px 12px;font-size:12px;line-height:18px;overflow:auto}.yuD0Fa_taskLogEntries{margin:0;padding:0;list-style:none}.yuD0Fa_taskLogEntries li+li{margin-top:10px}.yuD0Fa_taskLogEntries pre{white-space:pre-wrap;overflow-wrap:anywhere;font:inherit;font-family:var(--dsw-font-family-mono,monospace);margin:2px 0 0}.yuD0Fa_taskLogMetadata{color:var(--dsw-alias-label-secondary);flex-wrap:wrap;gap:8px;display:flex}.yuD0Fa_taskLogEntries li[data-level=error] pre{color:var(--dsw-alias-state-error-primary)}.yuD0Fa_taskStatus{color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;font-size:13px;font-weight:400;display:inline-flex}.yuD0Fa_taskDetails{margin-top:8px;font-size:13px;line-height:20px}.yuD0Fa_taskDetails summary{cursor:pointer;width:fit-content;color:var(--dsw-alias-label-secondary)}.yuD0Fa_diagnostic{white-space:pre-wrap;overflow-wrap:anywhere;max-height:160px;font:inherit;margin:8px 0 0;overflow:auto}.yuD0Fa_progress{width:100%;max-width:400px;height:4px;accent-color:var(--dsw-alias-state-business-primary);margin-top:12px;display:block}.yuD0Fa_modal{width:640px;max-width:100%;max-height:100%}.yuD0Fa_readme{border-top:.5px solid var(--dsw-alias-border-l3);margin-top:24px;padding-top:20px;font-size:13px;line-height:20px}.yuD0Fa_readme h2{margin:0 0 12px;font-size:14px;font-weight:500;line-height:22px}.yuD0Fa_screenshots{flex-direction:column;gap:12px;margin-top:16px;display:flex}.yuD0Fa_screenshots img{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);max-width:100%;height:auto}.yuD0Fa_restored{color:var(--dsw-alias-label-primary);margin:8px 0 0;font-size:13px;line-height:20px}.yuD0Fa_modalContent{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);flex:1;min-height:0;overflow:auto}.yuD0Fa_detailDescription{overflow-wrap:anywhere;margin:0 0 20px;font-size:13px;line-height:20px}.yuD0Fa_facts{grid-template-columns:100px minmax(0,1fr);align-items:baseline;gap:12px 16px;margin:0;font-size:13px;line-height:20px;display:grid}.yuD0Fa_facts dt{color:var(--dsw-alias-label-secondary)}.yuD0Fa_facts dd{overflow-wrap:anywhere;margin:0}.yuD0Fa_targetNote{border-top:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);margin:20px 0 0;padding-top:16px;font-size:13px;line-height:20px}.yuD0Fa_form{flex-direction:column;gap:16px;display:flex}.yuD0Fa_field{flex-direction:column;gap:8px;font-size:13px;line-height:20px;display:flex}.yuD0Fa_skeleton{background:var(--dsw-alias-bg-skeleton);border-radius:var(--dsw-radius-xs);animation:2s cubic-bezier(.36,0,.64,1) infinite yuD0Fa_dsh-community-skeleton}.yuD0Fa_skeletonIcon{border:0}.yuD0Fa_skeletonTitle{width:min(144px,60%);height:14px;margin:4px 0 10px}.yuD0Fa_skeletonDescription{width:min(280px,85%);height:12px}@keyframes yuD0Fa_dsh-community-skeleton{0%,80%,to{opacity:1}40%{opacity:.6}}@media (prefers-reduced-motion:reduce){.yuD0Fa_skeleton{animation:none}}@media (width<=640px){.yuD0Fa_head,.yuD0Fa_row{flex-wrap:wrap}.yuD0Fa_rowBody{flex-basis:calc(100% - 60px)}.yuD0Fa_row>.yuD0Fa_actions{margin-left:58px}.yuD0Fa_facts{grid-template-columns:80px minmax(0,1fr)}}.yuD0Fa_modeSwitch{justify-content:flex-start;width:100%;display:flex}.yuD0Fa_modeTabs{width:320px;max-width:100%}.yuD0Fa_skillWhenToUse{border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);border-left:2px solid var(--dsw-alias-state-business-primary,#658eff);color:var(--dsw-alias-label-secondary);margin:6px 0 0;padding:6px 10px;font-size:12px;line-height:18px}.yuD0Fa_skillWhenToUse strong{color:var(--dsw-alias-label-primary);font-weight:500}.yuD0Fa_skillTools{flex-wrap:wrap;align-items:center;gap:6px;margin-top:8px;display:flex}.yuD0Fa_skillRowActions{flex:none;align-items:center;gap:12px;display:flex}";
			document.head.appendChild(style);
		}
		var Community_module_css_default = {
			"accountCopy": "yuD0Fa_accountCopy",
			"modeTabs": "yuD0Fa_modeTabs",
			"modal": "yuD0Fa_modal",
			"dsh-community-skeleton": "yuD0Fa_dsh-community-skeleton",
			"taskLog": "yuD0Fa_taskLog",
			"taskLogMetadata": "yuD0Fa_taskLogMetadata",
			"taskDetails": "yuD0Fa_taskDetails",
			"facts": "yuD0Fa_facts",
			"screenshots": "yuD0Fa_screenshots",
			"notice": "yuD0Fa_notice",
			"skeletonTitle": "yuD0Fa_skeletonTitle",
			"targetNote": "yuD0Fa_targetNote",
			"title": "yuD0Fa_title",
			"name": "yuD0Fa_name",
			"skillWhenToUse": "yuD0Fa_skillWhenToUse",
			"pagination": "yuD0Fa_pagination",
			"pluginTags": "yuD0Fa_pluginTags",
			"intro": "yuD0Fa_intro",
			"taskLogOutput": "yuD0Fa_taskLogOutput",
			"modalContent": "yuD0Fa_modalContent",
			"taskLogControls": "yuD0Fa_taskLogControls",
			"skillTools": "yuD0Fa_skillTools",
			"search": "yuD0Fa_search",
			"empty": "yuD0Fa_empty",
			"panel": "yuD0Fa_panel",
			"tagSearch": "yuD0Fa_tagSearch",
			"task": "yuD0Fa_task",
			"filterTools": "yuD0Fa_filterTools",
			"rowTitle": "yuD0Fa_rowTitle",
			"progress": "yuD0Fa_progress",
			"avatar": "yuD0Fa_avatar",
			"taskLogPanel": "yuD0Fa_taskLogPanel",
			"meta": "yuD0Fa_meta",
			"taskStatus": "yuD0Fa_taskStatus",
			"readme": "yuD0Fa_readme",
			"form": "yuD0Fa_form",
			"detailDescription": "yuD0Fa_detailDescription",
			"field": "yuD0Fa_field",
			"actions": "yuD0Fa_actions",
			"rowBody": "yuD0Fa_rowBody",
			"tabs": "yuD0Fa_tabs",
			"description": "yuD0Fa_description",
			"skeleton": "yuD0Fa_skeleton",
			"diagnostic": "yuD0Fa_diagnostic",
			"sectionHead": "yuD0Fa_sectionHead",
			"skeletonDescription": "yuD0Fa_skeletonDescription",
			"account": "yuD0Fa_account",
			"modeSwitch": "yuD0Fa_modeSwitch",
			"list": "yuD0Fa_list",
			"filters": "yuD0Fa_filters",
			"taskLogEntries": "yuD0Fa_taskLogEntries",
			"head": "yuD0Fa_head",
			"tools": "yuD0Fa_tools",
			"problem": "yuD0Fa_problem",
			"nameButton": "yuD0Fa_nameButton",
			"skeletonIcon": "yuD0Fa_skeletonIcon",
			"navigation": "yuD0Fa_navigation",
			"accountLabel": "yuD0Fa_accountLabel",
			"skillRowActions": "yuD0Fa_skillRowActions",
			"rowMeta": "yuD0Fa_rowMeta",
			"restored": "yuD0Fa_restored",
			"row": "yuD0Fa_row",
			"page": "yuD0Fa_page",
			"artwork": "yuD0Fa_artwork"
		};
		//#endregion
		//#region src/client/CommunityTaskLogPanel.tsx
		/** On-demand, cursor-based installation diagnostics for one main-owned task. */
		const MAX_VISIBLE_ENTRIES$1 = 2e3;
		const PHASE_KEYS$1 = {
			queued: "queued",
			downloading: "downloading",
			validating: "validating",
			packaging: "packaging",
			adapting: "adapting",
			trial: "trial",
			activating: "activating",
			"rolling-back": "rollingBack",
			installing: "installing",
			cancelling: "cancelling",
			applied: "applied",
			"restart-required": "restartRequired",
			overridden: "overridden",
			failed: "failed",
			cancelled: "cancelled"
		};
		const SOURCE_KEYS$2 = {
			system: "taskLogSystem",
			pnpm: "taskLogPnpm",
			host: "taskLogHost"
		};
		const LEVEL_KEYS$1 = {
			info: "taskLogInfo",
			warning: "taskLogWarning",
			error: "taskLogError"
		};
		/** Read durable history when expanded, then append notifications without overlapping reads.
		* @param props - Main-owned task identity, log operations and active client locale.
		* @returns A collapsible plain-text diagnostic panel with follow, copy and export controls.
		*/
		function CommunityTaskLogPanel({ api, task, locale }) {
			const t = (key, values) => communityText(locale, key, values);
			const supportsLogs = typeof api.getTaskLog === "function" && typeof api.copyTaskLog === "function" && typeof api.exportTaskLog === "function";
			const panelId = (0, react.useId)();
			const [open, setOpen] = (0, react.useState)(false);
			const [log, setLog] = (0, react.useState)(null);
			const [loading, setLoading] = (0, react.useState)(false);
			const [failed, setFailed] = (0, react.useState)(false);
			const [follow, setFollow] = (0, react.useState)(true);
			const [operation, setOperation] = (0, react.useState)(null);
			const [feedback, setFeedback] = (0, react.useState)(null);
			const viewport = (0, react.useRef)(null);
			const refreshLog = (0, react.useRef)(() => {});
			const mounted = (0, react.useRef)(false);
			(0, react.useEffect)(() => {
				mounted.current = true;
				return () => {
					mounted.current = false;
				};
			}, []);
			(0, react.useEffect)(() => {
				if (!open || !supportsLogs) return;
				let disposed = false;
				let reading = false;
				let pending = false;
				let current = null;
				let cursor;
				setLog(null);
				setLoading(true);
				setFailed(false);
				const refresh = () => {
					if (disposed) return;
					if (reading) {
						pending = true;
						return;
					}
					reading = true;
					(async () => {
						try {
							const value = await api.getTaskLog(task.id, cursor);
							if (disposed) return;
							if (value.id !== task.id) throw new Error("Mismatched installation log identity");
							const entries = new Map((current?.entries ?? []).map((entry) => [entry.sequence, entry]));
							for (const entry of value.entries) entries.set(entry.sequence, entry);
							const ordered = [...entries.values()].sort((left, right) => left.sequence - right.sequence);
							current = {
								...value,
								entries: ordered.slice(-2e3),
								truncated: value.truncated || current?.truncated === true || ordered.length > MAX_VISIBLE_ENTRIES$1
							};
							cursor = value.nextCursor;
							setLog(current);
							setFailed(false);
						} catch {
							if (!disposed) setFailed(true);
						} finally {
							reading = false;
							if (!disposed) setLoading(false);
							if (pending && !disposed) {
								pending = false;
								refresh();
							}
						}
					})();
				};
				refreshLog.current = refresh;
				const unsubscribe = api.subscribe(refresh);
				refresh();
				return () => {
					disposed = true;
					unsubscribe();
					refreshLog.current = () => {};
				};
			}, [
				api,
				open,
				supportsLogs,
				task.id
			]);
			(0, react.useEffect)(() => {
				if (open && follow && viewport.current !== null) viewport.current.scrollTop = viewport.current.scrollHeight;
			}, [
				open,
				follow,
				log?.nextCursor,
				log?.entries.length
			]);
			const operate = async (action) => {
				setOperation(action);
				setFeedback(null);
				try {
					const exported = action === "copy" ? await api.copyTaskLog(task.id) : await api.exportTaskLog(task.id);
					if (mounted.current) setFeedback(action === "copy" ? "taskLogCopied" : exported === false ? "taskLogExportCancelled" : "taskLogExported");
				} catch {
					if (mounted.current) setFeedback(action === "copy" ? "taskLogCopyFailed" : "taskLogExportFailed");
				} finally {
					if (mounted.current) setOperation(null);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: Community_module_css_default.taskLog,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					size: "sm",
					variant: "outline",
					"aria-expanded": open,
					"aria-controls": panelId,
					onClick: () => {
						setOpen((value) => !value);
					},
					children: t(open ? "taskLogHide" : "taskLogShow")
				}), open && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
					id: panelId,
					className: Community_module_css_default.taskLogPanel,
					"aria-label": t("taskLogTitle", { name: task.plugin.name }),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: Community_module_css_default.taskLogControls,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									"aria-pressed": !follow,
									disabled: !supportsLogs,
									onClick: () => {
										setFollow((value) => !value);
									},
									children: t(follow ? "taskLogPause" : "taskLogResume")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || operation !== null,
									onClick: () => {
										operate("copy");
									},
									children: t("taskLogCopy")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || operation !== null,
									onClick: () => {
										operate("export");
									},
									children: t("taskLogExport")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || loading,
									onClick: () => {
										refreshLog.current();
									},
									children: t("refresh")
								})
							]
						}),
						!supportsLogs && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("taskLogUnsupported")
						}),
						loading && log === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("taskLogLoading")
						}),
						failed && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.problem,
							role: "alert",
							children: t("taskLogReadFailed")
						}),
						log?.unavailable === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.problem,
							role: "alert",
							children: t("taskLogUnavailable")
						}),
						log?.truncated === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("taskLogTruncated")
						}),
						log !== null && log.entries.length === 0 && !loading && !failed && !log.unavailable && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							children: t("taskLogEmpty")
						}),
						feedback !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: feedback === "taskLogCopyFailed" || feedback === "taskLogExportFailed" ? Community_module_css_default.problem : Community_module_css_default.meta,
							role: feedback === "taskLogCopyFailed" || feedback === "taskLogExportFailed" ? "alert" : "status",
							children: t(feedback)
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: Community_module_css_default.taskLogOutput,
							ref: viewport,
							role: "log",
							"aria-live": "off",
							tabIndex: 0,
							"aria-label": t("taskLogTitle", { name: task.plugin.name }),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ol", {
								className: Community_module_css_default.taskLogEntries,
								children: log?.entries.map((entry) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
									"data-level": entry.level,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: Community_module_css_default.taskLogMetadata,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
												dateTime: new Date(entry.time).toISOString(),
												children: new Date(entry.time).toLocaleTimeString(locale)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(PHASE_KEYS$1[entry.phase]) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(SOURCE_KEYS$2[entry.source]) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(LEVEL_KEYS$1[entry.level]) }),
											entry.code !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: entry.code }),
											entry.exitCode !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("taskLogExit", { code: entry.exitCode === null ? t("taskLogUnknownExit") : String(entry.exitCode) }) })
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: entry.text })]
								}, entry.sequence))
							})
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/CommunityRuntimeLogPanel.tsx
		/** On-demand durable client diagnostics independent of installation task outcomes. */
		const MAX_VISIBLE_ENTRIES = 2e3;
		const SOURCE_KEYS$1 = {
			renderer: "runtimeLogRenderer",
			system: "runtimeLogSystem",
			pnpm: "runtimeLogPnpm"
		};
		const LEVEL_KEYS = {
			info: "taskLogInfo",
			warning: "taskLogWarning",
			error: "taskLogError"
		};
		/** Read durable history when expanded, then append notifications without overlapping reads.
		* @param props - Optional Desktop log operations and active client locale.
		* @returns A collapsible plain-text diagnostic panel with follow, copy and export controls.
		*/
		function CommunityRuntimeLogPanel({ api, locale }) {
			const t = (key, values) => communityText(locale, key, values);
			const supportsLogs = typeof api.getRuntimeLog === "function" && typeof api.copyRuntimeLog === "function" && typeof api.exportRuntimeLog === "function";
			const panelId = (0, react.useId)();
			const [open, setOpen] = (0, react.useState)(false);
			const [log, setLog] = (0, react.useState)(null);
			const [loading, setLoading] = (0, react.useState)(false);
			const [failed, setFailed] = (0, react.useState)(false);
			const [follow, setFollow] = (0, react.useState)(true);
			const [operation, setOperation] = (0, react.useState)(null);
			const [feedback, setFeedback] = (0, react.useState)(null);
			const viewport = (0, react.useRef)(null);
			const refreshLog = (0, react.useRef)(() => {});
			const mounted = (0, react.useRef)(false);
			(0, react.useEffect)(() => {
				mounted.current = true;
				return () => {
					mounted.current = false;
				};
			}, []);
			(0, react.useEffect)(() => {
				const read = api.getRuntimeLog;
				if (!open || !supportsLogs || typeof read !== "function") return;
				let disposed = false;
				let reading = false;
				let pending = false;
				let current = null;
				let cursor;
				setLog(null);
				setLoading(true);
				setFailed(false);
				const refresh = () => {
					if (disposed) return;
					if (reading) {
						pending = true;
						return;
					}
					reading = true;
					(async () => {
						try {
							const value = await read(cursor);
							if (disposed) return;
							const entries = new Map((current?.entries ?? []).map((entry) => [entry.sequence, entry]));
							for (const entry of value.entries) entries.set(entry.sequence, entry);
							const ordered = [...entries.values()].sort((left, right) => left.sequence - right.sequence);
							current = {
								...value,
								entries: ordered.slice(-2e3),
								truncated: value.truncated || current?.truncated === true || ordered.length > MAX_VISIBLE_ENTRIES
							};
							cursor = value.nextCursor;
							setLog(current);
							setFailed(false);
						} catch {
							if (!disposed) setFailed(true);
						} finally {
							reading = false;
							if (!disposed) setLoading(false);
							if (pending && !disposed) {
								pending = false;
								refresh();
							}
						}
					})();
				};
				refreshLog.current = refresh;
				const unsubscribe = api.subscribe(refresh);
				refresh();
				return () => {
					disposed = true;
					unsubscribe();
					refreshLog.current = () => {};
				};
			}, [
				api,
				open,
				supportsLogs
			]);
			(0, react.useEffect)(() => {
				if (open && follow && viewport.current !== null) viewport.current.scrollTop = viewport.current.scrollHeight;
			}, [
				open,
				follow,
				log?.nextCursor,
				log?.entries.length
			]);
			const operate = async (action) => {
				const copy = api.copyRuntimeLog, exportLog = api.exportRuntimeLog;
				if (typeof copy !== "function" || typeof exportLog !== "function") return;
				setOperation(action);
				setFeedback(null);
				try {
					const exported = action === "copy" ? await copy() : await exportLog();
					if (mounted.current) setFeedback(action === "copy" ? "runtimeLogCopied" : exported === false ? "taskLogExportCancelled" : "runtimeLogExported");
				} catch {
					if (mounted.current) setFeedback(action === "copy" ? "runtimeLogCopyFailed" : "runtimeLogExportFailed");
				} finally {
					if (mounted.current) setOperation(null);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: Community_module_css_default.taskLog,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					size: "sm",
					variant: "outline",
					"aria-expanded": open,
					"aria-controls": panelId,
					onClick: () => {
						setOpen((value) => !value);
					},
					children: t(open ? "runtimeLogHide" : "runtimeLogShow")
				}), open && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
					id: panelId,
					className: Community_module_css_default.taskLogPanel,
					"aria-label": t("runtimeLogTitle"),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: Community_module_css_default.taskLogControls,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									"aria-pressed": !follow,
									disabled: !supportsLogs,
									onClick: () => {
										setFollow((value) => !value);
									},
									children: t(follow ? "taskLogPause" : "taskLogResume")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || operation !== null,
									onClick: () => {
										operate("copy");
									},
									children: t("taskLogCopy")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || operation !== null,
									onClick: () => {
										operate("export");
									},
									children: t("taskLogExport")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									disabled: !supportsLogs || loading,
									onClick: () => {
										refreshLog.current();
									},
									children: t("refresh")
								})
							]
						}),
						!supportsLogs && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("runtimeLogUnsupported")
						}),
						loading && log === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("runtimeLogLoading")
						}),
						failed && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.problem,
							role: "alert",
							children: t("runtimeLogReadFailed")
						}),
						log?.unavailable === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.problem,
							role: "alert",
							children: t("taskLogUnavailable")
						}),
						log?.truncated === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							role: "status",
							children: t("taskLogTruncated")
						}),
						log !== null && log.entries.length === 0 && !loading && !failed && !log.unavailable && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.meta,
							children: t("runtimeLogEmpty")
						}),
						feedback !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: feedback === "runtimeLogCopyFailed" || feedback === "runtimeLogExportFailed" ? Community_module_css_default.problem : Community_module_css_default.meta,
							role: feedback === "runtimeLogCopyFailed" || feedback === "runtimeLogExportFailed" ? "alert" : "status",
							children: t(feedback)
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: Community_module_css_default.taskLogOutput,
							ref: viewport,
							role: "log",
							"aria-live": "off",
							tabIndex: 0,
							"aria-label": t("runtimeLogTitle"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ol", {
								className: Community_module_css_default.taskLogEntries,
								children: log?.entries.map((entry) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
									"data-level": entry.level,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: Community_module_css_default.taskLogMetadata,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
												dateTime: new Date(entry.time).toISOString(),
												children: new Date(entry.time).toLocaleTimeString(locale)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(SOURCE_KEYS$1[entry.source]) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(LEVEL_KEYS[entry.level]) }),
											entry.file !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [entry.file, entry.line === void 0 ? "" : `:${String(entry.line)}`] })
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: entry.text })]
								}, entry.sequence))
							})
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/CommunitySection.tsx
		/** Native desktop community catalog, account sign-in, and main-owned installation tasks. */
		const PHASE_KEYS = {
			queued: "queued",
			downloading: "downloading",
			validating: "validating",
			packaging: "packaging",
			adapting: "adapting",
			trial: "trial",
			activating: "activating",
			"rolling-back": "rollingBack",
			installing: "installing",
			cancelling: "cancelling",
			applied: "applied",
			"restart-required": "restartRequired",
			overridden: "overridden",
			failed: "failed",
			cancelled: "cancelled"
		};
		const ACTIVE_PHASES = new Set([
			"queued",
			"downloading",
			"adapting",
			"validating",
			"packaging",
			"trial",
			"installing",
			"activating",
			"rolling-back",
			"cancelling"
		]);
		const CHANGE_KEYS = {
			applied: "changed",
			"restart-required": "restartNote",
			overridden: "overrideNote",
			failed: "changeFailed",
			cancelled: "cancelledNote"
		};
		const TASK_NOTE_KEYS = {
			applied: "installedNote",
			"restart-required": "restartNote",
			overridden: "overrideNote"
		};
		function isActive(task) {
			return ACTIVE_PHASES.has(task.phase);
		}
		function stateDot(task) {
			if (isActive(task)) return "ongoing";
			if (task.phase === "failed") return "error";
			if (task.phase === "applied") return "done";
			return "warning";
		}
		function requiresLogin(problem) {
			return problem !== void 0 && /auth|login|unauthori[sz]ed|session-expired/.test(problem.code);
		}
		function releaseGuide(problem, plugin) {
			if (problem?.code === "external-installation-required" || plugin?.installationBoundary === true) return "external";
			if (problem?.code === "manual-install-required" || plugin?.manualDistribution === true) return "manual";
		}
		const LOGIN_FAILURE_KEYS = {
			"invalid-account": "loginFields",
			"login-invalid-credentials": "loginFailed",
			"login-forbidden": "loginForbidden",
			"login-rate-limited": "loginRateLimited",
			"login-network-failed": "loginNetworkFailed",
			"login-storage-failed": "loginStorageFailed",
			"login-invalid-response": "loginInvalidResponse",
			"login-server-failed": "loginServerFailed"
		};
		function problemCopy(problem, t, fallback) {
			if (problem === void 0) return t(fallback);
			if (problem.code === "manual-install-required") return t("manualInstallRequired");
			if (problem.code === "external-installation-required") return t("externalInstallRequired");
			if (problem.code === "market-required") return t("marketProtected");
			if (requiresLogin(problem)) return t("loginRequired");
			if (/unlock|purchase|payment/.test(problem.code)) return t("unlockRequired");
			if (/adaptation-key-required/.test(problem.code)) return t("adaptationKeyRequired");
			if (/adapt/.test(problem.code)) return t("adaptationFailed");
			if (/trial/.test(problem.code)) return t("trialFailed");
			if (/rollback-failed|recovery-required/.test(problem.code)) return t("recoveryRequired");
			if (/activation-failed/.test(problem.code)) return t("activationFailed");
			if (/profile-changed/.test(problem.code)) return t("profileChanged");
			if (/installation-interrupted/.test(problem.code)) return t("interrupted");
			if (/storage-failed/.test(problem.code)) return t("storageFailed");
			if (/invalid-profile/.test(problem.code)) return t("invalidProfile");
			if (/download|network|timeout|fetch/.test(problem.code)) return t("downloadFailed");
			if (/incompatib|peer/.test(problem.code)) return t("incompatible");
			if (/not-found|catalog.*missing|unavailable-plugin/.test(problem.code)) return t("unavailablePlugin");
			if (/busy|conflict|active-task|installation-active/.test(problem.code)) return t("busy");
			if (/package|archive|manifest|entry|zip/.test(problem.code)) return t("invalidPackage");
			return t(fallback);
		}
		function intentFor(plugin) {
			return {
				id: plugin.id,
				name: plugin.name,
				...plugin.version === void 0 ? {} : { version: plugin.version }
			};
		}
		function resultCopy(result, t) {
			return result.application === "failed" ? problemCopy(result.problem, t, "changeFailed") : t(CHANGE_KEYS[result.application]);
		}
		function TaskDetails({ task, t }) {
			const noteKey = TASK_NOTE_KEYS[task.phase];
			const text = task.phase === "failed" ? problemCopy(task.problem, t, "installFailed") : noteKey === void 0 ? void 0 : t(noteKey);
			const total = task.totalBytes;
			const received = task.receivedBytes;
			const progress = total !== void 0 && total > 0 && received !== void 0 ? Math.min(100, Math.max(0, Math.round(received / total * 100))) : void 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				task.restored === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: Community_module_css_default.restored,
					role: "status",
					children: t("restored")
				}),
				text !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: `${Community_module_css_default.meta} ${task.phase === "failed" ? Community_module_css_default.problem : ""}`,
					children: text
				}),
				task.phase === "downloading" && progress !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("progress", {
					className: Community_module_css_default.progress,
					max: 100,
					value: progress,
					"aria-label": t("progress")
				}),
				task.problem?.details !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
					className: Community_module_css_default.taskDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("technicalDetails") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
						className: Community_module_css_default.diagnostic,
						children: task.problem.details
					})]
				})
			] });
		}
		function FilterMenu({ value, values, keys, labelKey, onChange, t }) {
			const [open, setOpen] = (0, react.useState)(false);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
				open,
				portal: true,
				autoFocus: true,
				selectedId: value,
				anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					size: "sm",
					variant: "outline",
					"aria-label": `${t(labelKey)} · ${t(keys[value])}`,
					"aria-haspopup": "menu",
					"aria-expanded": open,
					onClick: () => {
						setOpen(!open);
					},
					children: t(keys[value])
				}),
				items: values.map((id) => ({
					id,
					label: t(keys[id])
				})),
				onClose: () => {
					setOpen(false);
				},
				onSelect: (id) => {
					const selected = values.find((item) => item === id);
					if (selected !== void 0) onChange(selected);
					setOpen(false);
				}
			});
		}
		const CATEGORIES = [
			"all",
			"tools",
			"models",
			"prompt",
			"workflow",
			"ui",
			"dev"
		];
		const CATEGORY_KEYS = {
			all: "allCategories",
			tools: "toolsCategory",
			models: "modelsCategory",
			prompt: "promptCategory",
			workflow: "workflowCategory",
			ui: "uiCategory",
			dev: "devCategory"
		};
		const PLATFORMS = [
			"all",
			"desktop-exe",
			"web",
			"linux"
		];
		const PLATFORM_KEYS = {
			all: "allPlatforms",
			"desktop-exe": "desktopPlatform",
			web: "webPlatform",
			linux: "linuxPlatform"
		};
		const SOURCES = [
			"all",
			"official",
			"community",
			"user_upload"
		];
		const SOURCE_KEYS = {
			all: "allSources",
			official: "officialSource",
			community: "communitySource",
			user_upload: "uploadedSource"
		};
		const SORTS = [
			"hot",
			"essential",
			"soaring",
			"newest",
			"downloads",
			"stars",
			"rating"
		];
		const SORT_KEYS = {
			hot: "hotSort",
			essential: "essentialSort",
			soaring: "soaringSort",
			newest: "newestSort",
			downloads: "downloadsSort",
			stars: "starsSort",
			rating: "ratingSort"
		};
		const SKILL_CATEGORIES = [
			{
				id: "all",
				key: "skillCatAll"
			},
			{
				id: "dev",
				key: "skillCatDev"
			},
			{
				id: "security",
				key: "skillCatSecurity"
			},
			{
				id: "ops",
				key: "skillCatOps"
			},
			{
				id: "academic",
				key: "skillCatAcademic"
			},
			{
				id: "prompt",
				key: "skillCatPrompt"
			},
			{
				id: "workflow",
				key: "skillCatWorkflow"
			},
			{
				id: "tools",
				key: "skillCatTools"
			},
			{
				id: "research",
				key: "skillCatResearch"
			},
			{
				id: "mcp",
				key: "skillCatMcp"
			},
			{
				id: "productivity",
				key: "skillCatProductivity"
			}
		];
		const SKILL_CATEGORY_KEYS = {
			all: "skillCatAll",
			dev: "skillCatDev",
			security: "skillCatSecurity",
			ops: "skillCatOps",
			academic: "skillCatAcademic",
			prompt: "skillCatPrompt",
			workflow: "skillCatWorkflow",
			tools: "skillCatTools",
			research: "skillCatResearch",
			mcp: "skillCatMcp",
			productivity: "skillCatProductivity"
		};
		function Skeleton({ label }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
				className: Community_module_css_default.list,
				"aria-busy": "true",
				"aria-label": label,
				children: [
					0,
					1,
					2,
					3,
					4
				].map((index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
					className: Community_module_css_default.row,
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: `${Community_module_css_default.artwork} ${Community_module_css_default.skeletonIcon} ${Community_module_css_default.skeleton}` }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: Community_module_css_default.rowBody,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: `${Community_module_css_default.skeletonTitle} ${Community_module_css_default.skeleton}` }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: `${Community_module_css_default.skeletonDescription} ${Community_module_css_default.skeleton}` })]
					})]
				}, index))
			});
		}
		function Empty({ title, description }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: Community_module_css_default.empty,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkDefault, {
						size: 36,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: title }),
					description !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: description })
				]
			});
		}
		/**
		* Render community installation and bundle management against the current desktop profile.
		* Protocol requests open confirmation; sign-in resumes only an installation already confirmed by the user.
		* @param props - Isolated desktop operations and current locale.
		* @returns The native market panel and its body-portaled confirmation dialogs.
		*/
		function CommunitySection({ api, locale }) {
			const t = (key, values) => communityText(locale, key, values);
			const prefix = (0, react.useId)();
			const [state, setState] = (0, react.useState)(null);
			const [stateError, setStateError] = (0, react.useState)(false);
			const [catalog, setCatalog] = (0, react.useState)(null);
			const [catalogError, setCatalogError] = (0, react.useState)(false);
			const [catalogLoading, setCatalogLoading] = (0, react.useState)(true);
			const [tab, setTab] = (0, react.useState)("community");
			const [query, setQuery] = (0, react.useState)("");
			const [committedQuery, setCommittedQuery] = (0, react.useState)("");
			const [composing, setComposing] = (0, react.useState)(false);
			const [category, setCategory] = (0, react.useState)("all");
			const [platform, setPlatform] = (0, react.useState)("desktop-exe");
			const [source, setSource] = (0, react.useState)("all");
			const [sortBy, setSortBy] = (0, react.useState)("hot");
			const [tag, setTag] = (0, react.useState)("");
			const [tagDraft, setTagDraft] = (0, react.useState)("");
			const [page, setPage] = (0, react.useState)(1);
			const [detail, setDetail] = (0, react.useState)(null);
			const [detailPlugin, setDetailPlugin] = (0, react.useState)(null);
			const [detailLoading, setDetailLoading] = (0, react.useState)(false);
			const [detailError, setDetailError] = (0, react.useState)(false);
			const [detailRetry, setDetailRetry] = (0, react.useState)(0);
			const [removeBundle, setRemoveBundle] = (0, react.useState)(null);
			const [loginOpen, setLoginOpen] = (0, react.useState)(false);
			const [email, setEmail] = (0, react.useState)("");
			const [password, setPassword] = (0, react.useState)("");
			const [loginBusy, setLoginBusy] = (0, react.useState)(false);
			const [loginError, setLoginError] = (0, react.useState)(null);
			const [installBusy, setInstallBusy] = (0, react.useState)(false);
			const [busyBundle, setBusyBundle] = (0, react.useState)(null);
			const [accountBusy, setAccountBusy] = (0, react.useState)(false);
			const [notice, setNotice] = (0, react.useState)(null);
			const [mode, setMode] = (0, react.useState)("plugins");
			const [skillsCatalog, setSkillsCatalog] = (0, react.useState)(null);
			const [skillsLoading, setSkillsLoading] = (0, react.useState)(false);
			const [skillsError, setSkillsError] = (0, react.useState)(false);
			const [installedSkills, setInstalledSkills] = (0, react.useState)([]);
			const [installedSkillsLoading, setInstalledSkillsLoading] = (0, react.useState)(false);
			const [skillCategory, setSkillCategory] = (0, react.useState)("all");
			const [selectedSkillForPrompt, setSelectedSkillForPrompt] = (0, react.useState)(null);
			const [skillToRemove, setSkillToRemove] = (0, react.useState)(null);
			const [skillInstallIntent, setSkillInstallIntent] = (0, react.useState)(null);
			const [skillBusy, setSkillBusy] = (0, react.useState)({});
			const [copiedPrompt, setCopiedPrompt] = (0, react.useState)(false);
			const mounted = (0, react.useRef)(false);
			const catalogSequence = (0, react.useRef)(0);
			const refreshState = (0, react.useRef)(() => {});
			const resumedIntent = (0, react.useRef)(null);
			const submittedTask = (0, react.useRef)(null);
			const installing = (0, react.useRef)(false);
			const pendingRead = (0, react.useRef)(null);
			const pendingSequence = (0, react.useRef)(0);
			const filters = (0, react.useMemo)(() => ({
				query: committedQuery,
				category,
				platform,
				source,
				sortBy,
				tag: tag.trim(),
				page,
				pageSize: 15
			}), [
				committedQuery,
				category,
				platform,
				source,
				sortBy,
				tag,
				page
			]);
			(0, react.useEffect)(() => {
				if (composing || query.trim() === committedQuery) return;
				const timer = window.setTimeout(() => {
					setCommittedQuery(query.trim());
					setPage(1);
				}, 300);
				return () => {
					window.clearTimeout(timer);
				};
			}, [
				query,
				committedQuery,
				composing
			]);
			(0, react.useEffect)(() => {
				if (composing || tagDraft.trim() === tag) return;
				const timer = window.setTimeout(() => {
					setTag(tagDraft.trim());
					setPage(1);
				}, 300);
				return () => {
					window.clearTimeout(timer);
				};
			}, [
				tagDraft,
				tag,
				composing
			]);
			(0, react.useEffect)(() => {
				mounted.current = true;
				return () => {
					mounted.current = false;
				};
			}, []);
			(0, react.useEffect)(() => {
				let disposed = false;
				let reading = false;
				let pending = false;
				const refresh = () => {
					if (disposed) return;
					if (reading) {
						pending = true;
						return;
					}
					reading = true;
					api.getState().then((value) => {
						if (!disposed) {
							setState((previous) => value.hostProblem === void 0 ? value : {
								...value,
								bundles: previous?.bundles ?? value.bundles
							});
							setStateError(false);
						}
					}, () => {
						if (!disposed) setStateError(true);
					}).finally(() => {
						reading = false;
						if (pending && !disposed) {
							pending = false;
							refresh();
						}
					});
					loadInstalledSkills();
				};
				refreshState.current = refresh;
				const off = api.subscribe(refresh);
				refresh();
				return () => {
					disposed = true;
					off();
					refreshState.current = () => {};
				};
			}, [api]);
			const loadInstalledSkills = (0, react.useCallback)(async () => {
				setInstalledSkillsLoading(true);
				try {
					if (!api.listInstalledSkills) return;
					const skills = await api.listInstalledSkills();
					if (mounted.current) setInstalledSkills(skills);
				} catch {} finally {
					if (mounted.current) setInstalledSkillsLoading(false);
				}
			}, [api]);
			const loadSkillsCatalog = (0, react.useCallback)(async (refresh = false) => {
				setSkillsLoading(true);
				setSkillsError(false);
				try {
					if (!api.skillCatalog) return;
					const value = await api.skillCatalog(refresh, {
						query: committedQuery,
						...skillCategory !== "all" ? { category: skillCategory } : {}
					});
					if (mounted.current) setSkillsCatalog(value);
				} catch {
					if (mounted.current) setSkillsError(true);
				} finally {
					if (mounted.current) setSkillsLoading(false);
				}
			}, [
				api,
				committedQuery,
				skillCategory
			]);
			(0, react.useEffect)(() => {
				loadInstalledSkills();
			}, [loadInstalledSkills]);
			(0, react.useEffect)(() => {
				loadSkillsCatalog();
			}, [loadSkillsCatalog]);
			const handleToggleSkill = async (id, enabled) => {
				setSkillBusy((prev) => ({
					...prev,
					[id]: true
				}));
				try {
					await api.toggleSkill?.(id, enabled);
					await loadInstalledSkills();
					await loadSkillsCatalog();
				} catch {
					if (mounted.current) setNotice({
						key: "actionFailed",
						failed: true
					});
				} finally {
					if (mounted.current) setSkillBusy((prev) => ({
						...prev,
						[id]: false
					}));
				}
			};
			const handleRemoveSkill = async (id) => {
				setSkillBusy((prev) => ({
					...prev,
					[id]: true
				}));
				try {
					await api.removeSkill?.(id);
					setSkillToRemove(null);
					await loadInstalledSkills();
					await loadSkillsCatalog();
				} catch {
					if (mounted.current) setNotice({
						key: "actionFailed",
						failed: true
					});
				} finally {
					if (mounted.current) setSkillBusy((prev) => ({
						...prev,
						[id]: false
					}));
				}
			};
			const handleInstallSkill = async (skill) => {
				setSkillInstallIntent(null);
				setSkillBusy((prev) => ({
					...prev,
					[skill.id]: true
				}));
				try {
					await api.installSkill?.({
						id: skill.id,
						name: skill.name,
						version: skill.version ?? "1.0.0",
						downloadUrl: "downloadUrl" in skill && typeof skill.downloadUrl === "string" ? skill.downloadUrl : void 0
					});
					if (!mounted.current) return;
					setTab("tasks");
					refreshState.current();
					loadInstalledSkills();
				} catch {
					if (mounted.current) setNotice({
						key: "installFailed",
						failed: true
					});
				} finally {
					if (mounted.current) setSkillBusy((prev) => ({
						...prev,
						[skill.id]: false
					}));
				}
			};
			(0, react.useEffect)(() => {
				if (submittedTask.current === null) return;
				const task = state?.tasks.find((item) => item.id === submittedTask.current);
				if (task === void 0 || isActive(task)) return;
				submittedTask.current = null;
				if (task.phase === "failed" && requiresLogin(task.problem)) {
					resumedIntent.current = task.plugin;
					setLoginError("loginRequired");
					setLoginOpen(true);
				}
			}, [state?.tasks]);
			const loadCatalog = (0, react.useCallback)(async (refresh = false) => {
				const sequence = ++catalogSequence.current;
				setCatalogLoading(true);
				setCatalogError(false);
				try {
					const value = await api.catalog(refresh, filters);
					if (!mounted.current || sequence !== catalogSequence.current) return;
					setCatalog(value);
					if (!refresh && value.cached) {
						const fresh = await api.catalog(true, filters);
						if (mounted.current && sequence === catalogSequence.current) setCatalog(fresh);
					}
				} catch {
					if (mounted.current && sequence === catalogSequence.current) setCatalogError(true);
				} finally {
					if (mounted.current && sequence === catalogSequence.current) setCatalogLoading(false);
				}
			}, [api, filters]);
			(0, react.useEffect)(() => {
				loadCatalog();
			}, [loadCatalog]);
			(0, react.useEffect)(() => {
				if (detail === null) {
					setDetailPlugin(null);
					setDetailError(false);
					return;
				}
				let disposed = false;
				setDetailLoading(true);
				setDetailError(false);
				setDetailPlugin(null);
				api.detail(detail.id).then((value) => {
					if (!disposed) setDetailPlugin(value);
				}, () => {
					if (!disposed) setDetailError(true);
				}).finally(() => {
					if (!disposed) setDetailLoading(false);
				});
				return () => {
					disposed = true;
				};
			}, [
				api,
				detail?.id,
				detailRetry
			]);
			(0, react.useEffect)(() => {
				let disposed = false;
				const receive = (reuse) => {
					const request = reuse && pendingRead.current !== null ? pendingRead.current : api.takePending();
					const sequence = ++pendingSequence.current;
					pendingRead.current = request;
					request.then((intent) => {
						if (disposed || sequence !== pendingSequence.current || intent === null) return;
						resumedIntent.current = null;
						setLoginOpen(false);
						setRemoveBundle(null);
						if (intent.targetKind === "skill") {
							setMode("skills");
							setSkillInstallIntent(intent);
							setTab("community");
						} else {
							setMode("plugins");
							setDetail(intent);
							setTab("community");
						}
					}, () => {
						if (!disposed) setStateError(true);
					}).finally(() => {
						if (pendingRead.current === request) pendingRead.current = null;
					});
				};
				const off = api.subscribeOpen(() => {
					receive(false);
				});
				receive(true);
				return () => {
					disposed = true;
					off();
				};
			}, [api]);
			const tasks = state?.tasks ?? [];
			const bundles = state?.bundles ?? [];
			const operationBusy = tasks.find(isActive) !== void 0 || installBusy || busyBundle !== null;
			const needle = query.trim().toLocaleLowerCase();
			const visiblePlugins = catalog?.plugins ?? [];
			const visibleBundles = bundles.filter((bundle) => `${bundle.name} ${bundle.description ?? ""}`.toLocaleLowerCase().includes(needle));
			const selectedPlugin = detailPlugin ?? catalog?.plugins.find((plugin) => plugin.id === detail?.id);
			const selectedManual = selectedPlugin?.manualDistribution === true;
			const selectedBoundary = selectedPlugin?.installationBoundary === true;
			const selectedGuide = selectedManual || selectedBoundary;
			const selectedIntent = detail === null || selectedPlugin === void 0 ? detail : {
				id: selectedPlugin.id,
				name: selectedPlugin.name,
				...detail.version === void 0 && selectedPlugin.version === void 0 ? {} : { version: detail.version ?? selectedPlugin.version },
				...detail.sourceOrigin === void 0 ? {} : { sourceOrigin: detail.sourceOrigin }
			};
			const selectedSource = selectedIntent?.sourceOrigin ?? "https://deepseek.stream";
			const selectedInstalled = selectedIntent !== null && bundles.some((bundle) => bundle.name === selectedIntent.id);
			const noticeText = notice?.result === void 0 ? notice?.key === void 0 ? "" : t(notice.key) : resultCopy(notice.result, t);
			const modeTabs = [{
				value: "plugins",
				label: t("pluginsMode"),
				id: `${prefix}-mode-plugins`,
				panelId: `${prefix}-mode-plugins-panel`
			}, {
				value: "skills",
				label: t("skillsMode"),
				id: `${prefix}-mode-skills`,
				panelId: `${prefix}-mode-skills-panel`
			}];
			const tabs = mode === "plugins" ? [
				{
					value: "community",
					label: t("community"),
					id: `${prefix}-community`,
					panelId: `${prefix}-community-panel`
				},
				{
					value: "installed",
					label: t("installed"),
					id: `${prefix}-installed`,
					panelId: `${prefix}-installed-panel`
				},
				{
					value: "tasks",
					label: t("tasks"),
					id: `${prefix}-tasks`,
					panelId: `${prefix}-tasks-panel`
				}
			] : [
				{
					value: "community",
					label: t("skillSquare"),
					id: `${prefix}-skills-community`,
					panelId: `${prefix}-skills-community-panel`
				},
				{
					value: "installed",
					label: t("installedSkills"),
					id: `${prefix}-skills-installed`,
					panelId: `${prefix}-skills-installed-panel`
				},
				{
					value: "tasks",
					label: t("skillTasks"),
					id: `${prefix}-skills-tasks`,
					panelId: `${prefix}-skills-tasks-panel`
				}
			];
			const visibleSkills = (skillsCatalog?.skills ?? []).filter((skill) => {
				if (skillCategory !== "all" && skill.category !== skillCategory) return false;
				if (needle !== "") {
					if (!`${skill.name} ${skill.description} ${skill.id} ${skill.tags?.join(" ") ?? ""} ${skill.whenToUse ?? ""}`.toLowerCase().includes(needle)) return false;
				}
				return true;
			});
			const visibleInstalledSkills = installedSkills.filter((skill) => {
				if (needle !== "") {
					if (!`${skill.name} ${skill.description} ${skill.id} ${skill.tags?.join(" ") ?? ""} ${skill.whenToUse ?? ""}`.toLowerCase().includes(needle)) return false;
				}
				return true;
			});
			const performInstall = async (intent) => {
				if (installing.current) return;
				installing.current = true;
				setInstallBusy(true);
				setNotice(null);
				try {
					const task = await api.install({
						id: intent.id,
						name: intent.name,
						...intent.version === void 0 ? {} : { version: intent.version }
					});
					if (!mounted.current) return;
					submittedTask.current = isActive(task) ? task.id : null;
					setState((value) => ({
						account: value?.account ?? null,
						bundles: value?.bundles ?? [],
						tasks: [task, ...(value?.tasks ?? []).filter((existing) => existing.id !== task.id)],
						...value?.hostProblem === void 0 ? {} : { hostProblem: value.hostProblem }
					}));
					setDetail(null);
					setTab("tasks");
					if (task.phase === "failed" && requiresLogin(task.problem)) {
						resumedIntent.current = intent;
						setLoginError("loginRequired");
						setLoginOpen(true);
					}
					refreshState.current();
				} catch {
					if (mounted.current) setNotice({
						key: "installFailed",
						failed: true
					});
				} finally {
					installing.current = false;
					if (mounted.current) setInstallBusy(false);
				}
			};
			const requestInstall = (intent, problem) => {
				if (releaseGuide(problem, catalog?.plugins.find((plugin) => plugin.id === intent.id)) !== void 0) {
					openWebsite(`/plugins/${encodeURIComponent(intent.id)}`);
					return;
				}
				if (operationBusy) return;
				if (state?.account === null || requiresLogin(problem)) {
					resumedIntent.current = intent;
					setDetail(null);
					setLoginError(null);
					setLoginOpen(true);
					return;
				}
				performInstall(intent);
			};
			const closeLogin = () => {
				resumedIntent.current = null;
				setLoginOpen(false);
				setPassword("");
				setLoginError(null);
			};
			const openAccountWebsite = (path) => {
				api.openWebsite(path, "system-browser").catch(() => {
					if (mounted.current) setLoginError("loginWebsiteFailed");
				});
			};
			const signIn = async () => {
				if (loginBusy) return;
				if (email.trim() === "" || password === "") {
					setLoginError("loginFields");
					return;
				}
				setLoginBusy(true);
				setLoginError(null);
				try {
					const result = await api.login(email.trim(), password);
					if (!mounted.current) return;
					if (!result.ok) {
						setLoginError(LOGIN_FAILURE_KEYS[result.problem.code]);
						return;
					}
					const intent = resumedIntent.current;
					resumedIntent.current = null;
					setPassword("");
					setLoginOpen(false);
					refreshState.current();
					if (intent !== null) await performInstall(intent);
				} catch {
					if (mounted.current) setLoginError("loginServerFailed");
				} finally {
					if (mounted.current) setLoginBusy(false);
				}
			};
			const signOut = async () => {
				setAccountBusy(true);
				try {
					await api.logout();
					if (mounted.current) setState((value) => value === null ? value : {
						...value,
						account: null
					});
					refreshState.current();
				} catch {
					if (mounted.current) setNotice({
						key: "actionFailed",
						failed: true
					});
				} finally {
					if (mounted.current) setAccountBusy(false);
				}
			};
			const changeBundle = async (bundle, remove) => {
				if (operationBusy) return;
				setBusyBundle(bundle.name);
				setNotice(null);
				try {
					const result = await (remove ? api.remove(bundle.name) : api.setEnabled(bundle.name, !bundle.enabled));
					if (!mounted.current) return;
					setNotice({
						result,
						failed: result.application === "failed"
					});
					if (result.application !== "failed") setRemoveBundle(null);
					refreshState.current();
				} catch {
					if (mounted.current) setNotice({
						key: "changeFailed",
						failed: true
					});
				} finally {
					if (mounted.current) setBusyBundle(null);
				}
			};
			const cancelTask = async (task) => {
				try {
					await api.cancel(task.id);
				} catch {
					if (mounted.current) setNotice({
						key: "actionFailed",
						failed: true
					});
				} finally {
					refreshState.current();
				}
			};
			const openWebsite = (path = "/") => {
				api.openWebsite(path).catch(() => {
					if (mounted.current) setNotice({
						key: "actionFailed",
						failed: true
					});
				});
			};
			const account = state?.account;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: Community_module_css_default.page,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: Community_module_css_default.head,
						"data-window-drag": true,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
							className: Community_module_css_default.title,
							children: t("title")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.intro,
							children: t("intro")
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: Community_module_css_default.tools,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								"aria-label": t("website"),
								"aria-description": t("websiteDestination"),
								onClick: () => {
									openWebsite();
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("website") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("websiteDestination") })]
							}), account === null || account === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "primary",
								onClick: () => {
									setLoginError(null);
									setLoginOpen(true);
								},
								children: t("signIn")
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								"aria-label": t("profile"),
								onClick: () => {
									openWebsite("/dashboard");
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: Community_module_css_default.avatar,
									"aria-hidden": "true",
									children: (account.username || account.email).slice(0, 1).toUpperCase()
								}), account.username || account.email]
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: Community_module_css_default.modeSwitch,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedTabs, {
							items: modeTabs,
							value: mode,
							onChange: (nextMode) => {
								setMode(nextMode);
								setTab("community");
								setQuery("");
								setCommittedQuery("");
							},
							label: t("navigation"),
							className: Community_module_css_default.modeTabs
						})
					}),
					mode === "plugins" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: Community_module_css_default.account,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: Community_module_css_default.accountCopy,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.accountLabel,
								children: t("account")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: account === null || account === void 0 ? t("signInHint") : t("accountConnected") })]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: Community_module_css_default.tools,
							children: account !== null && account !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								disabled: accountBusy,
								onClick: () => {
									signOut();
								},
								children: t("signOut")
							})
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CommunityRuntimeLogPanel, {
						api,
						locale
					})] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: Community_module_css_default.navigation,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedTabs, {
								items: tabs,
								value: tab,
								onChange: setTab,
								label: t("navigation"),
								className: Community_module_css_default.tabs
							}),
							tab !== "tasks" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: Community_module_css_default.search ?? "",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, { size: 16 }),
								"aria-label": t("search"),
								placeholder: t("searchPlaceholder"),
								value: query,
								onCompositionStart: () => {
									setComposing(true);
								},
								onCompositionEnd: () => {
									setComposing(false);
								},
								onChange: (event) => {
									setQuery(event.target.value);
								}
							}),
							mode === "plugins" && tab === "community" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: Community_module_css_default.filters,
								role: "group",
								"aria-label": t("category"),
								children: CATEGORIES.map((value) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
									active: category === value,
									"aria-pressed": category === value,
									onClick: () => {
										setCategory(value);
										setPage(1);
									},
									children: t(CATEGORY_KEYS[value])
								}, value))
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: Community_module_css_default.filterTools,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(FilterMenu, {
										value: platform,
										values: PLATFORMS,
										keys: PLATFORM_KEYS,
										labelKey: "platform",
										t,
										onChange: (value) => {
											setPlatform(value);
											setPage(1);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(FilterMenu, {
										value: source,
										values: SOURCES,
										keys: SOURCE_KEYS,
										labelKey: "source",
										t,
										onChange: (value) => {
											setSource(value);
											setPage(1);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(FilterMenu, {
										value: sortBy,
										values: SORTS,
										keys: SORT_KEYS,
										labelKey: "sort",
										t,
										onChange: (value) => {
											setSortBy(value);
											setPage(1);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										className: Community_module_css_default.tagSearch ?? "",
										"aria-label": t("tagSearch"),
										placeholder: t("tagSearchPlaceholder"),
										value: tagDraft,
										onCompositionStart: () => {
											setComposing(true);
										},
										onCompositionEnd: () => {
											setComposing(false);
										},
										onChange: (event) => {
											setTagDraft(event.target.value);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										"aria-label": t("refresh"),
										disabled: catalogLoading,
										icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular, { size: 14 }),
										onClick: () => {
											refreshState.current();
											loadCatalog(true);
										}
									})
								]
							})] }),
							mode === "skills" && tab === "community" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: Community_module_css_default.filters,
								role: "group",
								"aria-label": t("category"),
								children: [SKILL_CATEGORIES.map(({ id, key }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
									active: skillCategory === id,
									"aria-pressed": skillCategory === id,
									onClick: () => {
										setSkillCategory(id);
									},
									children: t(key)
								}, id)), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									"aria-label": t("refresh"),
									disabled: skillsLoading,
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular, { size: 14 }),
									onClick: () => {
										loadInstalledSkills();
										loadSkillsCatalog(true);
									}
								})]
							}) })
						]
					}),
					(stateError || state?.hostProblem !== void 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: Community_module_css_default.notice,
						"data-tone": "error",
						role: "alert",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t(state?.hostProblem === void 0 ? "stateFailed" : "hostUnavailable") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							size: "sm",
							onClick: () => {
								refreshState.current();
							},
							children: t("retry")
						})]
					}),
					notice !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: Community_module_css_default.notice,
						"data-tone": notice.failed ? "error" : "info",
						role: "status",
						"aria-label": t("result"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: noticeText }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							size: "sm",
							onClick: () => {
								setNotice(null);
							},
							children: t("close")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: Community_module_css_default.panel,
						role: "tabpanel",
						id: `${prefix}-${mode}-${tab}-panel`,
						"aria-labelledby": `${prefix}-${mode}-${tab}`,
						children: [
							mode === "plugins" && tab === "community" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: Community_module_css_default.sectionHead,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("catalogCount", { count: String(catalog?.total ?? catalog?.plugins.length ?? 0) }) }), catalog !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(catalog.cached ? "cached" : "liveCatalog", { time: new Date(catalog.updatedAt).toLocaleString(locale, {
										month: "short",
										day: "numeric",
										hour: "2-digit",
										minute: "2-digit"
									}) }) })]
								}),
								catalogError && catalog !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: Community_module_css_default.notice,
									"data-tone": "error",
									role: "alert",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("catalogFailed") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										onClick: () => {
											loadCatalog(true);
										},
										children: t("retry")
									})]
								}),
								catalog?.skippedCount !== void 0 && catalog.skippedCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: Community_module_css_default.meta,
									role: "status",
									children: t("skippedEntries", { count: String(catalog.skippedCount) })
								}),
								catalogLoading && catalog === null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Skeleton, { label: t("loading") }) : catalogError && catalog === null ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: Community_module_css_default.empty,
									role: "alert",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("catalogFailed") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											loadCatalog(true);
										},
										children: t("retry")
									})]
								}) : visiblePlugins.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { title: t(needle === "" ? "emptyCatalog" : "emptySearch") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: Community_module_css_default.list,
									"aria-busy": catalogLoading,
									children: visiblePlugins.map((plugin) => {
										const installed = bundles.some((bundle) => bundle.name === plugin.id);
										const task = tasks.find((item) => item.plugin.id === plugin.id && isActive(item));
										return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
											className: Community_module_css_default.row,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
													className: Community_module_css_default.artwork,
													"aria-hidden": "true",
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkDefault, { size: 32 }), plugin.icon !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
														src: plugin.icon,
														alt: "",
														loading: "lazy",
														referrerPolicy: "no-referrer",
														onError: (event) => {
															event.currentTarget.hidden = true;
														}
													})]
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.rowBody,
													children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
															className: Community_module_css_default.rowTitle,
															children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
																className: Community_module_css_default.nameButton,
																"aria-label": `${t("details")} · ${plugin.name}`,
																onClick: () => {
																	setDetail(intentFor(plugin));
																},
																children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																	className: Community_module_css_default.name,
																	children: plugin.name
																})
															}), installed && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
																tone: "success",
																children: t("alreadyInstalled")
															})]
														}),
														plugin.description !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
															className: Community_module_css_default.description,
															children: plugin.description
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
															className: Community_module_css_default.rowMeta,
															children: [
																/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: plugin.author || t("publisherUnknown") }),
																plugin.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: plugin.version }),
																plugin.category !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: (() => {
																	const category = CATEGORIES.find((value) => value === plugin.category);
																	return category === void 0 ? plugin.category : t(CATEGORY_KEYS[category]);
																})() })
															]
														}),
														(plugin.tags?.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
															className: Community_module_css_default.pluginTags,
															children: plugin.tags?.slice(0, 4).map((value) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
																onClick: () => {
																	setTag(value);
																	setTagDraft(value);
																	setPage(1);
																},
																children: value
															}, value))
														})
													]
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: Community_module_css_default.actions,
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
														size: "sm",
														variant: "outline",
														disabled: task !== void 0,
														icon: task === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDownloadOutlineRegular, { size: 14 }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, { size: 14 }),
														onClick: () => {
															setDetail(intentFor(plugin));
														},
														children: task === void 0 ? t(plugin.installationBoundary === true ? "releaseInstructions" : plugin.manualDistribution === true ? "manualDownload" : installed ? "reinstall" : "install") : t(PHASE_KEYS[task.phase])
													})
												})
											]
										}, plugin.id);
									})
								}),
								catalog !== null && (catalog.totalPages ?? 1) > 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
									className: Community_module_css_default.pagination,
									"aria-label": t("navigation"),
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: "outline",
											disabled: catalogLoading || page <= 1,
											onClick: () => {
												setPage((value) => value - 1);
											},
											children: t("previousPage")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("pageCount", {
											page: String(catalog.page ?? page),
											pages: String(catalog.totalPages ?? 1)
										}) }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: "outline",
											disabled: catalogLoading || page >= (catalog.totalPages ?? 1),
											onClick: () => {
												setPage((value) => value + 1);
											},
											children: t("nextPage")
										})
									]
								})
							] }),
							mode === "plugins" && tab === "installed" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: Community_module_css_default.sectionHead,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("installedCount", { count: String(bundles.length) }) })
							}), state === null && !stateError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Skeleton, { label: t("loading") }) : visibleBundles.length === 0 ? state?.hostProblem === void 0 && !stateError && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { title: t(needle === "" ? "emptyInstalled" : "emptySearch") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: Community_module_css_default.list,
								children: visibleBundles.map((bundle) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
									className: Community_module_css_default.row,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: Community_module_css_default.artwork,
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkDefault, { size: 32 })
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: Community_module_css_default.rowBody,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.rowTitle,
													children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
															className: Community_module_css_default.name,
															children: bundle.name
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
															tone: bundle.enabled ? "success" : "neutral",
															children: t(bundle.enabled ? "enabled" : "disabled")
														}),
														(!bundle.removable || bundle.name === "dsh-community") && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, { children: t("builtIn") })
													]
												}),
												bundle.description !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: Community_module_css_default.description,
													children: bundle.description
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.rowMeta,
													children: [bundle.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: bundle.version }), bundle.readOnly && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("readOnly") })]
												}),
												bundle.problem !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: Community_module_css_default.problem,
													children: problemCopy(bundle.problem, t, "changeFailed")
												}),
												bundle.name === "dsh-community" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: Community_module_css_default.meta,
													children: t("marketProtected")
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: Community_module_css_default.actions,
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
												size: "sm",
												variant: "outline",
												disabled: operationBusy || bundle.readOnly || bundle.name === "dsh-community" || state?.hostProblem !== void 0,
												onClick: () => {
													changeBundle(bundle, false);
												},
												children: t(bundle.enabled ? "disable" : "enable")
											}), bundle.removable && bundle.name !== "dsh-community" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
												size: "sm",
												disabled: operationBusy || bundle.readOnly || state?.hostProblem !== void 0,
												onClick: () => {
													setRemoveBundle(bundle);
												},
												children: t("remove")
											})]
										})
									]
								}, bundle.name))
							})] }),
							mode === "plugins" && tab === "tasks" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: Community_module_css_default.sectionHead,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("taskCount", { count: String(tasks.length) }) })
							}), tasks.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, {
								title: t("emptyTasks"),
								description: t("emptyTasksHint")
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: Community_module_css_default.list,
								"aria-live": "polite",
								children: [...tasks].sort((a, b) => b.createdAt - a.createdAt).map((task) => {
									const guide = releaseGuide(task.problem, catalog?.plugins.find((plugin) => plugin.id === task.plugin.id));
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
										className: `${Community_module_css_default.row} ${Community_module_css_default.task}`,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: Community_module_css_default.artwork,
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkDefault, { size: 32 })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: Community_module_css_default.rowBody,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowTitle,
														children: [
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																className: Community_module_css_default.name,
																children: task.plugin.name
															}),
															/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																className: Community_module_css_default.taskStatus,
																children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, {
																	state: stateDot(task),
																	size: 6
																}), t(PHASE_KEYS[task.phase])]
															}),
															task.adapted === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, { children: t("adapted") })
														]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowMeta,
														children: [
															task.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: task.version }),
															task.packageName !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: task.packageName }),
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: new Date(task.createdAt).toLocaleTimeString(locale, {
																hour: "2-digit",
																minute: "2-digit"
															}) })
														]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TaskDetails, {
														task,
														t
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CommunityTaskLogPanel, {
														api,
														task,
														locale
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: Community_module_css_default.actions,
												children: [isActive(task) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													disabled: task.phase === "cancelling" || task.phase === "rolling-back",
													onClick: () => {
														cancelTask(task);
													},
													children: t("cancel")
												}), (task.phase === "failed" || task.phase === "cancelled") && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													variant: "outline",
													disabled: guide === void 0 && (operationBusy || state?.hostProblem !== void 0),
													onClick: () => {
														requestInstall(task.plugin, task.problem);
													},
													children: t(guide === "external" ? "openReleaseInstructions" : guide === "manual" ? "manualInstructions" : "retry")
												})]
											})
										]
									}, task.id);
								})
							})] }),
							mode === "skills" && tab === "community" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: Community_module_css_default.sectionHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("skillCount", { count: String(visibleSkills.length) }) }), skillsCatalog !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(skillsCatalog.cached ? "cached" : "liveCatalog", { time: new Date(skillsCatalog.updatedAt).toLocaleString(locale, {
									month: "short",
									day: "numeric",
									hour: "2-digit",
									minute: "2-digit"
								}) }) })]
							}), skillsLoading && skillsCatalog === null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Skeleton, { label: t("loading") }) : skillsError && skillsCatalog === null ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: Community_module_css_default.empty,
								role: "alert",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("catalogFailed") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										loadSkillsCatalog(true);
									},
									children: t("retry")
								})]
							}) : visibleSkills.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { title: t(needle === "" ? "emptyCatalog" : "emptySearch") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: Community_module_css_default.list,
								"aria-busy": skillsLoading,
								children: visibleSkills.map((skill) => {
									const installed = installedSkills.find((s) => s.id === skill.id);
									const isInstalled = installed !== void 0;
									const isEnabled = installed?.enabled !== false;
									const activeSkillTask = tasks.find((item) => item.plugin.id === skill.id && isActive(item));
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
										className: Community_module_css_default.row,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: Community_module_css_default.artwork,
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkSubagent, { size: 32 })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: Community_module_css_default.rowBody,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowTitle,
														children: [
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
																className: Community_module_css_default.nameButton,
																"aria-label": `${t("details")} · ${skill.name}`,
																onClick: () => {
																	setSelectedSkillForPrompt(installed ?? skill);
																},
																children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																	className: Community_module_css_default.name,
																	children: skill.name
																})
															}),
															isInstalled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
																tone: isEnabled ? "success" : "neutral",
																children: isEnabled ? t("skillEnabled") : t("skillDisabled")
															}),
															skill.category !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, { children: t(SKILL_CATEGORY_KEYS[skill.category] ?? "skillCatAll") })
														]
													}),
													skill.description !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
														className: Community_module_css_default.description,
														children: skill.description
													}),
													skill.whenToUse !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.skillWhenToUse,
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("strong", { children: [t("whenToUse"), ": "] }), skill.whenToUse]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowMeta,
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: skill.author || "Community" }), skill.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: skill.version })]
													}),
													((skill.requiredTools?.length ?? 0) > 0 || (skill.tags?.length ?? 0) > 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.skillTools,
														children: [skill.requiredTools?.map((tool) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
															tone: "info",
															children: ["🔧 ", tool]
														}, tool)), skill.tags?.slice(0, 4).map((tagVal) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
															onClick: () => {
																setQuery(tagVal);
															},
															children: ["#", tagVal]
														}, tagVal))]
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: Community_module_css_default.actions,
												children: !isInstalled ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													variant: "primary",
													disabled: activeSkillTask !== void 0 || skillBusy[skill.id] === true,
													icon: activeSkillTask !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, { size: 14 }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDownloadOutlineRegular, { size: 14 }),
													onClick: () => {
														handleInstallSkill(skill);
													},
													children: activeSkillTask !== void 0 ? t(PHASE_KEYS[activeSkillTask.phase]) : t("installSkill")
												}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													variant: "outline",
													onClick: () => {
														setSelectedSkillForPrompt(installed ?? skill);
													},
													children: t("viewSkill")
												})
											})
										]
									}, skill.id);
								})
							})] }),
							mode === "skills" && tab === "installed" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: Community_module_css_default.sectionHead,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("installedSkillCount", { count: String(installedSkills.length) }) })
							}), installedSkillsLoading && installedSkills.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Skeleton, { label: t("loading") }) : visibleInstalledSkills.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { title: t(needle === "" ? "emptyInstalledSkills" : "emptySearch") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: Community_module_css_default.list,
								children: visibleInstalledSkills.map((skill) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
									className: Community_module_css_default.row,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: Community_module_css_default.artwork,
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkSubagent, { size: 32 })
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: Community_module_css_default.rowBody,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.rowTitle,
													children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
															className: Community_module_css_default.name,
															children: skill.name
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
															tone: skill.enabled !== false ? "success" : "neutral",
															children: skill.enabled !== false ? t("skillEnabled") : t("skillDisabled")
														}),
														skill.category !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tag, { children: t(SKILL_CATEGORY_KEYS[skill.category] ?? "skillCatAll") })
													]
												}),
												skill.description !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: Community_module_css_default.description,
													children: skill.description
												}),
												skill.whenToUse !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.skillWhenToUse,
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("strong", { children: [t("whenToUse"), ": "] }), skill.whenToUse]
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.rowMeta,
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: skill.author || "Community" }), skill.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: skill.version })]
												}),
												((skill.requiredTools?.length ?? 0) > 0 || (skill.tags?.length ?? 0) > 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: Community_module_css_default.skillTools,
													children: [skill.requiredTools?.map((tool) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Tag, {
														tone: "info",
														children: ["🔧 ", tool]
													}, tool)), skill.tags?.slice(0, 4).map((tagVal) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
														onClick: () => {
															setQuery(tagVal);
														},
														children: ["#", tagVal]
													}, tagVal))]
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: Community_module_css_default.skillRowActions,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
													checked: skill.enabled !== false,
													disabled: skillBusy[skill.id] === true,
													label: `${t("enable")} ${skill.name}`,
													onChange: (nextChecked) => {
														handleToggleSkill(skill.id, nextChecked);
													}
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													variant: "outline",
													onClick: () => {
														setSelectedSkillForPrompt(skill);
													},
													children: t("viewSkillPrompt")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													disabled: skillBusy[skill.id] === true,
													onClick: () => {
														setSkillToRemove(skill);
													},
													children: t("remove")
												})
											]
										})
									]
								}, skill.id))
							})] }),
							mode === "skills" && tab === "tasks" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: (() => {
								const skillTasks = tasks.filter((task) => task.plugin.targetKind === "skill");
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: Community_module_css_default.sectionHead,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("taskCount", { count: String(skillTasks.length) }) })
								}), skillTasks.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, {
									title: t("emptyTasks"),
									description: t("emptyTasksHint")
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: Community_module_css_default.list,
									"aria-live": "polite",
									children: [...skillTasks].sort((a, b) => b.createdAt - a.createdAt).map((task) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
										className: `${Community_module_css_default.row} ${Community_module_css_default.task}`,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: Community_module_css_default.artwork,
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.PluginArtworkSubagent, { size: 32 })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: Community_module_css_default.rowBody,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowTitle,
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
															className: Community_module_css_default.name,
															children: task.plugin.name
														}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
															className: Community_module_css_default.taskStatus,
															children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, {
																state: stateDot(task),
																size: 6
															}), t(PHASE_KEYS[task.phase])]
														})]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: Community_module_css_default.rowMeta,
														children: [task.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: task.version }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: new Date(task.createdAt).toLocaleTimeString(locale, {
															hour: "2-digit",
															minute: "2-digit"
														}) })]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TaskDetails, {
														task,
														t
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CommunityTaskLogPanel, {
														api,
														task,
														locale
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: Community_module_css_default.actions,
												children: [isActive(task) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													disabled: task.phase === "cancelling",
													onClick: () => {
														cancelTask(task);
													},
													children: t("cancel")
												}), (task.phase === "failed" || task.phase === "cancelled") && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
													size: "sm",
													variant: "outline",
													onClick: () => {
														handleInstallSkill(task.plugin);
													},
													children: t("retry")
												})]
											})
										]
									}, task.id))
								})] });
							})() })
						]
					}),
					selectedIntent !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: t(selectedBoundary ? "releaseInstructionsTitle" : selectedManual ? "manualInstallTitle" : "installTitle", { name: selectedPlugin?.name ?? selectedIntent.name }),
						onClose: () => {
							setDetail(null);
						},
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: () => {
								setDetail(null);
							},
							children: t("cancel")
						}), selectedGuide ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							onClick: () => {
								openWebsite(`/plugins/${encodeURIComponent(selectedIntent.id)}`);
							},
							children: t(selectedBoundary ? "openReleaseInstructions" : "manualInstructions")
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: operationBusy || state === null || stateError || state.hostProblem !== void 0,
							onClick: () => {
								requestInstall(selectedIntent);
							},
							children: t("installConfirm")
						})] }),
						children: [
							selectedPlugin?.description && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.detailDescription,
								children: selectedPlugin.description
							}),
							detailLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.meta,
								role: "status",
								children: t("loading")
							}),
							detailError && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: Community_module_css_default.notice,
								"data-tone": "error",
								role: "alert",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("detailFailed") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									onClick: () => {
										setDetailRetry((value) => value + 1);
									},
									children: t("retry")
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
								className: Community_module_css_default.facts,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("source") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedSource === "https://deepseek.stream" ? `${t("sourceName")} · ${t("websiteDestination")}` : `${t("externalSource")} · ${selectedSource}` }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("publisher") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedPlugin?.author || t("publisherUnknown") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("version") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedIntent.version || t("latest") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("packageName") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedPlugin?.npmPackage ?? selectedIntent.id }),
									selectedPlugin?.compatibility !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("compatibility") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedPlugin.compatibility })] }),
									selectedPlugin?.harnessVersion !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("compatibility") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedPlugin.harnessVersion })] }),
									(selectedPlugin?.permissions?.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("permissions") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedPlugin?.permissions?.join(", ") })] }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("price") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: (selectedPlugin?.price ?? 0) > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											openWebsite(`/plugins/${encodeURIComponent(selectedIntent.id)}`);
										},
										children: t("unlock")
									}) : t("free") }),
									!selectedGuide && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("target") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: t("targetName") })] })
								]
							}),
							selectedGuide ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.targetNote,
								children: t(selectedBoundary ? "externalInstallRequired" : "manualInstallRequired")
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.targetNote,
								children: t("targetNote")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.meta,
								children: t("verificationNote")
							})] }),
							detailPlugin !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: Community_module_css_default.readme,
								"aria-label": t("readme"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("readme") }), detailPlugin.readme ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
									text: detailPlugin.readme,
									labels: {
										code: {
											copyLabel: t("copy"),
											copiedLabel: t("copied")
										},
										footnotes: t("footnotes")
									}
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: Community_module_css_default.meta,
									children: t("noReadme")
								})]
							}),
							(selectedPlugin?.screenshots?.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
								className: Community_module_css_default.screenshots,
								"aria-label": t("screenshots"),
								children: selectedPlugin?.screenshots?.map((url, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
									src: url,
									loading: "lazy",
									referrerPolicy: "no-referrer",
									alt: t("screenshot", { index: String(index + 1) })
								}, url))
							}),
							selectedInstalled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.meta,
								children: t("alreadyInstalled")
							}),
							operationBusy && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.meta,
								children: t("busy")
							}),
							notice?.failed && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.problem,
								role: "alert",
								children: noticeText
							})
						]
					}),
					loginOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: t("signInTitle"),
						description: t("signInDescription"),
						onClose: closeLogin,
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: closeLogin,
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							type: "submit",
							form: `${prefix}-login-form`,
							disabled: loginBusy,
							children: t(resumedIntent.current === null ? "signIn" : "signInContinue")
						})] }),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
							id: `${prefix}-login-form`,
							className: Community_module_css_default.form,
							onSubmit: (event) => {
								event.preventDefault();
								signIn();
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: Community_module_css_default.field,
									children: [t("username"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										value: email,
										autoComplete: "username",
										"data-modal-autofocus": true,
										disabled: loginBusy,
										onChange: (event) => {
											setEmail(event.target.value);
										}
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: Community_module_css_default.field,
									children: [t("password"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										type: "password",
										value: password,
										autoComplete: "current-password",
										disabled: loginBusy,
										onChange: (event) => {
											setPassword(event.target.value);
										}
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: Community_module_css_default.actions,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "outline",
										type: "button",
										disabled: loginBusy,
										onClick: () => {
											openAccountWebsite("/auth/register");
										},
										children: t("registerCommunityAccount")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "ghost",
										type: "button",
										disabled: loginBusy,
										onClick: () => {
											openAccountWebsite("/");
										},
										children: t("openCommunityWebsite")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: Community_module_css_default.meta,
									children: t("registrationReturnHint")
								}),
								loginError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: Community_module_css_default.problem,
									role: "alert",
									children: t(loginError)
								})
							]
						})
					}),
					removeBundle !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: t("removeTitle", { name: removeBundle.name }),
						description: t("removeDescription"),
						onClose: () => {
							setRemoveBundle(null);
						},
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: () => {
								setRemoveBundle(null);
							},
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: operationBusy,
							onClick: () => {
								changeBundle(removeBundle, true);
							},
							children: t("remove")
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
							className: Community_module_css_default.facts,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("target") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: t("targetName") })]
						}), notice?.failed && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.problem,
							role: "alert",
							children: noticeText
						})]
					}),
					selectedSkillForPrompt !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: selectedSkillForPrompt.name,
						description: selectedSkillForPrompt.description,
						onClose: () => {
							setSelectedSkillForPrompt(null);
						},
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: () => {
								setSelectedSkillForPrompt(null);
							},
							children: t("close")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, { size: 14 }),
							onClick: () => {
								navigator.clipboard.writeText(selectedSkillForPrompt.previewMarkdown || selectedSkillForPrompt.description || "");
								setCopiedPrompt(true);
								setTimeout(() => {
									if (mounted.current) setCopiedPrompt(false);
								}, 2e3);
							},
							children: t(copiedPrompt ? "promptCopied" : "copyPrompt")
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
							className: Community_module_css_default.facts,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("publisher") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedSkillForPrompt.author || t("publisherUnknown") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("version") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedSkillForPrompt.version || "1.0.0" }),
								selectedSkillForPrompt.category !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("category") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: t(SKILL_CATEGORY_KEYS[selectedSkillForPrompt.category] ?? "skillCatAll") })] }),
								selectedSkillForPrompt.whenToUse !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("whenToUse") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedSkillForPrompt.whenToUse })] }),
								(selectedSkillForPrompt.requiredTools?.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("requiredTools") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selectedSkillForPrompt.requiredTools?.join(", ") })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("target") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dd", { children: [
									"~/.dsh/skills/",
									selectedSkillForPrompt.id,
									"/"
								] })
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							className: Community_module_css_default.readme,
							"aria-label": "SKILL.md",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: "SKILL.md" }), selectedSkillForPrompt.previewMarkdown ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
								text: selectedSkillForPrompt.previewMarkdown,
								labels: {
									code: {
										copyLabel: t("copy"),
										copiedLabel: t("copied")
									},
									footnotes: t("footnotes")
								}
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: Community_module_css_default.meta,
								children: t("noReadme")
							})]
						})]
					}),
					skillToRemove !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: t("removeSkillConfirmTitle", { name: skillToRemove.name }),
						description: t("removeSkillConfirmDesc"),
						onClose: () => {
							setSkillToRemove(null);
						},
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: () => {
								setSkillToRemove(null);
							},
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: skillBusy[skillToRemove.id] === true,
							onClick: () => {
								handleRemoveSkill(skillToRemove.id);
							},
							children: t("remove")
						})] }),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
							className: Community_module_css_default.facts,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("target") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dd", { children: [
								"~/.dsh/skills/",
								skillToRemove.id,
								"/"
							] })]
						})
					}),
					skillInstallIntent !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: true,
						className: Community_module_css_default.modal ?? "",
						contentClassName: Community_module_css_default.modalContent ?? "",
						closeLabel: t("close"),
						title: t("installTitle", { name: skillInstallIntent.name }),
						description: t("marketIntro"),
						onClose: () => {
							setSkillInstallIntent(null);
						},
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							onClick: () => {
								setSkillInstallIntent(null);
							},
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: skillBusy[skillInstallIntent.id] === true,
							onClick: () => {
								handleInstallSkill(skillInstallIntent);
							},
							children: t("installSkill")
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
							className: Community_module_css_default.facts,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("source") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: skillInstallIntent.repo || "deepseek-plugins-storage" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("version") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: skillInstallIntent.version || "1.0.0" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t("target") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dd", { children: [
									"~/.dsh/skills/",
									skillInstallIntent.id,
									"/"
								] })
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: Community_module_css_default.targetNote,
							children: t("marketIntro")
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/index.ts
		/**
		* Native desktop market registration backed by the Electron community capability,
		* with universal Web Fallback for any DeepSeek Harness (DSH) environment.
		*/
		/** Cordis client identity shared with the package's module-loader registration. */
		const name = "dsh-community";
		/** Services required to register the native market panel and sidebar entry. */
		const inject = [
			"slots",
			"locale",
			"layout"
		];
		function MarketIcon({ size }) {
			return (0, react.createElement)(_deepseek_ai_dsh_client_ui_primitives.IconCordisPluginOutlineRegular, { size });
		}
		/** Web / Fallback API for non-desktop DSH or third-party web instances. */
		function createWebCommunityApi() {
			const origin = "https://deepseek.stream";
			return {
				async getState() {
					return {
						account: null,
						bundles: [],
						tasks: []
					};
				},
				async catalog(refresh, query) {
					const url = new URL("/api/plugins", origin);
					if (query?.query) url.searchParams.set("query", query.query);
					if (query?.category) url.searchParams.set("category", query.category);
					if (query?.page) url.searchParams.set("page", String(query.page));
					if (query?.pageSize) url.searchParams.set("pageSize", String(query.pageSize));
					const res = await fetch(url.toString());
					if (!res.ok) throw new Error("Failed to fetch plugin catalog");
					const data = await res.json();
					const list = Array.isArray(data) ? data : data.plugins || [];
					return {
						plugins: list,
						total: data.total || list.length,
						page: data.page || 1,
						totalPages: data.totalPages || 1,
						updatedAt: Date.now(),
						cached: false
					};
				},
				async detail(id) {
					const res = await fetch(`${origin}/api/plugins/detail?id=${encodeURIComponent(id)}`);
					if (!res.ok) throw new Error("Failed to fetch plugin detail");
					return await res.json();
				},
				async skillCatalog(refresh, query) {
					const url = new URL("/api/skills", origin);
					if (query?.query) url.searchParams.set("query", query.query);
					if (query?.category) url.searchParams.set("category", query.category);
					if (query?.page) url.searchParams.set("page", String(query.page));
					if (query?.pageSize) url.searchParams.set("pageSize", String(query.pageSize));
					const res = await fetch(url.toString());
					if (!res.ok) throw new Error("Failed to fetch skill catalog");
					const data = await res.json();
					const list = Array.isArray(data) ? data : data.skills || [];
					return {
						skills: list,
						total: data.total || list.length,
						page: data.page || 1,
						totalPages: data.totalPages || 1,
						updatedAt: Date.now(),
						cached: false
					};
				},
				async skillDetail(id) {
					const res = await fetch(`${origin}/api/skills/detail?id=${encodeURIComponent(id)}`);
					if (!res.ok) throw new Error("Failed to fetch skill detail");
					return await res.json();
				},
				async openWebsite(path = "/") {
					window.open(`${origin}${path}`, "_blank");
				},
				async install(intent) {
					window.location.href = `dsh://plugin/install?id=${encodeURIComponent(intent.id)}&name=${encodeURIComponent(intent.name)}`;
					return {
						id: "task-web-" + Date.now(),
						plugin: intent,
						phase: "applied",
						createdAt: Date.now(),
						updatedAt: Date.now()
					};
				},
				async installSkill(intent) {
					window.location.href = `dsh://skill/install?id=${encodeURIComponent(intent.id)}&name=${encodeURIComponent(intent.name)}`;
					return {
						id: "task-web-skill-" + Date.now(),
						plugin: {
							id: intent.id,
							name: intent.name,
							version: intent.version
						},
						phase: "applied",
						createdAt: Date.now(),
						updatedAt: Date.now()
					};
				},
				async cancel() {},
				async getTaskLog() {
					return {
						id: "",
						entries: [],
						nextCursor: 0,
						truncated: false,
						unavailable: true
					};
				},
				async copyTaskLog() {},
				async exportTaskLog() {
					return false;
				},
				async setEnabled() {
					return {
						application: "applied",
						changed: false
					};
				},
				async remove() {
					return {
						application: "applied",
						changed: false
					};
				},
				async toggleSkill() {
					return false;
				},
				async removeSkill() {
					return false;
				},
				async listInstalledSkills() {
					return [];
				},
				async login() {
					return {
						ok: false,
						problem: { code: "login-network-failed" }
					};
				},
				async logout() {},
				async takePending() {
					return null;
				},
				async claimOpen() {
					return null;
				},
				async acknowledgeOpen() {},
				subscribe(listener) {
					return () => {};
				},
				subscribeOpen(listener) {
					return () => {};
				}
			};
		}
		/** Register the community panel in the host client environment.
		* @param ctx - Host client services whose effects own every registration.
		*/
		function apply(ctx) {
			const nativeApi = window.dshDesktop?.community;
			const api = nativeApi ?? createWebCommunityApi();
			const panelId = "community-market";
			const label = () => communityText(ctx.locale.getSnapshot().active, "marketEntry");
			const Panel = () => {
				return (0, react.createElement)(CommunitySection, {
					api,
					locale: (0, react.useSyncExternalStore)((callback) => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot().active)
				});
			};
			ctx.slots.inject("main", () => ctx.slots.register({
				name: "main",
				key: panelId
			}, Panel));
			ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
				name: "sidebar.panellist",
				id: panelId,
				order: 1,
				label
			}, MarketIcon));
			if (nativeApi) ctx.effect(() => {
				let disposed = false;
				const open = () => {
					nativeApi.claimOpen().then(async (request) => {
						if (disposed || request === null) return;
						ctx.layout.selectPanel(panelId);
						await nativeApi.acknowledgeOpen(request);
					}).catch(() => {
						console.warn("Community navigation is unavailable");
					});
				};
				const off = nativeApi.subscribeOpen(open);
				open();
				return () => {
					disposed = true;
					off();
				};
			}, "dsh-community: desktop navigation");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
