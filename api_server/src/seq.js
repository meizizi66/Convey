const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

const seq = new Sequelize('my_db_01', 'root', '331588', conf)

// 测试连接
seq.authenticate().then(() => {
     console.log('ok')
}).catch(() => {
     console.log('err')
})

module.exports = seq
