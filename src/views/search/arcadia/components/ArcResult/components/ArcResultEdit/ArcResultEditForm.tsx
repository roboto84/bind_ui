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
import React, { useRef, useEffect } from 'react';
import { FocusableButton } from '@/components/Nav/Button';

export function ArcResultEditForm(props: ArcResultEditViewProps) {
  const { itemKey, tags, title, description, image, onReset, onEdit } = props;
  const imageInputRef: React.MutableRefObject<any> = useRef();
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();
  const titleInputRef: React.MutableRefObject<any> = useRef();
  const descriptionInputRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

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

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    editItem();
  };

  return (
    <ArcEditFormContainer onSubmit={handleSubmit}>
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
        <FocusableButton
          type="button"
          fontSize="14px"
          padding="5px 15px"
          margin="10px"
          borderRadius="5px"
          onClick={resetEditView}
          title="Cancel"
        >
          Cancel
        </FocusableButton>
        <FocusableButton
          type="submit"
          fontSize="14px"
          padding="5px 15px"
          margin="10px"
          borderRadius="5px"
          title="Update"
        >
          Update
        </FocusableButton>
      </ArcEditButtonsContainer>
    </ArcEditFormContainer>
  );
}
