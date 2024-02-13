import * as yup from 'yup';

import { IUser } from '../interfaces/IUser';

export const UserSchema: yup.ObjectSchema<Omit<IUser, 'id'>> = yup.object({
  name: yup.string().required('Name field is required'),
  cpf: yup.string().required('CPF field is required'),
  phone: yup.string().max(14).required('Phone field is required'),
  gender: yup.string<'hc' | 'ht' | 'mc' | 'mt' | 'o'>()
    .required('Gender field is required'),
  dueDate: yup.string().min(3).required('Name field is required'),
  email: yup.string().required('Due date field is required'),
  password: yup.string().min(3).required('Password field is required'),
  role: yup.string<'admin' | 'user'>().required('Role field is required'),
});