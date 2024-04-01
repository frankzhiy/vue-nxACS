// http.js
import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: 'http://localhost:8087/acsPlatform', // API的基础URL
    timeout: 300000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 在这里你可以做一些请求前的操作，例如添加Token等
        // config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        // 处理请求错误
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 处理响应数据
        return response.data;
    },
    error => {
        // 处理响应错误
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);

export default instance;
