import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const api = axios.create({
    baseURL: 'https://your-api-url.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }  
);


api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) =>{
        if (error.response.status === 401) {
            console.error('No autorizado regresando al login');
            navigate('/Login');
        }
        return Promise.reject(error);
    }
);