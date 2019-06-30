"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageClassifier_1 = require("./src/ImageClassifier/imageClassifier");
var traverse_1 = require("./src/traverse");
traverse_1.traverse('./example', imageClassifier_1.imageClassifier, 'D:/filemovertest');
