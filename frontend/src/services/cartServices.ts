import { api } from './api';

import { ICreateStreaming } from '../interfaces/ICreateStreaming'
import { ICart } from '../interfaces/ICart';

export const postCarts = async (dataCart: ICreateStreaming) => {
  try {
    const response = api.post('/cart', dataCart);
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};

export const getAllCarts = async (idUser: string) => {
  try {
    const response = api.get(`/cart/${idUser}`);
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};

export const removerCart = async (idStreaming: ICart) => {
  try {
    const response = api.delete(`/cart/${idStreaming}`);
    return response;
  } catch (error) {
    throw new Error('Erro ao buscar os cards');
  }
};