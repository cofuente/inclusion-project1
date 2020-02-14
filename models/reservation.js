'use strict'
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    slot: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: { // 18 half hour slots, 0-17 
        isInt: true,
        min: 0,
        max: 17
      }
     }, 
     table:{
      allowNull: false,
      type: DataTypes.INTEGER, 
      validate: { // 10 tables, 1-10
        isInt: true,
        min: 1,
        max: 10
      }
    },
    day: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: { // only after today
        isDate: true,
        isAfter: "2020-02-13"
      }
    },
  }, {})

  class Reservation extends SequelizeReservation {
    static async allReservations(){
      return await this.findAll()
    }
    static async checkForConflicts(proposedTable,proposedSlot,proposedDay){
      console.log('search params', proposedTable,proposedSlot,proposedDay )
      return await this.findOne({
        where: {
          table: proposedTable,
          slot: proposedSlot,
          day: proposedDay
        },
      }).then(result => {
        console.log('finding is returning this result', result)
        if (result) return true
        else return false
      })
    }
  }

  return Reservation
}
