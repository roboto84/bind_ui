export function pronunciationView(oxPronounce: string, merPronounce: string): string {
  const firstPronunciation: string = oxPronounce && oxPronounce !== 'n/a' ? oxPronounce : '';
  const secondPronunciation: string = merPronounce && merPronounce !== 'unk' ? merPronounce : '';
  const separator: string = firstPronunciation && secondPronunciation ? '|' : '';
  return `${firstPronunciation} ${separator} ${secondPronunciation}`;
}

export function wordExampleView(wordExample: string): string {
  if (wordExample !== 'unk' && wordExample !== 'n/a') {
    return `( e.g. ${wordExample} )`;
  }
  return '';
}

export function wordEtymologyView(wordEtymology: string): string {
  if (wordEtymology !== "['n/a']") {
    return `◦ etymology: ${wordEtymology}`;
  }
  return '';
}
