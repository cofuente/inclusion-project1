'use strict'
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.INTEGER, // 18 half hour slots, 0-17
    table: DataTypes.ENUM('1','2','3') // 10 tables
  }, {})

  class Reservation extends SequelizeReservation {
    static async allReservations(){
      return await this.findAll()
    }
    static async checkForConflicts(proposedTable, proposedSlot){
      return await this.findOne({
        where: {
          table: proposedTable,
          slot: proposedSlot
        },
      }).then(result => {
        if (result) return true
        else return false
      })
    }
  }

  return Reservation
}
