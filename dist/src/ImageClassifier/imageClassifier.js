"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var exifreader_1 = __importDefault(require("exifreader"));
var fs_1 = __importDefault(require("fs"));
var moment_1 = __importDefault(require("moment"));
var datetimeFormats_1 = require("./datetimeFormats");
exports.imageClassifier = function (filePath) {
    var splitted = filePath.split(new RegExp('/', 'g'));
    var fileName = splitted[splitted.length - 1];
    var file = fs_1.default.readFileSync(filePath);
    var tags = exifreader_1.default.load(file);
    var dateTime = tags.DateTime;
    // console.log(tags);
    var momentDate;
    if (!!dateTime) {
        momentDate = moment_1.default(dateTime.value[0], datetimeFormats_1.datetimeFormats);
    }
    else {
        momentDate = moment_1.default(fileName, datetimeFormats_1.datetimeFormats);
    }
    return momentDate.format(datetimeFormats_1.outputFormat);
};
