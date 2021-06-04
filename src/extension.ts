import vscode from "vscode";

function activate(context: vscode.ExtensionContext) {
	console.log(context);
	console.log(vscode);
	console.log("start");
}

function deactivate() {}

exports.activate = activate;
module.exports = {
	activate,
	deactivate
};

/**
 * f5开始调试
 */
