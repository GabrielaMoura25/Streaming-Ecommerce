import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/connection';
import { IUser } from '../interfaces/IUser';

class User extends Model implements IUser {
  id!: string;
  name!: string;
  cpf!: string;
  phone!: string
  gender?: "hc" | "ht" | "mc" | "mt" | "o";
  dueDate!: string;
  email!: string;
  password!: string;
  role!: "admin" | "client";
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.ENUM('hc', 'ht', 'mc', 'mt', 'o'),
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
  modelName: 'User',
});

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized user database');
// });

export default User;