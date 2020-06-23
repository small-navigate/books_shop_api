const express = require('express')
const app = express()
const routerHome = require('./router/home')
const router = require('./router/user')



app.use(express.json())
app.use(router)
app.use(routerHome)
app.use(express.static('public'))

app.listen(3000)