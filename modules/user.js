const jwt = require('jsonwebtoken')
const SECRET = 'abc'


const {
  findUser,
  registerUser,
  findUserName,
  findCart
} = require('../DAO/users')

const {
  isPasswordValid
} = require('./secret')

// 注册 寻找是否存在用户
function registerFindUser(req, res, data) {
  findUser(data, (results) => {
    if (results.length == 0) {
      registerUser(data, (data) => {
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
    const user = JSON.parse(JSON.stringify(results))[0]

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
      if (is) {
        const token = jwt.sign({
          id: String(results[0].username)
        }, SECRET) // 签名
        findCart(user.id, mes => {
          user.info = mes
          res.json({
            message: [{
              user
            }],
            meta: {
              msg: "登录成功",
              status: 200
            },
            token
          })
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

// 刷新查找用户
function findUserId(req, res, token) {
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.json({
        message: data,
        meta: {
          msg: "错误",
          status: 401
        }
      })
    } else {
      findUserName(decoded.id, results => {
        const data = results[0]
        findCart(data.id, result => {
          result.forEach(v => {
            v.status = false
          })
          console.log(result)
          data.info = result
          res.json({
            message: [
              data
            ],
            meta: {
              msg: "成功",
              status: 200
            }
          })
        })

      })
    }
  })


}

module.exports = {
  registerFindUser,
  loginFindUser,
  findUserId
}