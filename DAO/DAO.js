const mysql = require('mysql')

const options = {
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
  database: 'book'
}

// 连接数据 并且在数据库连接超时关闭后重连
function db() {


  let connection = mysql.createConnection(options)
  connection.connect()

  connection.on('error', err => {
    console.log('Re-connecting lost connection: ');
    connection = mysql.createConnection(options)

  })

  return connection

}

module.exports = db()