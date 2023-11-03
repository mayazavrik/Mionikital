'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate({ Service, User }) {
      this.belongsTo(Service, { foreignKey: 'service_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Rate.init(
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
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rate',
    }
  );
  return Rate;
};
