'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UslugaPrice extends Model {
    static associate({ Usluga, Service, Mark, CarModel, OrderItem }) {
      this.belongsTo(Usluga, { foreignKey: 'usluga_id' });
      this.belongsTo(Service, { foreignKey: 'service_id' });
      this.belongsTo(Mark, { foreignKey: 'mark_id' });
      this.belongsTo(CarModel, { foreignKey: 'carModel_id' });
      this.hasMany(OrderItem, { foreignKey: 'uslugaPrice_id' });
    }
  }
  UslugaPrice.init(
    {
      usluga_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Uslugas', key: 'id' },
        onDelete: 'CASCADE',
      },
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Services', key: 'id' },
        onDelete: 'CASCADE',
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      mark_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Marks', key: 'id' },
        onDelete: 'CASCADE',
      },
      carModel_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'CarModels', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'UslugaPrice',
    }
  );
  return UslugaPrice;
};
