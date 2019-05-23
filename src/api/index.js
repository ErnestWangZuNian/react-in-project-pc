import Api from 'wzn-api';

const api = new Api();

// 添加请求拦截器
api.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// 添加响应拦截器
api.interceptors.response.use(
  response => response.data,
  error =>
    // 对响应错误做点什么
    Promise.reject(error),

);
export default api;
