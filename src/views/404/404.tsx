import React from 'react';
import { ErrorView } from '@/components/Error/ErrorView';

export function Error404() {
  return (
    <ErrorView title="404">
      <div>
        The Page You Requested Does Not Exist
      </div>
    </ErrorView>
  );
}
