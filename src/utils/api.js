// api.js
import http from './http';
import { ElMessage } from 'element-plus'

const handleError = (error, errorMessage) => {
    console.error(errorMessage, error);
    ElMessage.error({
        message: errorMessage,
        duration: 5000,
        showClose: true,
    });
    throw error;
};

export const getAllUser = async (manageDoctors) => {
    try {
        const response = await http.get(`/basic/userList`, {
            params: {
                manageDoctors: manageDoctors,
            }
        });
        return response;
    } catch (error) {
        // console.error('Error fetching user data:', error);
        handleError(error, 'Error fetching user data:');
    }
};
//查看当前患者详细数据
export const getCaseDetails = async (caseNumber, url) => {
    try {
        const response = await http.get(url, {
            params: {
                caseNumber: caseNumber,
            },
        });
        return response;
    } catch (error) {
        handleError(error, 'Error fetching user data:');
    }
};

// export const createUser = async (userData) => {
//     try {
//         const response = await http.post('/users', userData);
//         return response;
//     } catch (error) {
//         console.error('Error creating user:', error);
//         throw error;
//     }
// };

// 添加更多的 API 函数...


// 提交患者数据
export const submitPatientData = async (formData) => {
    try {
        //TODO: 待添加具体地址
        const response = await http.post('/basic/submit', formData);
        return response;
    } catch (error) {
        handleError(error, 'Error submitting patient data:');
    }
};

// 删除患者数据
export const deletePatient = async (caseNumber, timeOfAdmission) => {
    try {
        const response = await http.delete('/basic/deleteInfo', {
            params: {
                caseNumber,
                timeOfAdmission
            }
        });
        return response;
    } catch (error) {
        handleError(error, 'Error deleting patient data:');
    }
};
