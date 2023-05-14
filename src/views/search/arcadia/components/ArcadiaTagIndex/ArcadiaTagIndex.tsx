import { ArcadiaTagIndexProps } from '@/views/search/arcadia/types/arcadiaTypes';
import React from 'react';
import { Size } from '@/types';
import {
  TagIndexDefault,
} from '@/views/search/arcadia/components/ArcadiaTagIndex/components/TagIndexDefault';

export function ArcadiaTagIndex(props: ArcadiaTagIndexProps) {
  const { size, arcadiaTags, onTagClick } = props;
  const arcadiaTagsArrayRepresentation: [string, string[]][] = Object.entries(arcadiaTags);
  switch (size) {
    case Size.small:
    case Size.medium:
    case Size.large:
    default:
      return (
        <TagIndexDefault
          arcadiaTags={arcadiaTagsArrayRepresentation}
          onTagClick={onTagClick}
        />
      );
  }
}
