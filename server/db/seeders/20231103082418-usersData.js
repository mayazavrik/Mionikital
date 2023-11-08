"use strict";
const { User } = require("../models");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        name: "Admin",
        email: "1@1",
        password: await bcrypt.hash("123", 10),
        phone: "89212140441",
        isAdmin: true,
      },
      {
        name: "JohnDoe",
        email: "2@2",
        password: await bcrypt.hash("123", 10),
        phone: "89212140442",
      },
      {
        name: "JaneDoe",
        email: "3@3",
        password: await bcrypt.hash("123", 10),
        phone: "89212140445",
      },
    ];
    await User.bulkCreate(usersData);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
