import * as yup from 'yup';

import { IStreaming } from '../interfaces/IStreaming';

export const StreamingSchema: yup.ObjectSchema<Omit<IStreaming, 'id'>> = yup.object({
  title: yup.string().required('Title field is required'),
  description: yup.string().required('Description field is required'),
  value: yup.number().required('Value field is required'),
  photo: yup.string().optional(),
  userId: yup.string().required('User ID field is required'),
});
