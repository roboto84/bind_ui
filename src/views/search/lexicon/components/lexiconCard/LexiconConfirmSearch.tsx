import { Button } from '@/components/Nav/Button';
import React from 'react';
import { LexiconConfirmSearchProps } from '@/views/search/lexicon/types/lexiconTypes';
import { LexiconConfirmSearchContainer } from '@/views/search/lexicon/styles/lexiconCardStyles';

export function LexiconConfirmSearch(props: LexiconConfirmSearchProps) {
  const { shouldSearch } = props;
  const setShouldSearch = () => {
    shouldSearch(true);
  };
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
