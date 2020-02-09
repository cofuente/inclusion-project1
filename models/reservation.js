'use strict'
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.ENUM('0','1','2','3','4'), // 18 half hour slots, 0-17
    table: DataTypes.ENUM('1','2','3') // 10 tables
  }, {})

  class Reservation extends SequelizeReservation {
    static async allReservations(){
      return await this.findAll()
    }
  }

  return Reservation
}
