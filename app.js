const express = require('express')
const mysql = require('mysql')
const app = express()
const router = require('./router/user')


app.use(express.json())
app.use(router)
app.use(express.static('public'))

app.listen(3000)