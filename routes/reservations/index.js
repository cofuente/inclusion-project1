const express = require('express')
const router = express.Router()
const { Reservation } = require('../../models')

router.get('/', async (req,res) => res.status(200).json(await Reservation.allReservations()))

router.put('/', async (req,res,next) => {
  const { table, slot } = req.body
  Reservation.checkForConflicts(table,slot)
    .then((conflict)=> {
      if(conflict) {
        return res.status(409).json('Something went wrong with your reservation. Please try again.')
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
      const responseMessage = result === 1? 'Reservation cancelled successfully.' : 'Something went wrong with your cancellation. Please try again.' 
      return res.json(responseMessage)
    })
    .catch(next)
})

module.exports = router
