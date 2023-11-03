'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, UslugaPrice }) {
      this.belongsTo(UslugaPrice, { foreignKey: 'uslugaPrice_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  OrderItem.init(
    {
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Orders', key: 'id' },
        onDelete: 'CASCADE',
      },
      uslugaPrice_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'UslugaPrices', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};
