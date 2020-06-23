const jwt = require('jsonwebtoken')
const SECRET = 'abc'


const {
  findUser,
  registerUser
} = require('../DAO/users')

const {
  isPasswordValid
} = require('./secret')

// 注册 寻找是否存在用户
function registerFindUser(req, res, data) {
  findUser(data, (results) => {
    // console.log(results)
    if (results.length == 0) {
      registerUser(data, (data) => {
        // console.log(data)
        res.json({
          message: [],
          meta: {
            msg: "注册成功",
            status: 200
          }
        })
      })
    } else {
      res.json({
        message: [],
        meta: {
          msg: "用户已经存在",
          status: 401
        }
      })
    }
  })
}

// 登录用户
function loginFindUser(req, res, data) {
  findUser(data, (results) => {
    if (results.length == 0) {
      res.json({
        message: [],
        meta: {
          msg: "用户不存在",
          status: 401
        }
      })
    } else {
      const is = isPasswordValid(data.password, results[0].password)
      // console.log(is)
      if (is) {
        const token = jwt.sign({
          id: String(results[0].username)
        }, SECRET) // 签名
        res.json({
          message: [],
          meta: {
            msg: "登录成功",
            status: 200
          },
          token
        })
      } else {
        res.json({
          message: [],
          meta: {
            msg: "密码错误",
            status: 401
          }
        })
      }
    }
  })
}

module.exports = {
  registerFindUser,
  loginFindUser
}