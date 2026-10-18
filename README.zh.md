# dsh-community

DeepSeek Harness (DSH) 官方与开源生态「插件与 Skill 双生态市场」（Plugins & Skills Market）开源独立插件。

[English](README.md) | 简体中文

---

## 📖 插件概述

`dsh-community` 是专为 DeepSeek Harness (DSH) 设计的官方与开源生态扩展中心插件。本插件为 DSH 注入了极高审美、原生体验的**「插件与 Skill 双生态市场」**。

- **双生态并行支持**：
  - **Cordis 插件（Plugins）**：深流社区全量功能扩展模块，提供环境依赖自动检查、沙箱试运行与生命周期管理。
  - **智能体技能（Skills）**：轻量级 Agent SOP/Prompt 规范库，支持在 `~/.dsh/skills/{id}/` 实时热挂载、即时启用/停用，零冗余 Token 消耗。
- **全平台自适应架构（Universal Bridge）**：
  - **DSH 桌面端环境**：深度对接 Electron 原生 IPC 通信层，支持 `dsh://` 协议秒级静默唤醒、多任务并发安装、任务/运行诊断日志面板以及真实热重载。
  - **标准 DSH Web / 第三方环境**：内置高可用 Web 降级适配器，直接连接深流社区云端中枢（`https://deepseek.stream/api`），无需任何底层依赖即可完整浏览生态大厅、在线解析预览 SKILL.md SOP 规范并一键复制安装协议。

---

## 🚀 安装与使用

### 方式一：物理目录挂载（推荐）

1. 将本仓库克隆至你的 DSH 插件根目录（通常为 `~/.dsh/plugins/dsh-community` 或当前 profile 的 `node_modules` 目录）：
   ```bash
   git clone https://github.com/Minglink/dsh-community.git ~/.dsh/plugins/dsh-community
   ```
2. 在 DSH 运行配置（例如 `cordis.patch.yml` 或 `cordis.yml`）中添加插件引用：
   ```yaml
   - insert:
       - id: dsh-community
         name: dsh-community
   ```
3. 启动或重启 DSH，左侧栏即可看到 **「插件与 Skill 市场」** 图标（支持快捷键 `CmdOrCtrl+M`）。

### 方式二：外部协议一键安装

通过深流社区（[deepseek.stream/software](https://deepseek.stream/software)）点击安装，或通过支持 `dsh://` 协议的应用一键拉起装配：
```text
dsh://plugin/install?id=dsh-community&name=dsh-community
```

---

## 🛠️ 二次开发与构建

本仓库采用模块化架构，源码位于 `src/client/`，开箱自带即用型生产制品 `client/client.js`。

### 目录结构
```text
dsh-community/
├── cordis.patch.yml       # Cordis 容器自动装配配置
├── index.js               # Cordis Host 插件生命周期入口
├── package.json           # 模块元数据与导向配置
├── build.js               # 基于 tsdown & lightningcss 的构建引擎
├── tsconfig.client.json   # 客户端 TypeScript 严格配置
├── client/                # 预构建前端 Bundle（供 DSH __ModuleLoader__ 直接加载）
│   ├── client.js
│   └── client.js.map
└── src/
    └── client/            # 完整前端源码
        ├── index.ts       # 客户端注入点（含 Desktop/Web 双模式桥接）
        ├── CommunitySection.tsx          # 市场主面板（双 Tab、SOP 预览、分类与检索）
        ├── CommunityRuntimeLogPanel.tsx  # 运行时诊断日志组件
        ├── CommunityTaskLogPanel.tsx     # 任务执行日志组件
        ├── community-locales.ts          # 中英双语本地化字典
        ├── community-types.ts            # 独立完整的 TypeScript 契约类型
        └── Community.module.css          # 暗黑极简设计规范样式
```

### 构建指令
```bash
# 安装开发构建依赖（若在 DSH 工程外部独立编译）
npm install

# 执行生产级单文件打包（输出 client/client.js）
node build.js
```

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源发布。
欢迎提交 Issue 与 Pull Request 共同完善 DeepSeek 智能体生态！
