'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'service_id' });
    }
  }
  Sale.init(
    {
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Services', key: 'id' },
        onDelete: 'CASCADE',
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Sale',
    }
  );
  return Sale;
};
