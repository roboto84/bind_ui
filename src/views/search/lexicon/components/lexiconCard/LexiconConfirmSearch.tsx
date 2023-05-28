import { Button } from '@/components/Nav/Button';
import React from 'react';
import {
  LexiconConfirmSearchProps,
  WordDefinition,
} from '@/views/search/lexicon/types/lexiconTypes';
import { LexiconConfirmSearchContainer } from '@/views/search/lexicon/styles/lexiconCardStyles';
import { useLexiconWordSearch } from '@/dataSource/reactQueryHooks';
import { LexiconSearchType } from '@/dataSource/types/apiTypes';
import Loader from '@/components/Misc/Loader';
import { Size } from '@/types';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import {
  LexiconSearchDefinition,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';

export function LexiconConfirmSearch(props: LexiconConfirmSearchProps) {
  const { searchTerm, shouldSearch } = props;
  const setShouldSearch = () => {
    shouldSearch(true);
  };
  const {
    data, error, isLoading, isError,
  } = useLexiconWordSearch(searchTerm, LexiconSearchType.CACHE);

  if (isLoading) {
    return (<Loader size={Size.small} />);
  }
  if (isError) {
    const errorMessage: string = error
      ? error.message
      : 'Sorry about that, an error has occurred getting the data.';
    return (
      <ErrorViewDefault title="Data Issue" size={Size.small} errorMessage={errorMessage} />
    );
  }

  const wordSearchResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    data,
    { deep: true },
  );

  if (wordSearchResponse.definitionIsAcceptable) {
    return (<LexiconSearchDefinition size={Size.small} wordDefinition={wordSearchResponse} />);
  }

  return (
    <LexiconConfirmSearchContainer>
      <p>
        Would you like a dictionary definition for that search ?
      </p>
      <Button
        fontSize="14px"
        padding="8px"
        margin="0 0 15px 0"
        width="74px"
        borderRadius="5px"
        onClick={() => setShouldSearch()}
        title="Update"
      >
        Yes
      </Button>
    </LexiconConfirmSearchContainer>
  );
}
