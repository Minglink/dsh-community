# dsh-community

Official and Open-Source Ecosystem "Plugins & Skills Market" for DeepSeek Harness (DSH).

English | [简体中文](README.zh.md)

---

## 📖 Overview

`dsh-community` is an extension center plugin designed specifically for DeepSeek Harness (DSH), providing a unified and aesthetic **"Plugins & Skills Dual Market"**.

- **Dual-Ecosystem Support**:
  - **Cordis Plugins**: Full-featured extensions with dependency verification, trial validation, and lifecycle management.
  - **Agent Skills**: Lightweight SOP/Prompt specification packages mounted into `~/.dsh/skills/{id}/`, allowing immediate enablement/disablement with zero token overhead.
- **Universal Bridge Architecture**:
  - **DSH Desktop**: Deeply integrates with Electron IPC for `dsh://` protocol wake-up, background task tracking, and diagnostic log panels.
  - **DSH Web / Third-Party**: Built-in high-availability Web fallback directly connecting to `https://deepseek.stream/api` for browsing, SOP markdown preview, and 1-click URI copying.

---

## 🚀 Installation & Usage

### Method 1: Directory Mount (Recommended)

1. Clone this repository into your DSH plugins directory (`~/.dsh/plugins/dsh-community` or profile's `node_modules`):
   ```bash
   git clone https://github.com/Minglink/dsh-community.git ~/.dsh/plugins/dsh-community
   ```
2. Add the plugin entry to `cordis.patch.yml` or `cordis.yml`:
   ```yaml
   - insert:
       - id: dsh-community
         name: dsh-community
   ```
3. Restart DSH. You will see **"Plugins & Skills"** in the sidebar (shortcut: `CmdOrCtrl+M`).

### Method 2: External URI Installation

Install directly via the community website ([deepseek.stream/software](https://deepseek.stream/software)) or protocol:
```text
dsh://plugin/install?id=dsh-community&name=dsh-community
```

---

## 🛠️ Development & Building

The source code is located in `src/client/`, and pre-compiled production bundles are provided out of the box in `client/client.js`.

```bash
# Install dependencies
npm install

# Build client bundle
node build.js
```

---

## 📄 License

[MIT License](LICENSE)
