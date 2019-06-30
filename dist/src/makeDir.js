"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.makeDir = function (dirPath) {
    var splitted = dirPath.split(new RegExp('/', 'g'));
    var checkingDir = '';
    splitted.forEach(function (part) {
        checkingDir += part + '/';
        if (!fs_1.default.existsSync(checkingDir)) {
            console.log("Folder " + checkingDir + " doesn't exists, creating...");
            fs_1.default.mkdirSync(checkingDir);
        }
    });
};
