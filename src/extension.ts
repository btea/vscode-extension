import vscode from "vscode";
import { startRun } from "./install";
import { uninstall } from "./uninstall";

function activate(context: vscode.ExtensionContext): void {
	// console.log(context);
	// console.log(vscode);
	startRun();
	console.log("start");
}

function deactivate() {
	uninstall();
}

exports.activate = activate;
module.exports = {
	activate,
	deactivate
};

/**
 * f5开始调试
 */
