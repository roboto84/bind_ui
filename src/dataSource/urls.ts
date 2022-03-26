// eslint-disable-next-line no-restricted-globals
export const BASE_URL: string = `${location.hostname}`;
// export const BASE_URL: string = '192.168.0.169';
export const HTTPS_BASE_URL: string = `https://${BASE_URL}`;
export const API_URL: string = `${HTTPS_BASE_URL}:8000`;
export const WSS_BASE_URL: string = `wss://${BASE_URL}`;
export const BASE_UI_URL: string = `$http://${BASE_URL}`;
