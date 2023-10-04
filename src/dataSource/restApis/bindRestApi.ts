import axios, { AxiosPromise } from 'axios';
import {
  AirEndpointsType,
  ArcadiaEndpointsType,
  DebugEndpointsType,
  LexiconEndpointsType,
  LexiconSearchType,
} from '@/dataSource/types/apiTypes';
import { FULL_API_URL } from '@/dataSource/urls';
import { ArcEditPackage } from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcAddPackage } from '@/views/search/types/searchTypes';

const numOfDays: number = 14;
const weatherHistoryTimeInterval: number = 24 * numOfDays;

export const airApiEndpoints: AirEndpointsType = {
  weather: '/air/weather',
  weatherReport: '/air/weather/report',
  weatherHistory: `/air/weather/history/?record_count=${weatherHistoryTimeInterval}`,
};

export const lexiconApiEndpoints: LexiconEndpointsType = {
  summary: '/lexicon/summary',
  wordOfDay: '/lexicon/word_of_day',
  latestWords: '/lexicon/words/30',
  globalWordSearch: '/lexicon/global_word_search/',
  cachedWordSearch: '/lexicon/cached_word_search/',
};

export const arcadiaApiEndpoints: ArcadiaEndpointsType = {
  summary: '/arcadia/summary',
  randomTags: '/arcadia/random_subjects',
  tagsIndex: '/arcadia/subjects_index',
  tags: '/arcadia/subjects',
  wordSearch: '/arcadia/word_search/',
  removeItem: '/arcadia/remove/',
  editItem: '/arcadia/update/',
  addItem: '/arcadia/create/',
};

export const debugApiEndpoints: DebugEndpointsType = {
  wh00tMessages: '/',
};

export async function getData(path: string): Promise<AxiosPromise> {
  return axios.get(FULL_API_URL.concat(`${path}`));
}

export async function getLexiconWordSearch(word: string, searchType: LexiconSearchType) {
  if (searchType === LexiconSearchType.CACHE) {
    return axios.get(FULL_API_URL.concat(`${lexiconApiEndpoints.cachedWordSearch}${word}`));
  }
  return axios.get(FULL_API_URL.concat(`${lexiconApiEndpoints.globalWordSearch}${word}`));
}

export async function getArcadiaWordSearch(word: string) {
  return axios.get(FULL_API_URL.concat(
    `${arcadiaApiEndpoints.wordSearch}?term=${encodeURIComponent(word)}`,
  ));
}

export async function deleteArcadiaRecord(dataKey: string) {
  return axios.delete(FULL_API_URL.concat(
    `${arcadiaApiEndpoints.removeItem}?data_key=${encodeURIComponent(dataKey)}`,
  ));
}

export async function editArcadiaRecord(itemEditPackage: ArcEditPackage) {
  return axios.put(
    FULL_API_URL.concat(`${arcadiaApiEndpoints.editItem}`),
    {
      data_key: itemEditPackage.data,
      new_data_key: itemEditPackage.dataUpdate,
      title: itemEditPackage.title,
      tags: itemEditPackage.tags,
      description: itemEditPackage.description,
      image_location: itemEditPackage.image,
    },
  );
}

export async function addArcadiaRecord(itemAddPackage: ArcAddPackage) {
  return axios.post(
    FULL_API_URL.concat(`${arcadiaApiEndpoints.addItem}`),
    {
      data_key: itemAddPackage.data,
      tags: itemAddPackage.tags,
    },
  );
}
