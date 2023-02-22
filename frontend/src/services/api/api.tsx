import axios from 'axios';
import { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;
