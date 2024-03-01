import { api } from './api';

import { ICreateStreaming } from '../interfaces/ICreateStreaming'

export const postCarts = async (dataCart: ICreateStreaming) => {
  try {
    const response = api.post('/cart', dataCart);
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};
export const getAllCarts = async () => {
  try {
    const response = api.get('/cart');
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};