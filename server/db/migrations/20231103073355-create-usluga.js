'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Uslugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      img:{
        allowNull: false,
        type: Sequelize.TEXT,
      },
      text: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      price:{
        allowNull: false,
				type: Sequelize.INTEGER,
      },
      price2:{
        allowNull: false,
				type: Sequelize.INTEGER,
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Uslugas');
  }
};