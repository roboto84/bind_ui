import { useQuery, UseQueryResult } from 'react-query';
import { getData, getLexiconWordSearch } from '@/dataSource/restApis/robotoRestApi';
import { QueryHookError } from '@/dataSource/types/hookTypes';
import { WordDefinition } from '@/views/lexicon/types/lexiconTypes';

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await getData(queryKey[0]);
  return data;
};

export const reactQueryConfig = {
  defaultOptions: {
    queries: { queryFn: defaultQueryFn },
  },
};

const getSearchWord = async (word: string): Promise<any> => {
  const { data } = await getLexiconWordSearch(word);
  return data;
};

export const useLexiconWordSearch = (word: string): UseQueryResult<
  WordDefinition, QueryHookError> => (
  useQuery(['lexiconWordSearch', word], () => getSearchWord(word))
);
