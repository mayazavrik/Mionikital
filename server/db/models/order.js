'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Service }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Service, { foreignKey: 'service_id' });
    }
  }
  Order.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Services', key: 'id' },
        onDelete: 'CASCADE',
      },
      isClosed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
