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

export function substringDotted(text: string, subStringLength: number): string {
  return text.length > subStringLength ? text.substring(0, subStringLength).concat('...') : text;
}

export function formatUrl(url: string): string {
  return !url.startsWith('http://') && !url.startsWith('https://') ? `https://${url}` : url;
}

export function getBaseUrl(url: string): string {
  const urlArray = url.split('/');
  const protocol = urlArray[0];
  const host = urlArray[2];
  return `${protocol}//${host}`;
}

export function urlArrowSplit(url: string): string {
  const urlSplit = url.split('/');
  let newUrlView = `${urlSplit[0]}${urlSplit[1]}//`.concat(urlSplit.slice(2).join(' › '));
  newUrlView = newUrlView[newUrlView.length - 2] === '›'
    ? newUrlView.substring(0, newUrlView.length - 3)
    : newUrlView;
  return newUrlView;
}

export function imageUrlCompletion(url: string, imageUrl: string): string {
  if (imageUrl !== 'None') {
    if (imageUrl[0] === '/' && imageUrl[1] !== '/') {
      return getBaseUrl(url).concat(imageUrl);
    }

    if (imageUrl[0] === '.' && imageUrl[1] === '/') {
      return getBaseUrl(url).concat(imageUrl.substring(1));
    }

    if (imageUrl[0] === '/' && imageUrl[1] === '/') {
      return imageUrl;
    }

    if (imageUrl[0] !== 'h') {
      const urlSplit = url.split('/');

      if (urlSplit.length <= 3) {
        return url.concat(`/${imageUrl}`);
      }
      return url.split('/').slice(0, -1).join('/').concat(`/${imageUrl}`);
    }
  }
  return imageUrl;
}
