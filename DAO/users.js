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

function findUserName(user, callback) {
  const str = `select * from user where username = "${user}"`
  db.query(str, (err, results) => {
    callback(JSON.parse(JSON.stringify(results)))
  })
}

module.exports = {
  findUser,
  registerUser,
  findUserName
}