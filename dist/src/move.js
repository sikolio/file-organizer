"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var renameFile = function (path, newPath) {
    return new Promise(function (res, rej) {
        fs_1.default.rename(path, newPath, function (err) {
            return err ? rej(err) : res(true);
        });
    });
};
var copyFile = function (path, newPath, flags) {
    return new Promise(function (res, rej) {
        var readStream = fs_1.default.createReadStream(path);
        var writeStream = fs_1.default.createWriteStream(newPath, { flags: flags });
        readStream.on('error', rej);
        writeStream.on('error', rej);
        writeStream.on('finish', res);
        readStream.pipe(writeStream);
    });
};
var unlinkFile = function (path) {
    return new Promise(function (res, rej) {
        fs_1.default.unlink(path, function (err) {
            return err ? rej(err) : res(true);
        });
    });
};
exports.moveFile = function (path, newPath, flags) {
    if (flags === void 0) { flags = 'w'; }
    return renameFile(path, newPath)
        .catch(function (e) {
        if (e.code !== 'EXDEV') {
            throw new e();
        }
        else {
            return copyFile(path, newPath, flags)
                .then(function () { return unlinkFile(path); });
        }
    });
};
