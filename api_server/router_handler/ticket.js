const db = require('../db/index');
var moment = require('moment')

exports.getTicket = (req, res) => {
    const id = req.query.TicketID;
    const PassID = req.query.PassID;
    if (id) {
        const sql1 = `select  * from ticket where TicketID = ?`
        db.query(sql1, [id], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj)=>{
                const newtime = moment(obj.BuyTime).format('YYYY-MM-DD HH:mm:ss')
                return {...obj,BuyTime:newtime}
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    if (PassID) {
        const sql1 = `select  * from ticket where PassID = ?`
        db.query(sql1, [PassID], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj)=>{
                const newtime = moment(obj.BuyTime).format('YYYY-MM-DD HH:mm:ss')
                return {...obj,BuyTime:newtime}
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    if (id&&PassID) {
        const sql1 = `select  * from ticket where PassID = ? and id = ?`
        db.query(sql1, [PassID,id], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj)=>{
                const newtime = moment(obj.BuyTime).format('YYYY-MM-DD HH:mm:ss')
                return {...obj,BuyTime:newtime}
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }
    else {
        const sql0 = `select  * from ticket`
        db.query(sql0, [], function (err, results) {
            if (err) {
                //return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            const newResults = results.map((obj)=>{
                const newtime = moment(obj.BuyTime).format('YYYY-MM-DD HH:mm:ss')
                return {...obj,BuyTime:newtime}
            })
            res.send({
                data: newResults,
                success: true,
            })

        })
    }

}

exports.addTicket = (req, res) => {
    const TicketID = req.body.TicketID;
    const RouteID = req.body.RouteID;
    const PassID = req.body.PassID;
    const BuyTime = req.body.BuyTime;
    const TicketStatus = req.body.TicketStatus;
    const SeatID= req.body.SeatID;
    console.log(req.body);
    const sql2 = `insert into ticket values(?,?,?,?,?,?);`
    db.query(sql2, [TicketID, RouteID, PassID, BuyTime, TicketStatus, SeatID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updateTicket = (req, res) => {
    const TicketID = req.body.TicketID;
    const RouteID = req.body.RouteID;
    const PassID = req.body.PassID;
    const BuyTime = req.body.BuyTime;
    const TicketStatus = req.body.TicketStatus;
    const SeatID= req.body.SeatID;

    const sql2 = `UPDATE ticket SET TicketID=?,RouteID=?,PassID=?,BuyTime=?,TicketStatus=?,SeatID=? WHERE TicketID = ?;`
    db.query(sql2, [TicketID, RouteID, PassID, BuyTime, TicketStatus, SeatID, TicketID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificTicket = (req, res) => {
    const id = req.query.TicketID;
    const sql1 = `select  * from ticket where TicketID = ?`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        const newResults = results.map((obj)=>{
            const newtime = moment(obj.BuyTime).format('YYYY-MM-DD HH:mm:ss')
            return {...obj,BuyTime:newtime}
        })
        res.send({
            data: newResults,
            success: true,
            status:'ok',
        })

    })
}
exports.deleteTicket = (req, res) => {
    const id = req.query.TicketID;
    const sql1 = `delete from ticket where TicketID = ?;`
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