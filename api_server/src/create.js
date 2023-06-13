const { User, Blog } = require('./model')

// 如果前面写的报错的，也会执行后面的
!(async function () {
    // 创建用户
    const person = await User.create({
        userName: 'lisi',
        password: '123',
        nickName: '李四'
    })
    console.log('person: ', person.dataValues)
})()
