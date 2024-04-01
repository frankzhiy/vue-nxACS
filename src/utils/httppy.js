import axios from 'axios';

const pythonInstance = axios.create({
    baseURL: 'http://localhost:5000',  // Python 后端的基础 URL
    timeout: 30000,  // 请求超时时间
});

pythonInstance.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

pythonInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);

export default pythonInstance;
