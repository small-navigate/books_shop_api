const express = require('express')
const app = express()
const router = require('./router/user')
const routerHome = require('./router/home')
const routerClassification = require('./router/classification')
const routerDetails = require('./router/details')
const routerBookItem = require('./router/book_item')
const routerCart = require('./router/shop_cart')
const routerSearch = require('./router/search')

// 设置跨域和相应数据格式
app.all('/api/*', function (req, res, next) {


  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')

  // res.header("Access-Control-Allow-Origin","*");//允许的请求源
  // res.header("Access-Control-Allow-Methods","*");//允许的请求方法
  // res.header("Access-Control-Allow-Headers","*");//允许的请求头


  next()
})


app.use(express.json())
app.use(router)
app.use(routerHome)
app.use(routerClassification)
app.use(routerDetails)
app.use(routerBookItem)
app.use(routerCart)
app.use(routerSearch)
app.use(express.static('public'))

app.listen(3000)