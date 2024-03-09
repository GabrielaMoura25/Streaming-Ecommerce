import { api } from './api';

import { IStreaming } from '../interfaces/IStreaming';

export const RegisterStreaming = async (data: IStreaming, userToken: string) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('value', data.value);
    formData.append('photo', data.photo);
    formData.append('userId', data.userId);

    const response = await api.post('http://localhost:8080/streaming', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    console.log(data);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao cadastrar streaming');
  }
};
