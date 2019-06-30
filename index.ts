import { imageClassifier } from './src/ImageClassifier/imageClassifier';
import { traverse } from './src/traverse';

traverse(
  './example',
  imageClassifier,
  'D:/filemovertest',
);