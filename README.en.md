<div align="center">

# 🌐 dsh-community

### Official & Open-Source Ecosystem "Plugins & Skills Market" for DeepSeek Harness (DSH)

[![GitHub stars](https://img.shields.io/github/stars/Minglink/dsh-community?style=flat-square&logo=github)](https://github.com/Minglink/dsh-community/stargazers)
[![GitHub license](https://img.shields.io/github/license/Minglink/dsh-community?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Desktop%20%7C%20Web-blue?style=flat-square)](https://deepseek.stream)
[![DeepSeek Harness](https://img.shields.io/badge/DSH-v0.2.x%2B-purple?style=flat-square)](https://github.com/deepseek-ai/deepseek-harness)
[![Cordis Core](https://img.shields.io/badge/Cordis-v4.x-emerald?style=flat-square)](https://cordis.moe)

[简体中文](README.md) | **English**

</div>

---

## 📖 Overview

`dsh-community` is an extension center and asset management plugin designed specifically for **DeepSeek Harness (DSH)**. Deeply built upon Cordis microkernel architecture, it provides an aesthetic, native **"Plugins & Skills Dual Market"**.

Whether you are running in **DSH Desktop (Electron)** or in **Web / Remote Server environments (Headless / Docker)**, `dsh-community` automatically detects the host runtime to provide fast search, online SOP specification preview, 1-click mounting, trial verification, and comprehensive runtime diagnostics.

---

## ✨ Key Features

### 1. 🔌 Dual-Ecosystem Architecture
* **Cordis Plugins Market**:
  * **Extensive Catalog**: Covers reasoning enhancements, multimodal vision adapters, agent workflows, persistent terminals, desktop widgets, and UI customizations.
  * **Container Lifecycle Management**: Supports 1-click install, trial validation, hot module replacement (HMR), enable/disable toggles, and atomic uninstallation.
  * **Self-Healing Configuration**: Automatically maintains `cordis.patch.yml` and dependencies without requiring manual YAML modifications.
* **Agent Skills Market**:
  * **Standardized SOPs**: Curates lightweight Agent skills conforming to Anthropic & DSH standards (`SKILL.md`).
  * **Zero Token Overhead**: Skills are mounted directly into `~/.dsh/skills/{id}/` and scheduled dynamically without cluttering global system prompts.
  * **Instant Online Preview**: View full `SKILL.md` documents, trigger conditions (`whenToUse`), and tool prerequisites (`requiredTools`) directly in the app.

### 2. 🏷️ Full Compatibility with Official DeepSeek Harness Plugin Tags
* **Official Certification Badges**: Automatically identifies official flagship extensions and displays `<Tag tone="accent">Official</Tag>`.
* **Multi-Dimensional Tag Filtering**: Filter by core categories (`dev`, `tools`, `models`, `prompt`, `workflow`, `ui`) or scene tags (`#official`, `#vision`, `#terminal`, `#RAG`).
* **Official Manifest Compliance**: Conforms strictly to `@deepseek-ai/dsh-package-manifest` declarations (`dsh.manifestVersion: 1`).

### 3. 🌉 Universal Bridge Architecture
* **Desktop Native Mode**: Integrates with Electron IPC for `dsh://` protocol wake-up, background task queues, task logs (`CommunityTaskLogPanel`), and runtime diagnostic panels (`CommunityRuntimeLogPanel`).
* **Web Fallback Mode**: Gracefully connects to cloud API endpoints (`https://deepseek.stream/api`) for browsing, searching, and 1-click install command generation.

---

## 🚀 Installation & Setup

### Method 1: DSH Profile Integration (Recommended)

1. Clone this repository into your DSH plugins directory:
   ```bash
   git clone https://github.com/Minglink/dsh-community.git ~/.dsh/plugins/dsh-community
   ```
2. Add the insert entry in your `cordis.patch.yml` or `cordis.yml`:
   ```yaml
   - insert:
       - id: dsh-community
         name: dsh-community
   ```
3. Restart DSH. You will find **"Plugins & Skills Market"** in the sidebar (shortcut: `CmdOrCtrl+M`).

### Method 2: External Protocol 1-Click Install

Click install on [deepseek.stream/software](https://deepseek.stream/software) or run:
```powershell
Start-Process "dsh://plugin/install?id=dsh-community&name=Plugins%20and%20Skills%20Market"
```

---

## 🛠️ Development & Build

```bash
# Install dependencies
npm install

# Build client bundle (outputs to client/client.js)
npm run build
```

---

## 📄 License

Released under the [MIT License](LICENSE).
