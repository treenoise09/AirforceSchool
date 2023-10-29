import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const register = async (data) => {
    try {
        const response = await apiClient.post('/register', data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await apiClient.post('/login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
