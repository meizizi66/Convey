const seq = require('./seq')

require('./model')

// 测试连接
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('err')
})

// 执行同步
// force 值为 true 时，表示每次执行这个方法都会先将表给删掉，再重新创建
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})
