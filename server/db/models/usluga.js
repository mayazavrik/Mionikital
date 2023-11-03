'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usluga extends Model {
    static associate({ UslugaPrice }) {
      this.hasMany(UslugaPrice, { foreignKey: 'usluga_id' });
    }
  }
  Usluga.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Usluga',
    }
  );
  return Usluga;
};
