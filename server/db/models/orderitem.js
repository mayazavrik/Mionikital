"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, UslugaPrice, Service }) {
      this.belongsTo(UslugaPrice, { foreignKey: "uslugaPrice_id" });
      this.belongsTo(Order, { foreignKey: "order_id" });
      this.belongsTo(Service, { foreignKey: "service_id" });
    }
  }
  OrderItem.init(
    {
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Orders", key: "id" },
        onDelete: "CASCADE",
      },
      uslugaPrice_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "UslugaPrices", key: "id" },
        onDelete: "CASCADE",
      },
      date: { type: DataTypes.DATE, allowNull: true },
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Services", key: "id" },
        onDelete: "CASCADE",
      },
      isClosed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
