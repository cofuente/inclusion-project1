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
          min: 0,
          max: 17
        }
      },
      day: {
        allowNull: false,
        type:Sequelize.DATE,
        validate: {
          isDate: true,
          isAfter: new Date()
        }
      },
      table:{
        allowNull: false,
        type: Sequelize.INTEGER, // 10 tables 1-10
        validate: {
          isInt: true,
          min: 1,
          max: 10
        }
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
