import apiClient from "../api/apiClient"; // Importa o cliente Axios configurado

/**
 * Registra uma nova pessoa na API.
 * 
 * @param {Object} data - Dados da pessoa a serem enviados.
 * @param {string} data.name - Nome da pessoa.
 * @param {string} data.address - Endereço da pessoa.
 * @param {string} data.phone - Telefone da pessoa.
 * @param {string} data.type_person - Tipo pessoa.
 * @returns {Promise<Object>} - Retorna os dados da resposta da API.
 */
export const registerPeople = async (data) => {
  try {
    // Envia os dados para a API
    const response = await apiClient.post('/people', data);

    // Loga os dados enviados e a resposta da API
    console.log('Dados enviados com sucesso:', data);
    console.log('Resposta da API:', response.data);

    return response.data; // Retorna a resposta da API
  } catch (error) {
    // Loga o erro para depuração
    console.error('Erro ao registrar pessoa:', error.message);

    // Lança o erro para que o chamador possa tratá-lo
    throw error;
  }
};

/**
 * Atualiza uma pessoa no BD.
 * 
 * @param {Object} data - Dados da pessoa a serem alterados.
 * @param {string} data.name - Nome da pessoa.
 * @param {string} data.address - Endereço da pessoa.
 * @param {string} data.phone - Telefone da pessoa.
 * @param {string} data.type_person - Tipo pessoa.
 * @returns {Promise<Object>} - Retorna os dados da resposta da API.
 */
export const updatePeople = async data => {
  try {
    const response = await apiClient.put('/people', data);
    return response.data;
  } catch (error) {
    console.log('Erro ao atualizar pessoa: ', error.message);
    throw error;
  }
};