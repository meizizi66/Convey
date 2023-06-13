// 导入 express 模块
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const userRouter = require('./router/user')
const joi = require('joi')
const config = require('./config')
const expressJWT = require('express-jwt')
const userinfoRouter = require('./router/userinfo') 
const carinfoRouter = require('./router/car') 
const ticketinfoRouter = require('./router/ticket')
const routeinfoRouter = require('./router/route')
const seatinfoRouter = require('./router/seat')
// 创建 express 的服务器实例
//app.use(cors())
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));
//app.use(express.urlencoded({extended:false}));

// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
    res.send({
    // 状态
    status,
    // 状态描述，判断 err 是 错误对象 还是 字符串
    message: err instanceof Error ? err.message : err,
    })
    }
    next()
    })
//[/^\/api/pub\//]
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path:'/api/pub/login'  }))
app.use(function (err, req, res, next) {
        // 数据验证失败
        if (err instanceof joi.ValidationError) return res.cc(err)
        if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
        // 未知错误
        res.cc(err)
        })
app.use('/api/pub', userRouter)
app.use('/api/auth',userinfoRouter)
app.use('/api/priv',carinfoRouter)
app.use('/api/my',ticketinfoRouter)
app.use('/api/mine',routeinfoRouter)
app.use('/api/me',seatinfoRouter)
app.listen(3007, function () {
console.log('api server running at http://127.0.0.1:3007')
})