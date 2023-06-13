const express = require('express')
const router = express.Router()
const ticketHandler = require('../router_handler/ticket')

router.get('/get/ticketinfo',ticketHandler.getTicket)
router.post('/add/ticketinfo',ticketHandler.addTicket)
router.post('/update/ticketinfo',ticketHandler.updateTicket)
router.get('/specific/ticketinfo',ticketHandler.getSpecificTicket)
router.get('/delete/ticketinfo',ticketHandler.deleteTicket)

module.exports = router