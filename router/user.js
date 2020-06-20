const express = require('express')
const router = express.Router()
const {
  registerFindUser,
  loginFindUser
} = require('../modules/user')

router.all('/api/*', (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

router.post('/api/login', (req, res, next) => {
  loginFindUser(req, res, req.body)
})

router.post('/api/register', (req, res, next) => {
  registerFindUser(req, res, req.body)

})

module.exports = router