const express = require('express')
const router = express.Router()
const carsHandler = require('../router_handler/car')

router.get('/get/carinfo',carsHandler.getCars)
router.post('/add/carinfo',carsHandler.addCars)
router.post('/update/carinfo',carsHandler.updateCar)
router.get('/specific/carinfo',carsHandler.getSpecificCar)
router.get('/delete/carinfo',carsHandler.deleteCar)
router.get('/get/carid',carsHandler.getCarID)

//passenger
router.get('/get/passinfo',carsHandler.getPass)
router.post('/add/passinfo',carsHandler.addPass)
router.post('/update/passinfo',carsHandler.updatePass)
router.get('/specific/passinfo',carsHandler.getSpecificPass)
router.get('/get/passID',carsHandler.getPassID)
router.get('/delete/passID',carsHandler.deletePass)


module.exports = router