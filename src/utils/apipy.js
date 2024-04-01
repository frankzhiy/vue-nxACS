import http from './http';
import pythonHttp from './httppy';
import { ElMessage } from 'element-plus'

// ... 其他代码
const handleError = (error, errorMessage) => {
    console.error(errorMessage, error);
    ElMessage.error({
        message: errorMessage,
        duration: 5000,
        showClose: true,
    });
    throw error;
};

export const postPrediction = async (requestData) => {
    try {
        const response = await pythonHttp.post('/predict', requestData);
        return response;
    } catch (error) {
        handleError(error, '错误!');
    }
};
