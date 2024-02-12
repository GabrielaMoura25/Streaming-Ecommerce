import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/connection';
import { IStreaming } from './../interfaces/IStreaming';

import User from './User';

class Streaming extends Model implements IStreaming {
  id!: string;
  title!: string;
  description!: string;
  value!: number;
  photo?: string;
  userId!: string;
};

Streaming.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },
}, {
  sequelize,
  tableName: 'streamings',
  modelName: 'Streaming',
});

User.hasMany(Streaming, { foreignKey: 'userId', as: 'users' });
Streaming.belongsTo(User, { foreignKey: 'userId' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized streaming database');
// });

export default Streaming;