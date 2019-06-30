import fs from 'fs';

export const makeDir = (dirPath: string): void => {
  const splitted = dirPath.split(new RegExp('/', 'g'));
  let checkingDir = '';
  splitted.forEach((part) => {
    checkingDir += part + '/';
    if (!fs.existsSync(checkingDir)) {
      console.log(`Folder ${checkingDir} doesn't exists, creating...`);
      fs.mkdirSync(checkingDir);
    }
  });
};
