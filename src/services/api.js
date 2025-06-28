import axios from 'axios';

const api = axios.create({
    // URL base da nossa API Spring Boot
    baseURL: 'http://localhost:9090',
    // Envia os cookies de sessão em cada requisição
    //withCredentials: true
});

export default api;