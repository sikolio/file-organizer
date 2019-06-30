#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageClassifier_1 = require("../src/ImageClassifier/imageClassifier");
var traverse_1 = require("../src/traverse");
console.log(process.argv);
var _a = process.argv, nodeExe = _a[0], filePath = _a[1], _b = _a[2], rootFolderPath = _b === void 0 ? './example' : _b, _c = _a[3], copyToFolder = _c === void 0 ? './example2' : _c;
traverse_1.traverse(rootFolderPath, imageClassifier_1.imageClassifier, copyToFolder);
