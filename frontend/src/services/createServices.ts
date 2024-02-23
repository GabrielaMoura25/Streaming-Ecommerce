import { api } from './api';

interface ICreateUserForm {
  name: string;
  cpf: string;
  phone: string;
  gender: string;
  dueDate: Date;
  email: string;
  password: string;
}

export const CreateUserServices = async (data: ICreateUserForm | string| Date) => {
  try {
    const response = await api.post('http://localhost:8080/register', data);
    console.log(data);
    return response;
  } catch (error) {
    console.log(error);

    throw new Error('Erro, cadastro inválido');
  }
};
