'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    static associate({ Mark, UslugaPrice }) {
      this.belongsTo(Mark, { foreignKey: 'mark_id' });
      this.hasMany(UslugaPrice, { foreignKey: 'carModel_id' });
    }
  }
  CarModel.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      mark_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'CarModel',
    }
  );
  return CarModel;
};
