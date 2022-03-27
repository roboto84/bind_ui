import { BASE_UI_URL } from '@/dataSource/urls';

const globalUrlRegex = /((http|ftp|https):\/\/)?([\w_-]+(?:\.[\w_-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/ig;
const singleUrlRegex = /((http|ftp|https):\/\/)?([\w_-]+(?:\.[\w_-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/i;

export function linkify(message: string): string {
  if (!message) return '';
  return message.replace(globalUrlRegex, (url) => {
    let hyperlink = url;
    if (!hyperlink.match('^https?://')) {
      hyperlink = `https://${hyperlink}`;
    }
    return `<a href="${hyperlink}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

export function isHyperlinkLink(text: string) {
  return singleUrlRegex.test(text);
}

export function isImageLink(text: string) {
  return isHyperlinkLink(text) && (text.endsWith('.png') || text.endsWith('.jpg')
    || text.endsWith('.jpeg') || text.endsWith('.webp') || text.endsWith('.gif')
    || text.endsWith('.gifv'));
}

export function openPopup() {
  const params: string = 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=575,height=475';
  window.open(`${BASE_UI_URL}/wh00t/`, 'test', params);
  window.open(`${BASE_UI_URL}/`, '_self');
}

const tokenTransforms: { [key: string]: Function } = {
  '`': (text: string): string => (`<code>${text}</code>`),
  '*': (text: string): string => (`<span class="bold">${text}</span>`),
  _: (text: string): string => (`<span class="italic">${text}</span>`),
  '```': (text: string): string => (`<div class="codeBlock">${text}</div>`),
};

export function noneTokenTextTransform(text: string): string {
  return linkify(text);
}

export function textTransform(text: string): string {
  const transformTokens = Object.keys(tokenTransforms);
  const transformedTextArr: string[] = [];
  let noneTokenText: string = '<span>';
  let currentToken: string = null;
  let currentIndex: number = -1;

  for (let i = 0; i < text.length; i += 1) {
    const singleCharToken: string = text.charAt(i);
    const triCharToken:string = i < (text.length - 2)
      ? ''.concat(text[i], text[i + 1], text[i + 2])
      : '';

    if (currentToken !== null) {
      let textSubstring: string;
      if (currentToken === singleCharToken || currentToken === triCharToken) {
        if (currentToken === triCharToken) {
          textSubstring = text.substring(currentIndex + 1, i);
          i += 2;
        } else if (currentToken === singleCharToken) {
          textSubstring = text.substring(currentIndex + 1, i);
        }
        transformedTextArr.push(tokenTransforms[currentToken](textSubstring));
        currentToken = null;
        currentIndex = -1;
      }
    } else if (transformTokens.indexOf(singleCharToken) > -1
      || transformTokens.indexOf(triCharToken) > -1) {
      transformedTextArr.push(`${noneTokenTextTransform(noneTokenText)}</span>`);
      noneTokenText = '<span>';

      if (transformTokens.indexOf(triCharToken) > -1) {
        currentToken = triCharToken;
        i += 2;
        currentIndex = i;
      } else if (transformTokens.indexOf(singleCharToken) > -1) {
        currentToken = singleCharToken;
        currentIndex = i;
      }
    } else if (i === (text.length - 1)) {
      transformedTextArr.push(`${noneTokenTextTransform(noneTokenText.concat(text.charAt(i)))}</span>`);
    } else {
      noneTokenText = noneTokenText.concat(text.charAt(i));
    }
  }
  return transformedTextArr.join('');
}
