const express = require('express')
const app = express()
const router = require('./router/user')
const routerHome = require('./router/home')
const routerClassification = require('./router/classification')



app.use(express.json())
app.use(router)
app.use(routerHome)
app.use(routerClassification)
app.use(express.static('public'))

app.listen(3000)