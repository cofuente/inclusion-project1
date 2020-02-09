'use strict'
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  }, {})

  class Reservation extends SequelizeReservation {
    static async allReservations(){
      return await this.findAll()
    }
  }

  return Reservation
}
