const db = require('./DAO')
const {
  password
} = require('../modules/secret')
// 查找用户
function findUser(data, callback) {
  const str = `select * from user where username = "${data.username}"`
  db.query(str, (err, results) => {
    callback(results)
  })
}

// 注册业务
function registerUser(data, callback) {
  const pass = password(data.password)
  const str = `insert into user (username,password) values("${data.username}","${pass}")`
  db.query(str, (err, results) => {
    callback(data)
  })
}
// 刷新浏览器查找用户
function findUserName(user, callback) {
  const str = `select * from user where username = "${user}"`
  db.query(str, (err, results) => {
    callback(JSON.parse(JSON.stringify(results)))
  })
}

// 查找用户购物车信息
function findCart(id, callback) {
  const str = `select * from shopcat where userid = "${id}"`
  db.query(str, (err, results) => {
    if (results.length === 0) {
      callback({
        id: null,
        userid: null,
        bookid: null,
        num: null
      })
    } else {
      callback(JSON.parse(JSON.stringify(results)))
    }

  })
}

module.exports = {
  findUser,
  registerUser,
  findUserName,
  findCart
}