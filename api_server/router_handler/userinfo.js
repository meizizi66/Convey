const { send } = require('express/lib/response');
const db = require('../db/index');

exports.getDrivers = (req, res) => {
    const id = req.query.DriverID;
    const name = req.query.DriverName;
    if (id && name) {
        const sql1 = `select  * from driver where DriverID = ? and DriverName = ?`
        db.query(sql1, [id, name], function (err, results) {
            res.send({
                data: results,
                success: true,
            })

        })
    }
    if (id) {
        const sql1 = `select  * from driver where DriverID = ?`
        db.query(sql1, [id], function (err, results) {
            res.send({
                data: results,
                success: true,
            })

        })
    }
    if (name) {
        const sql1 = `select  * from driver where DriverName = ?`
        db.query(sql1, [name], function (err, results) {
            res.send({
                data: results,
                success: true,
            })

        })
    }
    else {
        const sql0 = `select  * from driver`
        db.query(sql0, [], function (err, results) {
            res.send({
                data: results,
                success: true,
            })

        })
    }

}
exports.changeWork = (req, res) => {
    const DriverID = req.query.DriverID;
    const sql2 = `UPDATE driver SET is_work = CASE is_work WHEN 0 THEN 1 WHEN 1 THEN 0 END WHERE DriverID=?`
    db.query(sql2, [DriverID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.addDriver = (req, res) => {
    const DriverID = req.body.DriverID;
    const DriverName = req.body.DriverName;
    const DriverPhone = req.body.DriverPhone;
    const is_work = req.body.is_work;
    const sql2 = `insert into driver values(?,?,?,?);`
    db.query(sql2, [DriverID, DriverName, DriverPhone, is_work], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updateDriver = (req, res) => {
    const DriverID = req.body.DriverID;
    const DriverName = req.body.DriverName;
    const DriverPhone = req.body.DriverPhone;
    const is_work = req.body.is_work;

    const sql2 = `UPDATE driver SET DriverID=?,DriverName=?,DriverPhone=?,is_work=? WHERE DriverID = ?;`
    db.query(sql2, [DriverID, DriverName, DriverPhone, is_work, DriverID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificDriver = (req, res) => {
    const id = req.query.DriverID;
    const sql1 = `select  * from driver where DriverID = ?`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            data: results,
            success: true,
            status:'ok',
        })

    })
}
exports.deleteDriver = (req, res) => {
    const id = req.query.DriverID;
    const sql1 = `delete from driver where DriverID = ?;`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status:'ok',
        })

    })
}
exports.getDriverID = (req, res) => {
    const sql1 = `select DriverID from driver where is_work=0`
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

            return {label: obj.DriverID, value: obj.DriverID}
        })
        res.send(newResults)

    })
}
