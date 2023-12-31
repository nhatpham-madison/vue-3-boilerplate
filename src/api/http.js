import axios from 'axios'
import { BASE_API_URL, REDIRECT_ON_LOGOUT } from "@/config/app";
import { isProduction } from "@/config/env";
import qs from 'qs'

// axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: BASE_API_URL,
});

// Request interceptor
http.interceptors.request.use(
  (request) => {
    const accessToken = null

    /**
     * !TODO
     * Handle get token from storage or store management
     */

    request.headers = {
      // 'X-Language': currentLanguage,
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: accessToken } : {}),
      ...(request.headers || {}),
    };

    if (request.method === 'get') {
      request.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      };
    }

    return request;
  },
  (err) => {
    return Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    if (res.request.responseType === 'blob') {
      return res;
    }

    if (!isProduction) {
      console.log('httpRequest Response: ', res);
    }

    return res.data;
  },
  (err) => {
    /**
     * !TODO
     * Handle logout and clear token once fail authen
     */
    if (err?.response?.status === 401) {
      window.location.href = REDIRECT_ON_LOGOUT;
    }
    if (err?.response?.data) return Promise.reject(err?.response?.data);
    return Promise.reject(err);
  },
);

export default http;
