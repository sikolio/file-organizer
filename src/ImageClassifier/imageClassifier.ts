import ExifReader from 'exifreader';
import fs from 'fs';
import moment from 'moment';
import { datetimeFormats, outputFormat } from './datetimeFormats';

export const imageClassifier = (filePath: string): string => {
  const splitted = filePath.split(new RegExp('/', 'g'));
  const fileName = splitted[splitted.length - 1];
  const file = fs.readFileSync(filePath);
  const tags = ExifReader.load(file);
  const dateTime = tags.DateTime;
  // console.log(tags);
  let momentDate;
  if (!!dateTime) {
    momentDate = moment(dateTime.value[0], datetimeFormats);
  } else {
    momentDate = moment(fileName, datetimeFormats);
  }

  
  return momentDate.format(outputFormat);
};
