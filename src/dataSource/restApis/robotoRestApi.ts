import axios, { AxiosPromise } from 'axios';
import { AirEndpointsType, LexiconEndpointsType, DebugEndpointsType } from '@/dataSource/types/apiTypes';
import { API_URL } from '@/dataSource/urls';

const numOfDays: number = 14;
const weatherHistoryTimeInterval: number = 24 * numOfDays;

export const airApiEndpoints: AirEndpointsType = {
  weatherReport: '/air/weather_report',
  weatherHistory: `/air/weather_history/?record_count=${weatherHistoryTimeInterval}`,
};

export const lexiconApiEndpoints: LexiconEndpointsType = {
  wordOfDay: '/lexicon/word_of_day',
  latestWords: '/lexicon/words/30',
  wordSearch: '/lexicon/word_search/',
};

export const debugApiEndpoints: DebugEndpointsType = {
  wh00tMessages: '/',
};

export async function getData(path: string): Promise<AxiosPromise> {
  return axios.get(API_URL.concat(`${path}`));
}

export async function getLexiconWordSearch(word: string) {
  return axios.get(API_URL.concat(`${lexiconApiEndpoints.wordSearch}${word}`));
}
