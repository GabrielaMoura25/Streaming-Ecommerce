import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/connection';
import { ICard } from '../interfaces/ICard';

import User from './User';
import Streaming from './Streaming';

class Card extends Model implements ICard {
  id!: string;
  streamingId!: string;
  clientId!: string;
};

Card.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  clientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  streamingId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Streaming,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'cards',
  modelName: 'Card'
});

User.hasMany(Card, { foreignKey: 'clientId', as: 'users' });
Card.belongsTo(User, { foreignKey: 'clientId' });

Card.hasMany(Streaming, { foreignKey: 'streamingId', as: 'streamings' });
Streaming.belongsTo(Card, { foreignKey: 'streamingId' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized card database');
// });

export default Card;