import fs from 'fs';
import { makeDir } from './makeDir';
import { moveFile } from './move';

export const traverse = (
  currentPath: string,
  // apply: (fileName: string) => void,
  classifier: (filePath: string) => string,
  filesNewRootFolder: string = process.cwd(),
): void => {
  if (!fs.existsSync(`${filesNewRootFolder}`)) {
    fs.mkdirSync(`${filesNewRootFolder}`);
  }
  console.log(`Directory ${currentPath}`);
  const files = fs.readdirSync(currentPath);
  files.forEach(async (fileName: string) => {
    const filePath = `${currentPath}/${fileName}`;
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      console.log(`Checking file: ${filePath}`)
      const newFolderName = classifier(filePath);
      const newFolderPath = `${filesNewRootFolder}/${newFolderName}`;
      makeDir(newFolderPath);
      console.log(`Moving ${filePath} to ${newFolderName}...`);
      await moveFile(filePath, `${newFolderPath}/${fileName}`)
    } else if (stats.isDirectory()) {
      traverse(filePath, classifier, filesNewRootFolder);
    }
  });
};


