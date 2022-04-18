import { AirStandardTimeView } from '@/views/air/types/airTypes';

export const padTime = (timeValue: number): string => String(timeValue).padStart(2, '0');

export const removeSpaces = (value:string): string => value.replace(/ /g, '');

export const getStandardTime = (date: Date): AirStandardTimeView => ({
  date: `${padTime(date.getMonth() + 1)}/${padTime(date.getDate())}`,
  hour: `${padTime(date.getHours())}:${padTime(date.getMinutes())}`,
  seconds: padTime(date.getSeconds()),
});

export function dayOfWeekAbbreviation(timeStamp: string): string {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return weekday[new Date(timeStamp).getDay()];
}

export function simpleDateTimeFormat(timestamp?: string): string {
  const dateTime: Date = timestamp ? new Date(timestamp) : new Date();
  return getStandardTime(dateTime).date;
}

export function getSimpleDateTime(timestamp?: string): string {
  const dateTime: Date = timestamp ? new Date(timestamp) : new Date();
  const dateTimeParts: AirStandardTimeView = getStandardTime(dateTime);
  return `${dateTimeParts.date} ${dateTimeParts.hour}`;
}
