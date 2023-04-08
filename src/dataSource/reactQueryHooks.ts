import { useQuery, UseQueryResult } from 'react-query';
import {
  getData,
  getLexiconWordSearch,
  getArcadiaWordSearch, deleteArcadiaRecord, editArcadiaRecord, addArcadiaRecord,
} from '@/dataSource/restApis/robotoRestApi';
import { QueryHookError } from '@/dataSource/types/hookTypes';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import {
  ArcAddItemResults,
  ArcDeleteItemResults,
  ArcEditItemResults,
  ArcEditPackage,
  ArcSearchResults,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcAddPackage } from '@/views/search/types/searchTypes';

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await getData(queryKey[0]);
  return data;
};

export const reactQueryConfig = {
  defaultOptions: {
    queries: { queryFn: defaultQueryFn },
  },
};

const getLexiconSearch = async (word: string): Promise<any> => {
  const { data } = await getLexiconWordSearch(word);
  return data;
};

export const useLexiconWordSearch = (word: string): UseQueryResult<
  WordDefinition, QueryHookError> => (
  useQuery(['lexiconWordSearch', word], () => getLexiconSearch(word))
);

const getArcadiaSearch = async (word: string): Promise<any> => {
  const { data } = await getArcadiaWordSearch(word);
  return data;
};

const deleteArcadiaItem = async (dataKey: string): Promise<any> => {
  const { data } = await deleteArcadiaRecord(dataKey);
  return data;
};

const editArcadiaItem = async (itemEditPackage: ArcEditPackage): Promise<any> => {
  const { data } = await editArcadiaRecord(itemEditPackage);
  return data;
};

const addArcadiaItem = async (itemAddPackage: ArcAddPackage): Promise<any> => {
  const { data } = await addArcadiaRecord(itemAddPackage);
  return data;
};

export const useArcadiaWordSearch = (word: string): UseQueryResult<
  ArcSearchResults, QueryHookError> => (
  useQuery(['arcadiaWordSearch', word], () => getArcadiaSearch(word))
);

export const useArcadiaDeleteItem = (dataKey: string): UseQueryResult<
  ArcDeleteItemResults, QueryHookError> => (
  useQuery(['arcadiaDeleteItem', dataKey], () => deleteArcadiaItem(dataKey))
);

export const useArcadiaEditItem = (itemEditPackage: ArcEditPackage): UseQueryResult<
  ArcEditItemResults, QueryHookError> => (
  useQuery(['arcadiaEditItem', itemEditPackage.data], () => editArcadiaItem(itemEditPackage))
);

export const useArcadiaAddItem = (itemAddPackage: ArcAddPackage): UseQueryResult<
  ArcAddItemResults, QueryHookError> => (
  useQuery(['arcadiaAddItem', itemAddPackage.data], () => addArcadiaItem(itemAddPackage))
);
