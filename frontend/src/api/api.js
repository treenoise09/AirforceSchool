import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const register = async (data) => {
    try {
        const response = await axios.post(API_URL+"/register", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(API_URL+'/login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
