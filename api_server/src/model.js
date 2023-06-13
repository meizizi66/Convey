// model.js
const Sequelize = require('sequelize')
// 数据库配置文件
const seq = require('./seq')

// 创建 users 模型
const User = seq.define('user', {
    // id 会自动创建，并设为主键、自增
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '用户名'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: Sequelize.STRING,
        comment: '昵称'
    }
    // 自动创建 createdAt updatedAt
})

module.exports = {
    User
}
