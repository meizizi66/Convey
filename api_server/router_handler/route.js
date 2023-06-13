const db = require('../db/index');
var moment = require('moment')

exports.getRoute = (req, res) => {
    const id = req.query.RouteID;
    const StartPlace =  req.query.StartPlace
    const EndPlace = req.query.EndPlace
    if (id) {
        const sql1 = `select  * from route where RouteID = ?`
        db.query(sql1, [id], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj) => {
                const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
                const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
                return { ...obj, StartTime: newstart, EndTime: newend }
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    if (StartPlace) {
        const sql1 = `select  * from route where StartPlace = ?`
        db.query(sql1, [StartPlace], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj) => {
                const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
                const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
                return { ...obj, StartTime: newstart, EndTime: newend }
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    if (EndPlace) {
        const sql1 = `select  * from route where EndPlace = ?`
        db.query(sql1, [EndPlace], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj) => {
                const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
                const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
                return { ...obj, StartTime: newstart, EndTime: newend }
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    if (EndPlace&&StartPlace) {
        const sql1 = `select  * from route where EndPlace = ? and StartPlace = ? `
        db.query(sql1, [EndPlace,StartPlace], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj) => {
                const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
                const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
                return { ...obj, StartTime: newstart, EndTime: newend }
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    else {
        const sql0 = `select  * from route`
        db.query(sql0, [], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj) => {
                const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
                const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
                return { ...obj, StartTime: newstart, EndTime: newend }
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }

}
exports.addRoute = (req, res) => {
    const RouteID = req.body.RouteID;
    const StartPlace = req.body.StartPlace;
    const EndPlace = req.body.EndPlace;
    const StartTime = req.body.StartTime;
    const EndTime = req.body.EndTime;
    const CarNUM = req.body.CarNUM;
    const DriverID = req.body.DriverID;
    const SeatNum = req.body.SeatNum;
    const price = req.body.price;
    const RouteStatus = req.body.RouteStatus;  
    const sql2 = `insert into route values(?,?,?,?,?,?,?,?,?,?,?);`
    db.query(sql2, [RouteID, StartPlace, EndPlace, StartTime, EndTime, CarNUM, DriverID, SeatNum, price, RouteStatus,0], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updateRoute = (req, res) => {
    const RouteID = req.body.RouteID;
    const StartPlace = req.body.StartPlace;
    const EndPlace = req.body.EndPlace;
    const StartTime = req.body.StartTime;
    const EndTime = req.body.EndTime;
    const CarNUM = req.body.CarNUM;
    const DriverID = req.body.DriverID;
    const SeatNum = req.body.SeatNum;
    const price = req.body.price;
    const RouteStatus = req.body.RouteStatus;  

    const sql2 = `UPDATE route SET RouteID=?,StartPlace=?,EndPlace=?,StartTime=?,EndTime=?,CarNUM=?,DriverID=?,SeatNum=?,price=?,RouteStatus=? WHERE RouteID = ?;`
    db.query(sql2, [RouteID, StartPlace, EndPlace, StartTime, EndTime, CarNUM, DriverID, SeatNum, price, RouteStatus, RouteID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificRoute = (req, res) => {
    const id = req.query.RouteID;
    const sql1 = `select  * from route where RouteID = ?`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        const newResults = results.map((obj) => {
            const newstart = moment(obj.StartTime).format('YYYY-MM-DD HH:mm:ss')
            const newend = moment(obj.EndTime).format('YYYY-MM-DD HH:mm:ss')
            return { ...obj, StartTime: newstart, EndTime: newend }
        })
        res.send({
            data: newResults,
            success: true,
            status: 'ok',
        })

    })
}
exports.deleteRoute = (req, res) => {
    const id = req.query.RouteID;
    const sql1 = `delete from route where RouteID = ?;`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        })

    })
}
exports.getRouteID = (req, res) => {
    const sql1 = `select  RouteID from route `
    db.query(sql1, [], function (err, results) {
        if (err) {
            return res.cc(err.message)
        }
        /* const newResults = results.map((obj) => {
            var keyMap = { RouteID: obj.RouteID }
            var objs = Object.keys(obj).reduce((newData, key) => {
                let newKey = keyMap[key] || key
                newData[newKey] = obj[key]
                return newData
            }, {})
            return objs
        }) */
        const newResults = results.map((obj)=>{

            return {label: obj.RouteID, value: obj.RouteID}
        })
        res.send(newResults)

    })
}