import { LocalStorageEnum, Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';
import { WSS_BASE_URL } from '@/dataSource/urls';
import { randomIntFromInterval } from '@/utils/utils';
import { getSimpleDateTime } from '@/utils/formatting';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { secretFlag } from '@/views/wh00t/utils/chatFlags';

export class Wh00tWebSocket {
  clientId: string;

  wh00tWS: WebSocket = null;

  wh00tDispatch: Function = null;

  wh00tIsConnected: boolean = false;

  connectionAttemptCount: number = 0;

  constructor() {
    this.generateRandomClientId();
  }

  generateRandomClientId() {
    const clientIdPrefix: string[] = [
      'rabbit',
      'raven',
      'honeyBadger',
      'panda',
      'meerkat',
      'kitty',
      'guineaPig',
      'penguin',
      'racoon',
      'owl',
    ];
    this.clientId = clientIdPrefix[
      randomIntFromInterval(0, clientIdPrefix.length - 1)
    ] + randomIntFromInterval(1, 99);
  }

  setDispatch(dispatch: Function) {
    this.wh00tDispatch = dispatch;
  }

  handleMessage(messageContext: Wh00tMessageTypeEnum, wh00tMessage: Wh00tMessagePackage): void {
    const newMessage = {
      type: messageContext === Wh00tMessageTypeEnum.SOCKET
        ? Wh00tActionsEnum.NEW_MESSAGE : Wh00tActionsEnum.HISTORICAL_MESSAGE,
      value: wh00tMessage,
    };
    this.wh00tDispatch(newMessage);
    if (wh00tMessage.message.indexOf(secretFlag) > -1) {
      this.clearSecretMessage(wh00tMessage);
    }
  }

  sendMessage(message: string) {
    if (message !== '') {
      this.wh00tWS.send(message);
    }
  }

  clearSecretMessage(message: Wh00tMessagePackage) {
    setTimeout(() => {
      this.wh00tDispatch({
        type: Wh00tActionsEnum.SECRET_MESSAGE,
        value: message,
      });
    }, 60000);
  }

  reattemptWh00tSocketConnection() {
    setTimeout(() => {
      this.connectWebSocket();
    }, 5000);
  }

  connectWebSocket(clientId?: string) {
    this.wh00tDispatch({ type: Wh00tActionsEnum.CLEAR_MESSAGES });
    if (clientId && clientId.replace(/\s/g, '') !== '') {
      this.clientId = clientId;
    } else {
      const username: string = getLocalStorage(LocalStorageEnum.USERNAME);
      if (username) {
        this.clientId = username;
      }
    }
    setLocalStorage(LocalStorageEnum.USERNAME, this.clientId);
    setLocalStorage(LocalStorageEnum.STAY_CONNECTED, 'true');

    this.wh00tWS = new WebSocket(
      `${WSS_BASE_URL}:8000/wh00t_chat/${this.clientId}`,
    );

    this.wh00tWS.onopen = () => {
      this.wh00tIsConnected = true;
      this.connectionAttemptCount = 0;
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getSimpleDateTime(),
          message: `connected to wh00t as ${this.clientId}`,
        },
      );
    };

    this.wh00tWS.onerror = () => {
      this.connectionAttemptCount += 1;
      this.reattemptWh00tSocketConnection();
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getSimpleDateTime(),
          message: `An error has occurred connecting to wh00t. An attempt will be made to connect every 10 seconds. This is attempt ${this.connectionAttemptCount}`,
        },
      );
    };

    this.wh00tWS.onmessage = (event) => {
      const parsedMessageData = JSON.parse(event.data);
      if (Array.isArray(parsedMessageData)) {
        parsedMessageData.forEach((messagePackage) => (
          this.handleMessage(Wh00tMessageTypeEnum.HISTORY, messagePackage)
        ));
      } else {
        this.handleMessage(Wh00tMessageTypeEnum.SOCKET, parsedMessageData);
      }
    };
  }

  disconnectWebSocket() {
    if (this.wh00tWS !== null) {
      this.wh00tWS.close();
      this.wh00tDispatch({ type: Wh00tActionsEnum.DISCONNECT });
      this.wh00tWS = null;
      this.wh00tIsConnected = false;
      this.connectionAttemptCount = 0;
      setLocalStorage(LocalStorageEnum.STAY_CONNECTED, 'false');
      this.generateRandomClientId();
    }
  }
}
