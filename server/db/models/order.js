"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderItem }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(OrderItem, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
