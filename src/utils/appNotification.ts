import faviconDefault from '@/assets/favicon/favicon-16x16.png';
import faviconNotify from '@/assets/favicon/favicon-16x16-notify.png';
import notificationSound from '@/assets/sound/messageAlert.mp3';

import { Wh00tActionsEnum } from '@/context/types/enums';

export class AppNotification {
  titleBeforeNotification: string;

  titleNotificationInterval: NodeJS.Timeout;

  appNotificationDispatch: Function = null;

  externalNotificationIsActive: boolean = false;

  favicon: HTMLLinkElement;

  notificationAlertSound: HTMLAudioElement = new Audio(notificationSound);

  constructor() {
    this.titleBeforeNotification = document.title;
    this.getFavicon();
  }

  playNotificationSound() {
    this.notificationAlertSound.play().then();
  }

  setDispatch(dispatch: Function) {
    this.appNotificationDispatch = dispatch;
  }

  getFavicon() {
    const nodeList: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName('link');
    for (let i = 0; i < nodeList.length; i += 1) {
      if (nodeList[i].getAttribute('rel') === 'icon') {
        this.favicon = nodeList[i];
      }
    }
  }

  setTitleCache(title: string): void {
    this.titleBeforeNotification = title;
  }

  notificationTimer() {
    const newMessageText: string = 'New Wh00t';
    setTimeout(() => {
      if (this.externalNotificationIsActive) {
        this.notificationTimer();
        if (document.title === newMessageText) {
          document.title = this.titleBeforeNotification;
        } else {
          document.title = newMessageText;
        }
      } else {
        document.title = this.titleBeforeNotification;
      }
    }, 800);
  }

  startDocumentTitleNotification(): void {
    if (!this.externalNotificationIsActive) {
      this.favicon.setAttribute('href', faviconNotify);
      this.titleBeforeNotification = document.title;
      this.externalNotificationIsActive = true;
      this.appNotificationDispatch({ type: Wh00tActionsEnum.INTERNAL_ALERT_ON });
      this.notificationTimer();
    }
  }

  stopDocumentTitleNotification(): void {
    setTimeout(() => {
      this.favicon.setAttribute('href', faviconDefault);
      this.externalNotificationIsActive = false;
    }, 750);
  }
}
