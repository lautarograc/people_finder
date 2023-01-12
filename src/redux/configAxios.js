import axios from 'axios';

const baseURL = 'https://people-finder.fly.dev/api/v1/';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        localStorage.setItem('token', token);
    }
    return config;
});

export default instance;