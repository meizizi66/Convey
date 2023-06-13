const db = require('../db/index');


exports.getCars = (req, res) => {
    const id = req.query.CarNUM;
    const CarTYPE = req.query.CarTYPE
    if (id) {
        const sql1 = `select  * from car where CarNUM = ?`
        db.query(sql1, [id], function (err, results) {
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
    if (CarTYPE) {
        const sql1 = `select  * from car where CarTYPE = ?`
        db.query(sql1, [CarTYPE], function (err, results) {
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
        const sql0 = `select  * from car`
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

exports.addCars = (req, res) => {
    const CarNUM = req.body.CarNUM;
    const MaxNUM = req.body.MaxNUM;
    const CarTYPE = req.body.CarTYPE;
    const sql2 = `insert into car values(?,?,?);`
    db.query(sql2, [CarNUM, CarTYPE, MaxNUM], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updateCar = (req, res) => {
    const CarNUM = req.body.CarNUM;
    const MaxNUM = req.body.MaxNUM;
    const CarTYPE = req.body.CarTYPE;

    const sql2 = `UPDATE car SET CarNUM=?,CarTYPE=?,MaxNUM=? WHERE CarNUM = ?;`
    db.query(sql2, [CarNUM, CarTYPE, MaxNUM, CarNUM], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificCar = (req, res) => {
    const id = req.query.CarNUM;
    const sql1 = `select  * from car where CarNUM = ?`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            data: results,
            success: true,
            status: 'ok',
        })

    })
}
exports.deleteCar = (req, res) => {
    const id = req.query.CarNUM;
    const sql1 = `delete from car where CarNUM = ?;`
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
exports.getPass = (req, res) => {
    const id = req.query.PassID;
    const PassNAME = req.query.PassNAME;
    if (id) {
        const sql1 = `select  * from passenger where PassID = ?`
        db.query(sql1, [id], function (err, results) {
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
    if (PassNAME) {
        const sql1 = `select  * from passenger where PassNAME = ?`
        db.query(sql1, [PassNAME], function (err, results) {
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
        const sql0 = `select  * from passenger`
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

exports.addPass = (req, res) => {
    const PassID = req.body.PassID;
    const PassNAME = req.body.PassNAME;
    const PassSex = req.body.PassSex;
    const PassIDCard = req.body.PassIDCard;
    const PassPhone = req.body.PassPhone;
    const sql2 = `insert into passenger values(?,?,?,?,?);`
    db.query(sql2, [PassID, PassNAME, PassSex, PassIDCard, PassPhone], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.updatePass = (req, res) => {
    const PassID = req.body.PassID;
    const PassNAME = req.body.PassNAME;
    const PassSex = req.body.PassSex;
    const PassIDCard = req.body.PassIDCard;
    const PassPhone = req.body.PassPhone;

    const sql2 = `UPDATE passenger SET PassID=?,PassNAME=?,PassSex=?,PassIDCard=?,PassPhone=? WHERE PassID = ?;`
    db.query(sql2, [PassID, PassNAME, PassSex, PassIDCard, PassPhone, PassID], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            status: 'ok',
        });

    })
}
exports.getSpecificPass = (req, res) => {
    const id = req.query.PassID;
    const sql1 = `select  * from passenger where PassID = ?`
    db.query(sql1, [id], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        res.send({
            data: results,
            success: true,
            status: 'ok',
        })

    })
}

exports.getPassID = (req, res) => {
    const sql0 = `select PassID from passenger`
    db.query(sql0, [], function (err, results) {
        if (err) {
            //return res.send({ status: 1, message: err.message })
            return res.cc(err.message)
        }
        const newResults = results.map((obj)=>{

            return {label: obj.PassID, value: obj.PassID}
        })
        res.send(newResults)

    })

}
exports.deletePass = (req, res) => {
    const id = req.query.PassID;
    const sql1 = `delete from passenger where PassID = ?;`
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

exports.getCarID = (req, res) => {
    const sql1 = `select CarNUM from car `
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

            return {label: obj.CarNUM, value: obj.CarNUM}
        })
        res.send(newResults)

    })
}
