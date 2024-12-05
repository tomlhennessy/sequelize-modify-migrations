'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Games', 'numPlayers', 'maxPlayers');
    await queryInterface.removeColumn('Games', 'estPlayTime');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Games', 'estPlayTime', {
      type: Sequelize.INTEGER
    });
    await queryInterface.renameColumn('Games', 'maxPlayers', 'numPlayers');
  }
};
