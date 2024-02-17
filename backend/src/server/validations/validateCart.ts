import * as yup from 'yup';
import { ICart } from '../interfaces/ICart';

export const CartSchema: yup.ObjectSchema<Omit<ICart, 'id'>> = yup.object({
  userId: yup.string().required('User ID field is required'),
  streamingId: yup.string().required('Streaming ID field is required'),
  quantity: yup.number().required('Quantity field is required'),
  price: yup.number().required('Price field is required'),
});
