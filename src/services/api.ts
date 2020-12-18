import axios, { Canceler } from 'axios';

let cancel: Canceler | null;

const apiKey = process.env.REACT_APP_API_KEY || '';
const imgUrl = process.env.REACT_APP_API_IMG_URL || '';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Add a request interceptor
api.interceptors.request.use(config => {
  // reseting cancel
  cancel = null;

  return {
    ...config,
    cancelToken: new axios.CancelToken(function executor(c) {
      // An executor function receives a cancel function as a parameter
      cancel = c;
    }),
  };
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // if (error.response) {
    //   const { status } = error.response;

    // 	const originalRequest = error.config;

    //   if (error.response.status === 401) {
    // 	}

    //   if ((status >= 400 && status !== 401) || status >= 500) {

    //   }
    // }
    // Do something with request error
    return Promise.reject(error);
  },
);

export { api, cancel, apiKey, imgUrl };
