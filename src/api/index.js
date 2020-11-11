import Api from 'wzn-api';
import Cookies from 'js-cookie';
import { message } from 'antd';

const api = new Api();
const csrftoken = Cookies.get('csrfToken');
const csrfSafeMethod = (method) => {
  const result = /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
  return result;
};

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (!csrfSafeMethod(config.method)) {
      newConfig.headers['x-csrf-token'] = csrftoken;
    }
    return newConfig;
  },
  (error) => Promise.reject(error),
);

// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    let result = { ...response };
    if (response.data && response.data.success) {
      result = response.data;
    } else {
      message.error(response.data.message);
    }
    return result;
  },
  (error) => Promise.reject(error),
);
export default api;
