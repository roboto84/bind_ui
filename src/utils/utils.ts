import { v4 as uuidv4 } from 'uuid';

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomUuid(): string {
  return uuidv4();
}
