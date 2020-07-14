'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image', [
      {
        path: "1.jpeg"
      },
      {
        path: "2.jpeg"
      },
      {
        path: "3.jpeg"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('image', null, {});
  }
};
