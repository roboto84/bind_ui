import { useQuery } from 'react-query';
import { getData, getLexiconWordSearch } from '@/dataSource/restApis/robotoRestApi';

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await getData(queryKey[0]);
  return data;
};

export const reactQueryConfig = {
  defaultOptions: {
    queries: { queryFn: defaultQueryFn },
  },
};

const getSearchWord = async (word: string) => {
  const { data } = await getLexiconWordSearch(word);
  return data;
};

export const useLexiconWordSearch = (word: string) => (
  useQuery(['lexiconWordSearch', word], () => getSearchWord(word))
);
