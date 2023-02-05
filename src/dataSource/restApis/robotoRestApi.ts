import axios, { AxiosPromise } from 'axios';
import {
  AirEndpointsType,
  LexiconEndpointsType,
  DebugEndpointsType,
  ArcadiaEndpointsType,
} from '@/dataSource/types/apiTypes';
import { FULL_API_URL } from '@/dataSource/urls';

const numOfDays: number = 14;
const weatherHistoryTimeInterval: number = 24 * numOfDays;

export const airApiEndpoints: AirEndpointsType = {
  weather: '/air/weather',
  weatherReport: '/air/weather/report',
  weatherHistory: `/air/weather/history/?record_count=${weatherHistoryTimeInterval}`,
};

export const lexiconApiEndpoints: LexiconEndpointsType = {
  wordOfDay: '/lexicon/word_of_day',
  latestWords: '/lexicon/words/30',
  wordSearch: '/lexicon/word_search/',
};

export const arcadiaApiEndpoints: ArcadiaEndpointsType = {
  tags: '/arcadia/subjects',
  wordSearch: '/arcadia/word_search/',
};

export const debugApiEndpoints: DebugEndpointsType = {
  wh00tMessages: '/',
};

export async function getData(path: string): Promise<AxiosPromise> {
  return axios.get(FULL_API_URL.concat(`${path}`));
}

export async function getLexiconWordSearch(word: string) {
  return axios.get(FULL_API_URL.concat(`${lexiconApiEndpoints.wordSearch}${word}`));
}

export async function getArcadiaWordSearch(word: string) {
  return axios.get(FULL_API_URL.concat(
    `${arcadiaApiEndpoints.wordSearch}?term=${encodeURIComponent(word)}`,
  ));
}
