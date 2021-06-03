const vscode = require('vscode');

function activate(context) {
    console.log(context);
    console.log(vscode);
    console.log('start');
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
