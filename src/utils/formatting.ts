import { StandardTime } from '@/views/air/types/airTypes';

export const padTime = (timeValue: number): string => String(timeValue).padStart(2, '0');

export const removeSpaces = (value:string): string => value.replace(/ /g, '');

export const getStandardTimeObject = (date: Date): StandardTime => ({
  year: `${date.getFullYear()}`,
  month: `${date.getMonth() + 1}`,
  date: `${padTime(date.getDate())}`,
  hour: `${padTime(date.getHours())}`,
  minute: `${padTime(date.getMinutes())}`,
  seconds: padTime(date.getSeconds()),
  timezone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
});

export function dayOfWeekAbbreviation(timeStamp: string): string {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return weekday[new Date(timeStamp).getDay()];
}

export function simpleMonthDateFormat(timestamp?: string): string {
  const dateTime: Date = timestamp ? new Date(timestamp) : new Date();
  return `${getStandardTimeObject(dateTime).month}/${getStandardTimeObject(dateTime).date}`;
}

export function getLocalStandardDateObject(timestamp?: string): StandardTime {
  const dateTime: Date = timestamp ? new Date(timestamp) : new Date();
  return getStandardTimeObject(dateTime);
}

export function getD3StandardDateTime(timestamp: string): string {
  const dateTime: StandardTime = getLocalStandardDateObject(timestamp);
  return `${dateTime.year}-${dateTime.month}-${dateTime.date}T${dateTime.hour}:${dateTime.minute}:${dateTime.seconds}`;
}

export function getLocalStandardDateTime(includeSeconds?: boolean, timestamp?: string): string {
  const dateTime: StandardTime = getLocalStandardDateObject(timestamp);
  return `${dateTime.month}/${dateTime.date} ${dateTime.hour}:${dateTime.minute}${includeSeconds ? `:${dateTime.seconds}` : ''}`;
}

export function camelCaseToSpaced(camelCasedText: string): string {
  return camelCasedText.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

export function capitalizedFirst(text: string): string {
  return text.charAt(0).toUpperCase().concat(text.slice(1));
}

export function twoDecimalPlaces(number: number): number {
  return +number.toFixed(2);
}
