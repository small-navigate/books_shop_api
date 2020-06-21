const mysql = require('mysql')
const {
  password
} = require('../modules/secret')

const options = {
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
  database: 'book'
}

const db = mysql.createConnection(options)
db.connect()

module.exports = {
  db
}