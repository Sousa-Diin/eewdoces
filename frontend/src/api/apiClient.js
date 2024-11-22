import axios from 'axios';/* 
import dotenv from 'dotenv';
dotenv.config();  */


const apiClient = axios.create({
  baseURL: 'http://localhost:4001/', // Base URL da API
  timeout: 10_000, // Timeout de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          console.error('Não autorizado. Redirecionando para login...');
          // Redirecione para login, se necessário
          break;
        case 500:
          console.error('Erro interno do servidor.');
          break;
        default:
          console.error(`Erro ${status}: ${error.response.data.message}`);
      }
    } else {
      console.error('Erro de conexão:', error.message);
    }
    return Promise.reject(error);
  }
);


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