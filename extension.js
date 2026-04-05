const vscode = require('vscode');

function activate(context) {
    const disposable = vscode.commands.registerCommand('claude-sessions-button.openSessions', () => {
        vscode.commands.executeCommand('claudeVSCodeSessionsList.focus');
    });
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
