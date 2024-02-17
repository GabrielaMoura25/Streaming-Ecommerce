import { api } from "./api";

interface IDataLogin {
  email: string,
  password: string
}

export const login = async (data: IDataLogin) => {
  try {
    const response = await api.post('/login', data);

    const { token } = response.data;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer login');
  }
};
