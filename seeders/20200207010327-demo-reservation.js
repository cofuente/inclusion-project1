'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        name: 'John Cena',
        slot: 0,
        table: 1,
        day: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Hamm',
        slot: 0,
        table: 3,
        day: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {})
  }
}
