export interface IUser {
  id: string,
  name: string,
  cpf: string,
  phone: string,
  gender: 'hc' | 'ht' | 'mc' | 'mt' | 'o' | undefined,
  dueDate: string,
  email: string,
  password: string,
  role: 'admin' | 'user' | undefined,
};