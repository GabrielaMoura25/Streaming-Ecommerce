import { api } from './api';

import { IUser } from '../interfaces/IUser';

export const CreateUserServices = async (data: IUser) => {
  try {
    const response = await api.post('http://localhost:8080/user', data);
    console.log(response);
    console.log(data);
    return response;
  } catch (error) {
    throw new Error('Erro ao se cadastrar');
  }
};
