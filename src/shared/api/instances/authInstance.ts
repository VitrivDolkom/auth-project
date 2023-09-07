import axios, { AxiosError } from 'axios';

import { instance } from './instance';

export const authInstance = axios.create({
  ...instance.defaults,
  baseURL: `${instance.defaults.baseURL}users`
});

const LOG_FETCHING = import.meta.env.VITE_FETCHING_MODE === 'log';

authInstance.interceptors.request.use(
  (config) => {
    if (LOG_FETCHING) {
      //   eslint-disable-next-line no-console
      console.log('new request from url', config.baseURL);
    }

    return config;
  },
  (error) => {
    if (LOG_FETCHING) {
      // eslint-disable-next-line no-console
      console.log('error when request', error);
    }

    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    if (LOG_FETCHING) {
      // eslint-disable-next-line no-console
      console.log('successful response', response);
    }

    return response;
  },
  (error: AxiosError) => {
    if (LOG_FETCHING) {
      // eslint-disable-next-line no-console
      console.log('error when response with message:', error.message);
    }

    return Promise.reject(error);
  }
);
