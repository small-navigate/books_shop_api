const express = require('express')
const router = express.Router()
const {
  registerFindUser,
  loginFindUser,
  findUserId
} = require('../modules/user')



router.post('/api/login', (req, res, next) => {
  console.log('  ')
  console.log('--------------------->http://localhost:3000/api/login')
  console.log('  ')
  console.log('_____________________________________________')
  loginFindUser(req, res, req.body)
})

router.post('/api/register', (req, res, next) => {
  console.log('  ')
  console.log('---------------------http://localhost:3000/api/register')
  console.log('  ')
  console.log('_____________________________________________')
  registerFindUser(req, res, req.body)
})

router.get('/api/finduser', (req, res, next) => {
  const token = String(req.headers.authorization).split(' ').pop()
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/finduser/`)
  console.log('  ')
  console.log('_____________________________________________')
  findUserId(req, res, token)
})



module.exports = router