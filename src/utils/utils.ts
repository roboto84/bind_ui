import { v4 as uuidv4 } from 'uuid';

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomUuid(): string {
  return uuidv4();
}

export function timeFormatMorph(timeStamp: string):string {
  let timeMorph: string = timeStamp.substring(0, timeStamp.lastIndexOf('-'))
  if (timeMorph.indexOf('.') > 0) {
    timeMorph = timeMorph.substring(0, timeMorph.lastIndexOf('.'));
  }
  return timeMorph;
}
