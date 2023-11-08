"use strict";
const { Mark } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const marksData = [
      {
        title: "BMW",
      },
      {
        title: "Audi",
      },
      {
        title: "Toyota",
      },
      {
        title: "Lada",
      },
      {
        title: "Nissan",
      },
      {
        title: "Mercedes",
      },
    ];
    await Mark.bulkCreate(marksData);
  },

  async down(queryInterface, Sequelize) {
    await Mark.destroy({ truncate: { cascade: true } });
  },
};
