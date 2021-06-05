import config from "./config";
import { getHtml, htmlPath } from "./getHtml";
import { addStyle } from "./addStyle";
import { writeFileSync } from "fs";

/**
 * 开始安装
 */

export function startRun(): void {
	if (config.installed) {
		return;
	}
	config.installed = true;
	const content = getHtml();
	const words = content.split("</head>");
	const change = words[0] + addStyle() + "</head>" + words[1];
	updateHtml(change);
}

export function updateHtml(content: string): void {
	try {
		writeFileSync(htmlPath, content, "utf-8");
	} catch (error) {
		console.log(error);
	}
}
