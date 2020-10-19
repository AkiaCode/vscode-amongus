// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const among = 'https://cdn.discordapp.com/attachments/701947403653218375/767616514463236096/FB_IMG_1603065670119.jpg'


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-amongus.helloWorld', () => {
			// Create and show panel
			const panel = vscode.window.createWebviewPanel(
				'Error AmongUs',
				'Error AmongUs',
				vscode.ViewColumn.One,
				{}
			);

			// And set its HTML content
			panel.webview.html = getWebviewContent();
		})
	);
}
exports.activate = activate;

function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	  <img src="${among}" width="300" />
  </body>
  </html>`;
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
