'use strict';
const { UslugaPrice } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const priceData = [
      {
        id: 1,
        usluga_id: 1,
        service_id: 1,
        cost: 8000,
        mark_id: 1,
        carModel_id: 1,
      },
      {
        id: 2,
        usluga_id: 2,
        service_id: 2,
        cost: 15000,
        mark_id: 2,
        carModel_id: 4,
      },
    ];
    await UslugaPrice.bulkCreate(priceData);
  },

  async down(queryInterface, Sequelize) {
    await UslugaPrice.destroy({ truncate: { cascade: true } });
  },
};
