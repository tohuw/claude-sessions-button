# Claude Sessions Button

A tiny VS Code extension that adds an editor title bar button to open the Claude Code sessions list.

## Why?

The built-in Claude Code button in the editor title bar opens a new session (or the last session). This extension adds a button that opens the **sessions list** instead, making it easy to switch between existing sessions — especially useful in **Zen Mode**, where the sidebar is hidden.

## Install

### From source

1. Clone this repo into your VS Code extensions directory:

   ```sh
   git clone https://github.com/tohuw/claude-sessions-button ~/.vscode/extensions/claude-sessions-button-1.0.0
   ```

2. Reload VS Code.

### Manual VSIX

1. Install [vsce](https://github.com/microsoft/vscode-vsce): `npm install -g @vscode/vsce`
2. Package: `vsce package`
3. Install: `code --install-extension claude-sessions-button-1.0.0.vsix`

## Setup

After installing, you'll see **two** Claude icons in the editor title bar — the original and this one. To remove the original:

1. Right-click the editor title bar
2. Uncheck **Claude Code: Open**

The remaining button will open your sessions list.

## Requirements

- [Claude Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) VS Code extension

## License

MIT
