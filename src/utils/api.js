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

//获取性别
export const getSexStatistics = async () => {
    try {
        const response = await http.get(`/count/sex`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching sex statistics:');
    }
};

//获取年龄
export const getAgeRangeStatistics = async () => {
    try {
        const response = await http.get(`/count/age`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching age range statistics:');
    }
};

//获取BMI
export const getBMIStats = async () => {
    try {
        const response = await http.get(`/count/bmi`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching BMI statistics:');
    }
};

//获取发病日期-发病人数
export const getDuplicateAdmissionTimes = async () => {
    try {
        const response = await http.get(`/count/timeOfAdmission`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching duplicate time of admission statistics:');
    }
};

export const getSmokeStatistics = async () => {
    try {
        const response = await http.get(`/count/smoke`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching smoke statistics:');
    }
};

//获取诊断统计
export const getDiagnosisStatistics = async () => {
    try {
        const response = await http.get(`/count/diagnosis`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching diagnosis statistics:');
    }
};

//获取手术统计
export const getOperateStatistics = async () => {
    try {
        const response = await http.get(`/count/operate`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching operation statistics:');
    }
};

export const getDiabetesStatistics = async () => {
    try {
        const response = await http.get(`/count/diabetes`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching diabetes statistics:');
    }
}

export const getHypertensionStatistics = async () => {
    try {
        const response = await http.get(`/count/hypertension`);
        return response;
    } catch (error) {
        handleError(error, 'Error fetching hypertension statistics:');
    }
}

export const getMacePredict = async (manageDoctors) => {
    try {
        const response = await http.get(`/predict/mace`, {
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

