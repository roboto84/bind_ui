import { HTTP_PROTOCOL, WS_PROTOCOL } from '@/types';

export const { API_PORT } = process.env;
const { API_URL } = process.env;
const { API_SSL } = process.env;

// eslint-disable-next-line no-restricted-globals
export const BASE_API_URL: string = API_URL !== '' ? API_URL : `${location.hostname}`;
export const CURRENT_API_WS_PROTOCOL: WS_PROTOCOL = API_SSL === 'true' ? WS_PROTOCOL.WSS : WS_PROTOCOL.WS;

export const CURRENT_API_HTTP_PROTOCOL: HTTP_PROTOCOL = API_SSL === 'true'
  ? HTTP_PROTOCOL.HTTPS
  : HTTP_PROTOCOL.HTTP;

export const FULL_API_URL: string = `${CURRENT_API_HTTP_PROTOCOL}://${BASE_API_URL}:${API_PORT}`;
export const WS_BASE_URL: string = `${CURRENT_API_WS_PROTOCOL}://${BASE_API_URL}`;
export const BASE_UI_URL: string = `${HTTP_PROTOCOL.HTTP}://${BASE_API_URL}`;
