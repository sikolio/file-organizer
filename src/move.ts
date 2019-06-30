import fs from 'fs';

const renameFile = (path: fs.PathLike, newPath: fs.PathLike) => {
  return new Promise((res, rej) => {
    fs.rename(path, newPath, (err) =>
      err ? rej(err) : res(true));
  });
};

const copyFile = (path: fs.PathLike, newPath: fs.PathLike, flags: string) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(newPath, {flags});

    readStream.on('error', rej);
    writeStream.on('error', rej);
    writeStream.on('finish', res);
    readStream.pipe(writeStream);
  });
}

const unlinkFile = (path: fs.PathLike) => {
  return new Promise((res, rej) => {
    fs.unlink(path, (err) =>
      err ? rej(err) : res(true));
  });
}

export const moveFile = (path: fs.PathLike, newPath: fs.PathLike, flags: string = 'w') => {
  return renameFile(path, newPath)
    .catch((e) => {
      if (e.code !== 'EXDEV') {
        throw new e();
      } else {
        return copyFile(path, newPath, flags)
          .then(() => unlinkFile(path));
      }
    });
};
