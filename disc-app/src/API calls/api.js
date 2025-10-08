import axios from 'axios'

const API_BASE_URL = "http://localhost:3000/"

export const fetchData = async (endpoint = '') => {
    try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};