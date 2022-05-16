import { HTTP_PROTOCOL } from '@/types';

// eslint-disable-next-line no-restricted-globals
export const BASE_URL: string = process.env.API_URL !== '' ? process.env.API_URL : `${location.hostname}`;
export const CURRENT_API_HTTP_PROTOCOL: HTTP_PROTOCOL = HTTP_PROTOCOL.HTTPS;
function getHttpBaseUrl() {
  if (CURRENT_API_HTTP_PROTOCOL === HTTP_PROTOCOL.HTTPS) {
    return `https://${BASE_URL}`;
  }
  return `http://${BASE_URL}`;
}

export const API_URL: string = `${getHttpBaseUrl()}:8000`;
export const WSS_BASE_URL: string = `wss://${BASE_URL}`;
export const BASE_UI_URL: string = `$http://${BASE_URL}`;
