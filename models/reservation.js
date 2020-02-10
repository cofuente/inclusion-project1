'use strict'
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.INTEGER, // 18 half hour slots, 0-17
    table: DataTypes.INTEGER, // 10 tables, 1-10
    day: DataTypes.DATE
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
