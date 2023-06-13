const express = require('express')
const router = express.Router()
const seatHandler = require('../router_handler/seat')

router.get('/get/seatinfo',seatHandler.getSeat)
router.post('/add/seatinfo',seatHandler.addSeat)
router.post('/update/seatinfo',seatHandler.updateSeat)
router.get('/specific/seatinfo',seatHandler.getSpecificSeat)
router.get('/delete/seatinfo',seatHandler.deleteSeat)

module.exports = router