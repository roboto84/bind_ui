import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useContext, useState } from 'react';
import {
  ArcResultProps,
  ArcResultDisplay,
  ArcResultEditingPackage,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultView } from '@/views/search/arcadia/components/ArcResult/components/ArcResultView';
import { ArcResultDelete } from '@/views/search/arcadia/components/ArcResult/components/ArcResultDelete/ArcResultDelete';
import { ArcResultEdit } from '@/views/search/arcadia/components/ArcResult/components/ArcResultEdit/ArcResultEdit';
import { useClickOutside } from '@/hooks/useClickOutside';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import { QueryClient, useQueryClient } from 'react-query';
import { ArcadiaTagsWithCounts } from '@/dataSource/types/apiTypes';
import camelcaseKeys from 'camelcase-keys';
import { SearchActionsEnum } from '@/context/types/enums';
import { SearchContext } from '@/context/searchContext';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage, navigate } = props;
  const { state, dispatch } = useContext(SearchContext);
  const [display, setDisplay] = useState<string>(ArcResultDisplay.VIEW);
  const [editMessage, setEditMessage] = useState<string>('');
  const queryClient: QueryClient = useQueryClient();
  let body: JSX.Element;

  const { ref: editRef } = useClickOutside(() => {
    setEditMessage('');
  });

  const invalidateArcQueries = () => {
    queryClient.invalidateQueries(arcadiaApiEndpoints.summary);
    queryClient.invalidateQueries('arcadiaWordSearch');
    queryClient.invalidateQueries(arcadiaApiEndpoints.tagsWithCounts).then(() => {
      const arcadiaSubjectsWithCountsData: ArcadiaTagsWithCounts = queryClient.getQueryData(
        arcadiaApiEndpoints.tagsWithCounts,
      );

      const camelCasedData: ArcadiaTagsWithCounts = camelcaseKeys<ArcadiaTagsWithCounts>(
        arcadiaSubjectsWithCountsData,
        { deep: true },
      );

      if (state.tags.length !== camelCasedData.numberOfSubjects) {
        dispatch({ type: SearchActionsEnum.LOAD_TAGS, value: camelCasedData.subjectsCounts });
      }
    });
  };

  const { ref: deleteRef } = useClickOutside(() => {
    invalidateArcQueries();
    setDisplay(ArcResultDisplay.VIEW);
  });

  const updateResultOnEdit = (editingPackage: ArcResultEditingPackage):void => {
    invalidateArcQueries();
    setEditMessage(editingPackage.editingMessage);
    setDisplay(ArcResultDisplay.VIEW);
  };

  if ('id' in arcResultPackage) {
    if (display === ArcResultDisplay.VIEW) {
      body = (
        <ArcResultView
          _ref={editRef}
          arcResultPackage={arcResultPackage}
          onDelete={setDisplay}
          onEdit={setDisplay}
          navigate={navigate}
          displayMessage={editMessage}
        />
      );
    } else if (display === ArcResultDisplay.DELETE) {
      body = (
        <ArcResultDelete
          _ref={deleteRef}
          itemKey={arcResultPackage.data}
          onReset={setDisplay}
        />
      );
    } else if (display === ArcResultDisplay.EDIT) {
      body = (
        <ArcResultEdit
          itemKey={arcResultPackage.data}
          image={arcResultPackage.image}
          tags={arcResultPackage.tags.join(',')}
          title={arcResultPackage.title}
          description={arcResultPackage.description}
          onReset={setDisplay}
          onEditConfirmed={updateResultOnEdit}
        />
      );
    }
  } else {
    body = <span>Entry not available</span>;
  }

  return (
    <ArcResultContainer>
      {body}
    </ArcResultContainer>
  );
}
