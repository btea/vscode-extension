import fs from "fs";
import path from "path";

const filename = require.main?.filename;

export const base = path.dirname(filename || "");

export const htmlPath = path.join(
	base,
	"vs",
	"code",
	"electron-browser",
	"workbench",
	"workbench.html"
);

/**
 * 获取html文件
 */
export function getHtml(): string {
	return fs.readFileSync(htmlPath, "utf-8");
}
