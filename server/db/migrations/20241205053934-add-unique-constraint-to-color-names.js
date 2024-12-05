'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Colors', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_color_name_constraint'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Colors', 'unique_color_name_constraint');
  }
};
