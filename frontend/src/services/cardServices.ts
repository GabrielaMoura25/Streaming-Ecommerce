import { api } from './api';


export const getCards = async () => {
  try {
    const response = api.get('/streaming')
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};

export const getCardsTitle = async (query: any) => {
  try {
    const response = await api.get(`http://localhost:8080/streaming/title?title=${query}`);
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
}