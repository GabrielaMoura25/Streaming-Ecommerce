import * as yup from 'yup';
import { ICart } from '../interfaces/ICart';

export const CartSchema: yup.ObjectSchema<Omit<ICart, 'id'>> = yup.object({
  userId: yup.string().required('UserId field is required'),
  streamingId: yup.string().required('StreamingId field is required'),
  title: yup.string().nullable().notRequired(),
  description: yup.string().nullable().notRequired(),
  quantity: yup.number().nullable().notRequired(),
  price: yup.number().nullable().notRequired(),
});
