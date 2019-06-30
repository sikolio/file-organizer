#!/usr/bin/env node
import { imageClassifier } from '../src/ImageClassifier/imageClassifier';
import { traverse } from '../src/traverse';

console.log(process.argv);

const [nodeExe, filePath, rootFolderPath = './example', copyToFolder = './example2'] = process.argv;

traverse(
  rootFolderPath,
  imageClassifier,
  copyToFolder,
);