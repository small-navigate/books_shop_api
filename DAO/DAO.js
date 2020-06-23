const mysql = require('mysql')

// 连接数据 并且在数据库连接超时关闭后重连
function db() {
  const options = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '123456',
    database: 'book'
  }

  const connection = mysql.createConnection(options)
  connection.connect((err) => {
    if (err) {
      setTimeout('db()', 2000)
    }
  })

  connection.on('error', function (err) {
    logger.error('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      logger.error('db error执行重连:' + err.message);
      db();
    } else {
      throw err
    }
  })
  return connection
}

module.exports = db()