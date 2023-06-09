import {
  ArcEditButtonsContainer,
  ArcEditFieldContainer,
  ArcEditFormContainer,
  ArcEditFormInputGroupContainer,
  ArcInput,
  ArcInputTextArea,
  ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  ArcEditPackage,
  ArcResultDisplay,
  ArcResultEditViewProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useRef } from 'react';
import { Button } from '@/components/Nav/Button';

export function ArcResultEditForm(props: ArcResultEditViewProps) {
  const { itemKey, tags, title, description, image, onReset, onEdit } = props;
  const imageInputRef: React.MutableRefObject<any> = useRef();
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();
  const titleInputRef: React.MutableRefObject<any> = useRef();
  const descriptionInputRef: React.MutableRefObject<any> = useRef();

  const editItem = () => {
    const editItemPackage: ArcEditPackage = {
      data: itemKey,
      dataUpdate: urlInputRef.current.value,
      tags: String(tagsInputRef.current.value).replace(/\s+/g, '').split(','),
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      image: imageInputRef.current.value,
    };
    onEdit(editItemPackage);
  };

  const resetEditView = () => {
    onReset(ArcResultDisplay.VIEW);
  };

  return (
    <ArcEditFormContainer>
      <ArcEditFormInputGroupContainer>
        <ArcEditFieldContainer>
          <div>
            <ArcInputTitle>Title</ArcInputTitle>
            <ArcInput
              title="Title Edit"
              type="text"
              defaultValue={title}
              ref={titleInputRef}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <ArcInputTitle>URL</ArcInputTitle>
            <ArcInput
              title="URL Edit"
              type="text"
              defaultValue={itemKey}
              ref={urlInputRef}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <ArcInputTitle>Tags (comma separated)</ArcInputTitle>
            <ArcInput
              title="Tags Edit"
              type="text"
              defaultValue={tags}
              ref={tagsInputRef}
            />
          </div>
        </ArcEditFieldContainer>
        <ArcEditFieldContainer>
          <div>
            <ArcInputTitle>Image</ArcInputTitle>
            <ArcInput
              title="Image Edit"
              type="text"
              min={2}
              max={90}
              defaultValue={image}
              ref={imageInputRef}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <ArcInputTitle>Description</ArcInputTitle>
            <ArcInputTextArea
              title="Description Edit"
              rows={5}
              maxLength={300}
              defaultValue={description}
              ref={descriptionInputRef}
              autoComplete="off"
            />
          </div>
        </ArcEditFieldContainer>
      </ArcEditFormInputGroupContainer>
      <ArcEditButtonsContainer>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            margin="0 0 15px 0"
            width="74px"
            borderRadius="5px"
            onClick={() => editItem()}
            title="Update"
          >
            Update
          </Button>
        </div>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            width="74px"
            borderRadius="5px"
            onClick={() => resetEditView()}
            title="Cancel"
          >
            Cancel
          </Button>
        </div>
      </ArcEditButtonsContainer>
    </ArcEditFormContainer>
  );
}
