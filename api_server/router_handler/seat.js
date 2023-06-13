const db = require('../db/index');


exports.getSeat = (req, res) => {
    const RouteID = req.query.RouteID;
    const SeatID = req.query.SeatID;
    if (RouteID&&SeatID) {
        const sql1 = `select  * from seat where RouteID = ? and SeatID = ?`
        db.query(sql1, [RouteID,SeatID], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            res.send({
                data: results,
                success: true,
            })

        })
    }
    else {
        const sql0 = `select  * from seat`
        db.query(sql0, [], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            res.send({
                data: results,
                success: true,
            })

        })
    }

}
exports.addSeat = (req, res) => {
    const RouteID = req.body.RouteID;
    const SeatID = req.body.SeatID;
    const SeatStatus = req.body.SeatStatus;
    const sql2 = `insert into seat values(?,?,?);`
    db.query(sql2, [RouteID , SeatID, SeatStatus], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updateSeat = (req, res) => {
    const RouteID = req.body.RouteID;
    const SeatID = req.body.SeatID;
    const SeatStatus = req.body.SeatStatus;

    const sql2 = `UPDATE seat SET RouteID=?,SeatID=?,SeatStatus=? where RouteID = ? and SeatID = ?;`
    db.query(sql2, [RouteID, SeatID, SeatStatus, RouteID, SeatID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificSeat = (req, res) => {
    const RouteID = req.query.RouteID;
    const SeatID = req.query.SeatID;
    const sql1 = `select  * from seat where RouteID = ? and SeatID = ?`
    db.query(sql1, [RouteID,SeatID], function (err, results) {
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
exports.deleteSeat = (req, res) => {
    const RouteID = req.query.RouteID;
    const SeatID = req.query.SeatID;
    const sql1 = `delete from seat where RouteID = ? and SeatID = ?;`
    db.query(sql1, [RouteID,SeatID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status:'ok',
        })

    })
}