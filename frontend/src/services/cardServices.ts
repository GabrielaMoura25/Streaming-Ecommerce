import { api } from './api';

export const getCards = async () => {
  try {
    const response = api.get('/streaming')
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};