const express = require('express')
const router = express.Router()
const { Reservation } = require('../../models')

router.get('/', async (req,res) => {
  res.json(await Reservation.allReservations())
})

router.put('/', async (req,res,next) => {
  const { table, slot } = req.body
  Reservation.checkForConflicts(table,slot)
    .then((conflict)=> {
      if(conflict) {
        res.status(409)

      }
      else {
        Reservation.create(req.body)
          .then(reservation => res.status(201).json(reservation))
          .catch(next)
      }
    })
})

router.delete('/:id', async (req, res, next) => {
  Reservation.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {
      const responseMessage = result === 1? 'Reservation cancelled successfully.' : 'That reservation does not exist and therefore was not deleted. Please try again.' 
      return res.json(responseMessage)
    })
    .catch(next)
})

module.exports = router
