import faviconDefault from '@/assets/favicon/favicon-16x16.png';
import faviconNotify from '@/assets/favicon/favicon-16x16-notify.png';

export class AppNotification {
  titleBeforeNotification: string;

  titleNotificationInterval: NodeJS.Timeout;

  notificationIsActive: boolean = false;

  favicon: HTMLLinkElement;

  constructor() {
    this.titleBeforeNotification = document.title;
    this.getFavicon();
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
      if (this.notificationIsActive) {
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
    if (!this.notificationIsActive) {
      this.favicon.setAttribute('href', faviconNotify);
      this.titleBeforeNotification = document.title;
      this.notificationIsActive = true;
      this.notificationTimer();
    }
  }

  stopDocumentTitleNotification(): void {
    setTimeout(() => {
      this.favicon.setAttribute('href', faviconDefault);
      this.notificationIsActive = false;
    }, 750);
  }
}
