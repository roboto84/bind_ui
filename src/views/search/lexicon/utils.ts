const emptyValue: string[] = ['n/a', 'unk'];

export function pronunciationView(oxPronounce: string, merPronounce: string): string {
  const firstPronunciation: string = oxPronounce && emptyValue.indexOf(oxPronounce) === -1
    ? oxPronounce : '';
  const secondPronunciation: string = merPronounce && emptyValue.indexOf(merPronounce) === -1
    ? merPronounce : '';
  const separator: string = firstPronunciation && secondPronunciation ? '|' : '';
  return `${firstPronunciation} ${separator} ${secondPronunciation}`;
}

export function wordExampleView(wordExample: string): string {
  if (emptyValue.indexOf(wordExample) === -1) {
    return `( e.g. ${wordExample} )`;
  }
  return '';
}

export function wordEtymologyView(wordEtymology: string): string {
  if ((typeof wordEtymology === 'object' && wordEtymology && wordEtymology[0] !== 'n/a')
    || (typeof wordEtymology === 'string' && wordEtymology !== "['n/a']")) {
    return `◦ etymology: ${wordEtymology}`;
  }
  return '';
}

export function wordParamBasicView(wordParam: string): string {
  if (emptyValue.indexOf(wordParam) === -1) {
    return wordParam;
  }
  return '';
}

export function isAudioAvailable(src: string): boolean {
  return src && src !== 'n/a' && src !== 'unk';
}
