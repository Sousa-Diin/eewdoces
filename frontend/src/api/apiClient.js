import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });  //ajuste do caminho [BUG] corrigir e configurar arquivo dotenv(env) #16


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL da API
  timeout: 10000, // Timeout de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

/* 
  // Interceptor para adicionar o token de autenticação, caso exista
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // ou outro local de armazenamento
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para tratamento de respostas e erros
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirecionar para login ou outra ação se o token for inválido/expirado
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
*/