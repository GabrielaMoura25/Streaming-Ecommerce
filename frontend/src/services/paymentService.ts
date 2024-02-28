import { api } from './api';

export const paymentService = async (data: any) => {
  try {
    const response = await api.post('/cart/payment', data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar pagamento');
  }
}