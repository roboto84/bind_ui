import { LocalStorageEnum, Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';
import { WSS_BASE_URL } from '@/dataSource/urls';
import { randomIntFromInterval } from '@/utils/utils';
import { getLocalStandardDateTime } from '@/utils/formatting';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Wh00tContextActionType, Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { isSecretMessage } from '@/views/wh00t/utils/chatFlags';
import { helpMenu } from '@/views/wh00t/utils/helpMenu';
import { introductionMessage } from '@/views/wh00t/utils/introductoryMessage';

export class Wh00tWebSocket {
  clientId: string;

  wh00tWS: WebSocket = null;

  wh00tDispatch: (action: Wh00tContextActionType) => void = null;

  wh00tIsConnected: boolean = false;

  connectionAttemptCount: number = 0;

  wh00tSpeechSynthesisUtterance: SpeechSynthesisUtterance = null;

  constructor() {
    this.clientId = Wh00tWebSocket.generateRandomClientId();
    this.setupSpeechSynthesis();
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

  setupSpeechSynthesis() {
    if (window.SpeechSynthesisUtterance && window.speechSynthesis) {
      this.wh00tSpeechSynthesisUtterance = new window.SpeechSynthesisUtterance();
      this.wh00tSpeechSynthesisUtterance.text = '';
      this.wh00tSpeechSynthesisUtterance.lang = 'en-us';
      // eslint-disable-next-line prefer-destructuring
      this.wh00tSpeechSynthesisUtterance.voice = window.speechSynthesis.getVoices().filter(
        (voice: SpeechSynthesisVoice) => voice.name === 'English (America)+anika',
      )[0];
      this.wh00tSpeechSynthesisUtterance.pitch = 0.1;
      this.wh00tSpeechSynthesisUtterance.rate = 0.55;
    }
  }

  clearWh00tScreen() {
    this.wh00tDispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      type: Wh00tActionsEnum.CLEAR_MESSAGES,
    });
  }

  setDispatch(dispatch: (action: Wh00tContextActionType) => void): void {
    this.wh00tDispatch = dispatch;
  }

  setWh00tConnectionStatus(status: boolean) {
    this.wh00tIsConnected = status;

    this.wh00tDispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      type: status ? Wh00tActionsEnum.CONNECTED : Wh00tActionsEnum.DISCONNECTED,
    });
  }

  handleMessage(messageSource: Wh00tMessageTypeEnum, wh00tMessage: Wh00tMessagePackage): void {
    const newMessage: Wh00tContextActionType = {
      source: messageSource,
      type: Wh00tActionsEnum.NEW_MESSAGE,
      value: wh00tMessage,
    };
    this.wh00tDispatch(newMessage);
    if (messageSource !== Wh00tMessageTypeEnum.LOCAL && isSecretMessage(wh00tMessage.message)) {
      this.clearSecretMessage(wh00tMessage);
    } else if (newMessage.value.message === '/clear' || newMessage.value.message === '/c') {
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getLocalStandardDateTime(true),
          message: 'Clearing Chat Message History...',
        },
      );
      setTimeout(() => {
        this.wh00tDispatch({
          source: Wh00tMessageTypeEnum.LOCAL,
          type: Wh00tActionsEnum.CLEAR_MESSAGES,
        });
      }, 500);
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
          time: getLocalStandardDateTime(true),
          message: 'Sorry, that message is too long',
        },
      );
    } else if (message === '/exit') {
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getLocalStandardDateTime(true),
          message: 'Exiting Chat...',
        },
      );
      setTimeout(() => {
        this.disconnectWebSocket();
      }, 1000);
    } else if (message === '/help' || message === '/h') {
      this.handleMessage(
        Wh00tMessageTypeEnum.LOCAL,
        {
          username: 'wh00t',
          time: getLocalStandardDateTime(true),
          message: helpMenu(),
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
        type: Wh00tActionsEnum.SECRET_MESSAGE,
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
    if (this.wh00tWS === null || this.wh00tWS.readyState === 3) {
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
      this.wh00tDispatch({
        source: Wh00tMessageTypeEnum.LOCAL,
        type: Wh00tActionsEnum.CONNECTING,
      });
      this.wh00tWS = new WebSocket(
        `${WSS_BASE_URL}:8000/wh00t_chat/${this.clientId}`,
      );

      this.wh00tWS.onopen = () => {
        this.setWh00tConnectionStatus(true);
        this.connectionAttemptCount = 0;
        this.clearWh00tScreen();
        this.handleMessage(
          Wh00tMessageTypeEnum.LOCAL,
          {
            username: 'wh00t',
            time: getLocalStandardDateTime(true),
            message: `Welcome to wh00t ! You are connected as *${this.clientId}*. \n\n${introductionMessage()}`,
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
          if (this.wh00tSpeechSynthesisUtterance) {
            if (parsedMessageData.data) {
              if (parsedMessageData.data.voice) {
                this.wh00tSpeechSynthesisUtterance.text = parsedMessageData.data.voice;
                window.speechSynthesis.speak(this.wh00tSpeechSynthesisUtterance);
              }
            }
          }
        }
      };

      this.wh00tWS.onerror = (): void => {
        this.connectionAttemptCount += 1;
        this.reattemptWh00tSocketConnection();
        this.clearWh00tScreen();
        this.wh00tDispatch({
          source: Wh00tMessageTypeEnum.LOCAL,
          type: Wh00tActionsEnum.CONNECTION_ERROR,
        });
      };

      this.wh00tWS.onclose = (): void => {
        if (this.wh00tIsConnected) {
          this.setWh00tConnectionStatus(false);
          this.wh00tWS.close();
          this.wh00tWS = null;
          this.connectionAttemptCount = 0;
          this.wh00tDispatch({
            source: Wh00tMessageTypeEnum.LOCAL,
            type: Wh00tActionsEnum.CONNECTION_ERROR,
          });
          this.connectWebSocket();
        }
      };
    }
  }

  disconnectWebSocket(): void {
    if (this.wh00tWS !== null) {
      this.setWh00tConnectionStatus(false);
      this.wh00tWS.close();
      this.wh00tWS = null;
      this.connectionAttemptCount = 0;
      setLocalStorage(LocalStorageEnum.STAY_CONNECTED, 'false');
      Wh00tWebSocket.generateRandomClientId();
    }
  }
}
