import config from "./config";
import { getHtml, htmlPath } from "./getHtml";
import { addStyle } from "./addStyle";
import { writeFileSync } from "fs";

/**
 * 开始安装
 */

export function startRun() {
	if (config.installed) {
		return;
	}
	config.installed = true;
	const content = getHtml();
	const words = content.split("</head>");
	let change = words[0] + addStyle() + "</head>" + words[1];
	console.log(change);
	updateHtml(change);
}

export function updateHtml(content: string) {
	try {
		writeFileSync(htmlPath, content, "utf-8");
	} catch (error) {}
}
