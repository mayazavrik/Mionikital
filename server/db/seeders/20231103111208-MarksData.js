'use strict';
const { Mark } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const marksData = [
      {
        id: 1,
        title: 'BMW',
      },
      {
        id: 2,
        title: 'Audi',
      },
      {
        id: 3,
        title: 'Toyota',
      },
      {
        id: 4,
        title: 'Lada',
      },
      {
        id: 5,
        title: 'Nissan',
      },
      {
        id: 6,
        title: 'Mercedes',
      },
    ];
    await Mark.bulkCreate(marksData);
  },

  async down(queryInterface, Sequelize) {
    await Mark.destroy({ truncate: { cascade: true } });
  },
};
