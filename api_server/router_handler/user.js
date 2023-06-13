const { send } = require('express/lib/response')
const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.regUser=(req,res)=>{
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    //return res.send({ status: 1, message: '用户名或密码不能为空！' })
    return res.cc('用户名或密码不能为空！')
    }
  const sql1 = `select * from ev_users where username=?`
  db.query(sql1, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
    //return res.send({ status: 1, message: err.message })
    return res.cc(err.message)
    }
    // 用户名被占用
    if (results.length > 0) {
    //return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    return res.cc('用户名被占用，请更换其他用户名！')
    }
    // TODO: 用户名可用，继续后续流程...
    })
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    const sql2 = 'insert into ev_users set ?'
    db.query(sql2, { username: userinfo.username, password: userinfo.password }, function
      (err, results) {
      // 执行 SQL 语句失败
      if (err) //return res.send({ status: 1, message: err.message })
      return res.cc(err.message)
      // SQL 语句执行成功，但影响行数不为 1
      if (results.affectedRows !== 1) {
      //return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      return res.cc('注册用户失败，请稍后再试！')
      }
      // 注册成功
      //res.send({ status: 0, message: '注册成功！' })
      res.cc('注册成功！')
      })
      
}
exports.login = (req, res) => {
    const userinfo = req.body
    const sql3 = `select * from ev_users where username=?`
    db.query(sql3, userinfo.username, function (err, results) {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是查询到数据条数不等于 1
      if (results.length !== 1) return res.cc('登录失败！')
      // 拿着用户输入的密码,和数据库中存储的密码进行对比
      const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
      // 如果对比的结果等于 false, 则证明用户输入的密码错误
      if (!compareResult) {
      return res.cc('登录失败！')
      }
      const user = { ...results[0], password: '', user_pic: '' }
      // 导入配置文件
      const config = require('../config')
      // 生成 Token 字符串
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: '1h', 
      })
      res.send({
        status: 'ok',
        message: '登录成功！',
        // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
        token: tokenStr,
        origin:req.body,
        })
      })
    }