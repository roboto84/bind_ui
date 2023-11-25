import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IStringIndexedObject, SearchBarProps } from '@/views/search/types/searchTypes';
import {
  acceptableCharactersTest,
  stripBeforeLastComma,
} from '@/utils/utils';
import { IoMdClose } from 'react-icons/io';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tWindowStateEnum } from '@/context/types/enums';
import { SearchContext } from '@/context/searchContext';
import { TagWithCount } from '@/dataSource/types/apiTypes';
import {
  ClearSearchButton,
  SearchAutoCompleteContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchWrapper,
} from '../lexicon/styles/searchContainer';

export function SearchBar(props: SearchBarProps) {
  const { searchSystem } = props;
  const wh00tContext = useWh00tWebsocket().state;
  const searchContext = useContext(SearchContext).state;
  const searchInputRef: React.MutableRefObject<any> = useRef();
  const [hasSearchTerm, setHasSearchTerm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showAutoCompleteOptions, setShowAutoCompleteOptions] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [listValues, setListValues] = useState([]);
  const itemRefs: React.MutableRefObject<IStringIndexedObject> = useRef({});

  useEffect(() => {
    if (itemRefs.current[`${activeItemIndex}`]) {
      itemRefs.current[`${activeItemIndex}`].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeItemIndex]);

  useEffect(() => {
    if (inputValue !== '') {
      const MAX_OPTIONS: number = 50;
      const filteredOptions: TagWithCount[] = searchContext.tags.filter((item) => item.tag.includes(
        stripBeforeLastComma(inputValue),
      )).slice(0, MAX_OPTIONS);

      if (filteredOptions.length > 0) {
        setListValues(filteredOptions);
        setShowAutoCompleteOptions(true);
      } else {
        setShowAutoCompleteOptions(false);
      }
    } else {
      setShowAutoCompleteOptions(false);
      setHasSearchTerm(false);
    }
  }, [inputValue]);

  const addToInput = (capturedTag: string) => {
    if (capturedTag !== '') {
      setListValues([]);
      setActiveItemIndex(0);
      setInputValue('');
      searchInputRef.current.value = capturedTag;
    }
  };

  const sendSearchWord = () => searchSystem.onSendSearch(searchInputRef.current.value);
  const updateSearchWord = () => {
    if (searchSystem.onSearchKeyUp) {
      searchSystem.onSearchKeyUp(searchInputRef.current.value);
    }
  };

  const onInputKeydown: KeyboardEventHandler = (e) => {
    const specialKeys: string[] = ['ArrowUp', 'ArrowDown', 'Enter', 'Escape'];
    setHasSearchTerm(Boolean(searchInputRef.current.value));

    if (specialKeys.includes(e.key)) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveItemIndex((prevIndex) => Math.min(prevIndex + 1, listValues.length - 1));
      } else if (e.key === 'Enter') {
        if (showAutoCompleteOptions) {
          e.preventDefault();
          setShowAutoCompleteOptions(false);
          addToInput(listValues[activeItemIndex].tag);
        } else {
          sendSearchWord();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowAutoCompleteOptions(false);
        setInputValue('');
        setListValues([]);
        setActiveItemIndex(0);
      }
    } else if (acceptableCharactersTest(e.key)) {
      updateSearchWord();
    }
  };

  const onInputChange: ChangeEventHandler = () => {
    setInputValue(searchInputRef.current.value);
  };

  const clearSearch = () => {
    searchInputRef.current.value = '';
    searchSystem.onSearchKeyUp(searchInputRef.current.value);
    setHasSearchTerm(false);
    updateSearchWord();
    searchInputRef.current.focus();
  };

  const addToInputOnclick = (index: number) => {
    addToInput(listValues[index].tag);
    searchInputRef.current.focus();
  };

  const addToListItemRefs = (index: number, e: HTMLLIElement) => {
    itemRefs.current[`${index}`] = e;
  };

  const handleBlur = () => {
    setShowAutoCompleteOptions(false);
  };

  const autoCompleteOptionList: JSX.Element[] = listValues.map(
    (item: TagWithCount, index: number) => (
      <li
        key={item.tag}
        ref={(e: HTMLLIElement) => (addToListItemRefs(index, e))}
        onMouseEnter={() => setActiveItemIndex(index)}
        onMouseDown={() => addToInputOnclick(index)}
        className={index === activeItemIndex ? 'active' : ''}
      >
        <span className="left">{item.tag}</span>
        <span className="right">{item.count}</span>
      </li>
    ),
  );

  return (
    <SearchWrapper onBlur={handleBlur}>
      <SearchContainer>
        <SearchInput
          title="Search Term Input"
          type="text"
          placeholder="Search Term"
          ref={searchInputRef}
          onKeyDown={onInputKeydown}
          onChange={onInputChange}
          autoFocus
          hasSearchTerm={hasSearchTerm}
          rightSideWindowOpen={wh00tContext.wh00tWindowState === Wh00tWindowStateEnum.MAX}
        />
        <ClearSearchButton hasSearchTerm={hasSearchTerm} onClick={clearSearch}>
          <IoMdClose />
        </ClearSearchButton>
        <SearchButton title="Submit Search Term" onClick={sendSearchWord}>
          Search
        </SearchButton>
      </SearchContainer>
      <SearchAutoCompleteContainer show={showAutoCompleteOptions}>
        {autoCompleteOptionList}
      </SearchAutoCompleteContainer>
    </SearchWrapper>
  );
}
