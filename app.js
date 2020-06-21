const express = require('express')
const mysql = require('mysql')
const app = express()
const router = require('./router/user')
const {
  routerHome
} = require('./router/home')


app.use(express.json())
app.use('/', router)
app.use('/', routerHome)
app.use(express.static('public'))

app.listen(3000)