const express = require('express')
const router = express.Router()
const driversHandler = require('../router_handler/userinfo')

router.get('/userinfo',driversHandler.getDrivers);
router.get('/admin/userinfo',(req,res)=>{
    res.send({
        id:1,
        name:"超级管理员",
        email:"129@qq.com",
        phone:null,
        avater:"花",
        avater_url:"https://tse1-mm.cn.bing.net/th/id/R-C.2a03fa278f3600bf0ee46cda44f66488?rik=7IDdRWGvEMe3Jg&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2f1212qxn%2f465.jpg&ehk=pDRClEfskxopTtOIkByFqItIxtVcsR%2bmJ8HkZtuuu1A%3d&risl=&pid=ImgRaw&r=0",
        is_locked:"0",
        create_at:"2020-12-22T02:58:08.2222222Z",
        updated_at:"2020-12-22T02:58:08.2222222Z",
    })
})
router.get('/change/userinfo',driversHandler.changeWork)
router.post('/add/userinfo',driversHandler.addDriver)
router.post('/update/userinfo',driversHandler.updateDriver)
router.get('/specific/userinfo',driversHandler.getSpecificDriver)
router.get('/delete/userinfo',driversHandler.deleteDriver)
router.get('/get/driverID',driversHandler.getDriverID)
module.exports = router