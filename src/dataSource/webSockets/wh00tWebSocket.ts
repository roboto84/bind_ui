import { LocalStorageEnum, Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';
import { WSS_BASE_URL } from '@/dataSource/urls';
import { randomIntFromInterval } from '@/utils/utils';
import { getSimpleDateTime } from '@/utils/formatting';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Wh00tContextActionType, Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { isSecretMessage } from '@/views/wh00t/utils/chatFlags';

export class Wh00tWebSocket {
  clientId: string;

  wh00tWS: WebSocket = null;

  wh00tDispatch: (action: Wh00tContextActionType) => void = null;

  wh00tIsConnected: boolean = false;

  connectionAttemptCount: number = 0;

  constructor() {
    this.clientId = Wh00tWebSocket.generateRandomClientId();
  }

  static generateRandomClientId(): string {
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
    return clientIdPrefix[
      randomIntFromInterval(0, clientIdPrefix.length - 1)
    ] + randomIntFromInterval(1, 99);
  }

  setDispatch(dispatch: (action: Wh00tContextActionType) => void): void {
    this.wh00tDispatch = dispatch;
  }

  handleMessage(messageSource: Wh00tMessageTypeEnum, wh00tMessage: Wh00tMessagePackage): void {
    const newMessage: Wh00tContextActionType = {
      source: messageSource,
      actionType: Wh00tActionsEnum.NEW_MESSAGE,
      value: wh00tMessage,
    };
    this.wh00tDispatch(newMessage);
    if (isSecretMessage(wh00tMessage.message)) {
      this.clearSecretMessage(wh00tMessage);
    }
  }

  static isMessageTooLarge(username: string, message: string): boolean {
    const heuristicNormalizationFactor: number = 1.19;
    const messageContainerSize: number = 110;
    const usernameByteSize: number = (new TextEncoder().encode(username)).length;
    const messageByteSize: number = (new TextEncoder().encode(message)).length;
    const fullMessageSize: number = (messageByteSize + usernameByteSize + messageContainerSize)
      * heuristicNormalizationFactor;
    return fullMessageSize > 8192;
  }

  sendMessage(message: string): void {
    if (Wh00tWebSocket.isMessageTooLarge(this.clientId, message)) {
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getSimpleDateTime(),
          message: 'Sorry, that message is too long',
        },
      );
    } else if (message !== '') {
      this.wh00tWS.send(message);
    }
  }

  clearSecretMessage(message: Wh00tMessagePackage): void {
    setTimeout(() => {
      this.wh00tDispatch({
        source: Wh00tMessageTypeEnum.LOCAL,
        actionType: Wh00tActionsEnum.SECRET_MESSAGE,
        value: message,
      });
    }, 60000);
  }

  reattemptWh00tSocketConnection(): void {
    setTimeout(() => {
      this.connectWebSocket();
    }, 5000);
  }

  connectWebSocket(clientId?: string): void {
    this.wh00tDispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      actionType: Wh00tActionsEnum.CLEAR_MESSAGES,
    });
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
          message: `You are connected as ${this.clientId}`,
        },
      );
    };

    this.wh00tWS.onerror = (): void => {
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

    this.wh00tWS.onmessage = (event): void => {
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

  disconnectWebSocket(): void {
    if (this.wh00tWS !== null) {
      this.wh00tWS.close();
      this.wh00tDispatch({
        source: Wh00tMessageTypeEnum.LOCAL,
        actionType: Wh00tActionsEnum.DISCONNECT,
      });
      this.wh00tWS = null;
      this.wh00tIsConnected = false;
      this.connectionAttemptCount = 0;
      setLocalStorage(LocalStorageEnum.STAY_CONNECTED, 'false');
      Wh00tWebSocket.generateRandomClientId();
    }
  }
}
