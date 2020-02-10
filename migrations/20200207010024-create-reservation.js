'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slot: {
        allowNull: false,
        type: Sequelize.INTEGER, // 18 half hour slots, 0-17
        validate: {
          isInt: true,
          isIn: [[0,1,2,3,4,5,6,6,8,9,10,11,12,13,14,15,16,17]]
        }
      },
      table:{
        allowNull: false,
        type: Sequelize.ENUM('1','2','3') // 10 tables
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations')
  }
}
