const mysql = require('mysql')
const {
  password
} = require('../modules/secret')

const options = {
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
  database: 'dawashigou'
}

const db = mysql.createConnection(options)
db.connect()


// 查找用户
function findUser(data, callback) {
  const str = `select * from user where username = "${data.username}"`
  db.query(str, (err, results) => {
    console.log(results)
    callback(results)
  })
}

// 注册业务
function registerUser(data, callback) {
  const pass = password(data.password)
  const str = `insert into user (username,password) values("${data.username}","${pass}")`
  db.query(str, (err, results) => {
    console.log(results)
    callback(data)
  })
}



module.exports = {
  findUser,
  registerUser
}