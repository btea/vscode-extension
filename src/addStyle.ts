/**
 * 添加光影效果
 */
export function addStyle(): string {
	let style = `<style type="text/css" media="screen" class="bulingbuling">\n`;
	style += addTextLight();
	style += `\n</style>`;
	return style;
}

/**
 * 删除光影效果
 */
export function removeStyle(): RegExp {
	return /<style type="text\/css" media="screen" class="bulingbuling">[\s\S]*?<\/style>/;
}

/**
 * 添加文字阴影效果
 */
function addTextLight(): string {
	return `  [class^="mtk"] {
        text-shadow: 0 0 15px;
    }`;
}
