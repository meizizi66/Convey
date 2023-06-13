const express = require('express')
const router = express.Router()
const RouteHandler = require('../router_handler/route')

router.get('/get/Routeinfo',RouteHandler.getRoute)
router.post('/add/Routeinfo',RouteHandler.addRoute)
router.post('/update/Routeinfo',RouteHandler.updateRoute)
router.get('/specific/Routeinfo',RouteHandler.getSpecificRoute)
router.get('/delete/Routeinfo',RouteHandler.deleteRoute)
router.get('/get/RouteID',RouteHandler.getRouteID)

module.exports = router