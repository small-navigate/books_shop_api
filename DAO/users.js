const {
  db
} = require('./DAO')
// 查找用户
function findUser(data, callback) {
  const str = `select * from user where username = "${data.username}"`
  db.query(str, (err, results) => {
    console.log('find', results)
    callback(results)
  })
}

// 注册业务
function registerUser(data, callback) {
  const pass = password(data.password)
  const str = `insert into user (username,password) values("${data.username}","${pass}")`
  db.query(str, (err, results) => {
    console.log('insert', results)
    callback(data)
  })
}
module.exports = {
  findUser,
  registerUser
}