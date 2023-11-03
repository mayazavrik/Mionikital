'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Service }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Service, { foreignKey: 'service_id' });
    }
  }
  Comment.init(
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
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
