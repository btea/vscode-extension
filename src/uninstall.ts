import { getHtml, htmlPath } from "./getHtml";
import { removeStyle } from "./addStyle";
import { updateHtml } from "./install";
import config from "./config";

export function uninstall(): void {
	const text = getHtml();
	const init = text.replace(removeStyle(), "");
	updateHtml(init);
	config.installed = false;
	console.log("卸载完成");
}
