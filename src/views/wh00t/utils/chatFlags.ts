const secretMessageFlag = '/secret';

export function isSecretMessage(messageText: string): boolean {
  return messageText.indexOf(secretMessageFlag) > -1;
}
