<div align="center">

# 🌐 dsh-community

### DeepSeek Harness (DSH) 官方与开源生态「插件与 Skill 双生态市场」

[![GitHub stars](https://img.shields.io/github/stars/Minglink/dsh-community?style=flat-square&logo=github)](https://github.com/Minglink/dsh-community/stargazers)
[![GitHub license](https://img.shields.io/github/license/Minglink/dsh-community?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Desktop%20%7C%20Web-blue?style=flat-square)](https://deepseek.stream)
[![DeepSeek Harness](https://img.shields.io/badge/DSH-v0.2.x%2B-purple?style=flat-square)](https://github.com/deepseek-ai/deepseek-harness)
[![Cordis Core](https://img.shields.io/badge/Cordis-v4.x-emerald?style=flat-square)](https://cordis.moe)

**简体中文** | [English](README.en.md)

</div>

---

## 📖 项目全景与定位 (Overview)

`dsh-community` 是专为 **DeepSeek Harness (DSH)** 深度定制的官方与开源生态资产扩展中心。本插件深度整合 Cordis 微内核设计哲学，为 DSH 注入了极高审美、丝滑交互的**「Cordis 插件（Plugins）」与「智能体技能（Agent Skills）」双生态统一应用市场**。

无论是运行在 **DSH 官方桌面端 (Electron)**，还是在 **纯 Web 端 / 远端服务器 (Headless / Docker)**，`dsh-community` 均能自动识别当前宿主环境，提供秒级检索、在线 SOP 规范解析、一键安装装配、沙箱验证与运行诊断的全生命周期闭环。

---

## ✨ 核心特性矩阵 (Key Features)

### 1. 🔌 双生态并行中心 (Dual-Ecosystem Architecture)
* **Cordis 插件市场（Plugins Market）**：
  * **海量收录**：覆盖深度推理强化、视觉多模态适配、Agent 工作流调度、持久化终端、系统桌宠与个性化 UI 增强等 400+ 款在册插件。
  * **容器级生命周期管控**：支持插件的一键安装、试运行校验（Trial）、在线热重载（HMR）、启用/禁用状态切换与事务级原子化卸载。
  * **配置自愈机制**：自动维护 `cordis.patch.yml` 与环境依赖项，无需手动修改底层 YAML 配置文件。
* **智能体技能市场（Skills Market）**：
  * **SOP 资产标准化**：收录符合 Anthropic / DSH 现代 Agent 规范的精选技能库（Prompt / SOP / Action Rules）。
  * **零 Token 冗余开销**：技能以模块化方式落地于宿主 `~/.dsh/skills/{id}/` 目录，对话中按需调度，杜绝全局上下文污染与无谓的上下文 Token 浪费。
  * **即开即览**：支持在市场内直接在线预览完整的 `SKILL.md` 正文，直观查阅触发场景（`whenToUse`）与前置依赖工具清单（`requiredTools`）。

### 2. 🏷️ 深度适配官方 DeepSeek Harness 插件标签与标准 (Official Standards)
* **认证标签（Official Badge）**：
  * 自动深度比对官方插件元数据库，针对官方自研旗舰（如 `dsh-better-sidebar`、`dsh-infinite-gen`、`dsh-plugin-agent-workflow`、`modlens` 等）以及高星官方金牌扩展，在列表中自动高亮展示 `<Tag tone="accent">官方</Tag>` 专属认证标签。
* **多维场景与标签检索矩阵**：
  * **主分类维度**：开发底座（`dev`）、效率工具（`tools`）、多模态与视觉（`models`）、提示词与推理（`prompt`）、工作流自动化（`workflow`）、视觉外观（`ui`）。
  * **自由场景标签（Scene Tags）**：支持快捷筛选 `#官方`、`#视觉`、`#终端`、`#RAG` 等场景标签，点击标签即可秒级聚合。
  * **生态多维排序**：热门总榜、⭐ 必装精选、飙升榜、最新发布、累计下载、星标榜与用户真实评分榜。
* **严格遵循官方 Manifest 契约**：
  * 产物全面遵循 `@deepseek-ai/dsh-package-manifest` 契约，自动注入 `"dsh": { "manifestVersion": 1 }`，向下兼容标准 Cordis Loader 容器。

### 3. 🌉 Universal Bridge 全平台双模自适应架构
* **DSH 桌面端环境 (Desktop Native Mode)**：
  * 对接底层 Electron IPC 与 Windows 注册表协议，支持通过浏览器或中台点击一键直接唤醒桌面客户端完成静默装配。
  * **可视化任务诊断控制台**：
    * **任务执行日志面板 (`CommunityTaskLogPanel`)**：实时滚屏查看下载速率、解压进度、Junction 虚拟软链状态与 pnpm 构建事务日志。
    * **运行时诊断面板 (`CommunityRuntimeLogPanel`)**：实时捕获宿主渲染层异常与崩溃堆栈，支持一键脱敏导出与排障。
* **标准 Web / 远程环境 (Universal Web Fallback)**：
  * 在无 Electron 底座的 Web 模式下无缝降级，直接连通深流社区云端中枢（`https://deepseek.stream/api`）。
  * 提供完全一致的浏览、搜索、分页与 SOP 在线预览体验，并支持一键复制外部拉起协议命令。

### 4. 🎨 极致的原生视觉与交互设计
* 采用 DSH 官方底层 `@deepseek-ai/dsh-client-ui-primitives` 组件库构建，视觉风格与深流宿主浑然一体。
* 原生暗黑科技极简风格，流畅动效与状态指示灯。
* 完备的国际化本地化字典（`community-locales.ts`），中英双语无缝切换。
* 原生注册全局侧边栏入口与快捷键呼出（`CmdOrCtrl+M`）。

---

## 🏗️ 架构拓扑 (Architecture Topology)

```text
┌────────────────────────────────────────────────────────────────────────┐
│                      DeepSeek Stream 云端生态中枢                       │
│                       (https://deepseek.stream)                        │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ HTTP API / dsh:// 外部协议
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        dsh-community 客户端插件                         │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     Universal Bridge 桥接层                     │   │
│   │    (自动环境探测: window.dshDesktop ? DesktopMode : WebMode)    │   │
│   └──────────────────┬──────────────────────────┬──────────────────┘   │
│                      │                          │                      │
│        [Desktop 模式: Electron IPC]    [Web 降级模式: Fetch API]       │
│                      │                          │                      │
│                      ▼                          ▼                      │
│   ┌──────────────────────────────────┐   ┌─────────────────────────┐   │
│   │       本地宿主进程 (Host IPC)      │   │   深流云端 OpenAPI 直连   │   │
│   │ - dsh:// 协议解析器              │   │ - 插件/Skill 大厅检索   │   │
│   │ - aiInspect 安全预检             │   │ - 在线 SOP Markdown 解析│   │
│   │ - Junction 软链与 Patch 事务自愈  │   │ - 协议调用指令一键复制  │   │
│   │ - 实时任务诊断 (TaskLog)         │   └─────────────────────────┘   │
│   │ - 运行状态诊断 (RuntimeLog)      │                                 │
│   └──────────────────┬───────────────┘                                 │
│                      ▼                                                 │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                   DeepSeek Harness 核心容器                     │   │
│   │         ~/.dsh/plugins/  &  ~/.dsh/skills/  &  cordis.yml      │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 安装与装配指引 (Installation & Setup)

### 方式一：DSH Profile 配置文件集成（推荐）

1. **获取插件代码**：
   将本仓库直接克隆至你的 DSH 用户插件目录：
   ```bash
   git clone https://github.com/Minglink/dsh-community.git ~/.dsh/plugins/dsh-community
   ```
2. **在 Cordis 配置中注入挂载**：
   在当前运行的 Profile 配置文件（如 `~/.dsh/profiles/desktop/cordis.patch.yml` 或 `cordis.yml`）中添加插入项：
   ```yaml
   - insert:
       - id: dsh-community
         name: dsh-community
   ```
3. **重启并体验**：
   启动或重启 DeepSeek Harness，左侧导航栏将出现 **「插件与 Skill 市场」** 入口图标（支持全局快捷键 `CmdOrCtrl+M`）。

---

### 方式二：外部 `dsh://` 协议一键静默安装

通过深流官方中台（[deepseek.stream/software](https://deepseek.stream/software)）点击「🚀 一键唤醒桌面端安装」，或在系统运行终端中执行：

```powershell
# Windows 环境协议模拟执行
Start-Process "dsh://plugin/install?id=dsh-community&name=深流社区插件市场&downloadUrl=https://deepseek.stream/api/plugins/download?id=dsh-community"
```

桌面端守护进程捕获协议后，将自动完成依赖下载、目录挂载与热重载。

---

## 📡 `dsh://` 协议调用规范 (Protocol Specification)

桌面端通过注册 Windows 系统 URL Protocol `dsh://` 实现跨应用交互，支持如下标准调用范式：

### 1. 插件安装协议 (`dsh://plugin/install`)
```text
dsh://plugin/install?id={id}&name={name}&version={version}&repo={repo}&downloadUrl={downloadUrl}&permissions={permissions}
```
* **参数说明**：
  * `id` *(必填)*: 插件全英文唯一标识符（如 `dsh-community`、`dsh-infinite-gen-3`）。
  * `name` *(必填)*: 插件友好中文显示名称（URL 编码）。
  * `version` *(可选)*: 版本号约束（如 `0.2.1` 或 `latest`）。
  * `downloadUrl` *(可选)*: 预编译安装包 ZIP 直链。
  * `repo` *(可选)*: GitHub 源码仓库标识（如 `Minglink/dsh-community`）。

### 2. 技能安装协议 (`dsh://skill/install`)
```text
dsh://skill/install?id={id}&name={name}&version={version}&downloadUrl={downloadUrl}
```
* **落地动作**：
  * 下载并解压技能包至 `~/.dsh/skills/{id}/` 目录；
  * 自动验证包含核心 `SKILL.md` SOP 规范正文；
  * 即时挂载至 Agent 思考上下文，无需重启宿主。

---

## 🛠️ 二次开发与构建 (Development & Build)

本工程采用现代轻量化单文件打包架构，源码基于 TypeScript 与 React 18，无需繁冗笨重的脚手架。

### 目录结构导航
```text
dsh-community/
├── cordis.patch.yml               # Cordis 容器自动装配配置
├── index.js                       # Cordis Host 插件生命周期入口
├── package.json                   # 模块元数据与导向配置
├── build.js                       # 基于 tsdown & lightningcss 的构建引擎
├── tsconfig.client.json           # 客户端 TypeScript 严格配置
├── client/                        # 预构建前端 Bundle（供 DSH __ModuleLoader__ 直接加载）
│   ├── client.js                  # 编译后生产环境单文件 Bundle (带 SourceMap)
│   └── client.js.map
└── src/
    └── client/                    # 完整前端源码
        ├── index.ts               # 客户端注入点（含 Desktop/Web 双模式桥接）
        ├── CommunitySection.tsx   # 市场主面板（双 Tab、SOP 预览、分类与检索）
        ├── CommunityRuntimeLogPanel.tsx  # 运行时诊断日志组件
        ├── CommunityTaskLogPanel.tsx     # 任务执行日志组件
        ├── community-locales.ts   # 完整中英双语国际化字典
        ├── community-types.ts     # TypeScript 强类型契约定义
        └── Community.module.css   # 暗黑极简设计规范样式
```

### 构建指令
```bash
# 1. 安装开发构建依赖 (若独立编译)
npm install

# 2. 执行生产级单文件极速构建 (输出 client/client.js)
npm run build
# 或直接执行: node build.js
```


## 📄 开源许可证 (License)

本项目基于 [MIT License](LICENSE) 开源发布。  
欢迎全球 DeepSeek 智能体开发者提交 Issue 与 Pull Request 共同繁荣开源智能体生态！
