import express from 'express'

import TripsController from '../controllers/savedtrips.js'

const router = express.Router()

router.get('/', TripsController.getsavedTrips)
router.get('/:id', TripsController.getsavedTrip)
router.post('/', TripsController.createTrip)
// router.delete('/:id', TripsController.deleteTrip)
// router.patch('/:id', TripsController.updateTrip)

export default router