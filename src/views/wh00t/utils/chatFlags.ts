const secretFlag = '/boom';

export function isSecretMessage(messageText: string): boolean {
  return messageText.indexOf(secretFlag) > -1;
}
