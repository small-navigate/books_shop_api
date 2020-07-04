const express = require('express')
const router = express.Router()
const {
  registerFindUser,
  loginFindUser,
  findUserId,
  putUser,
  putUserAva
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

router.put('/api/putuser', (req, res, next) => {
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/putuser/`)
  console.log('  ')
  console.log('_____________________________________________')
  putUser(req.body.id, req.body.value, req, res)
})

// 上传头像
router.post('/avatar/uploader', (req, res) => {
  console.log('  ')
  console.log(`---------------------http://localhost:3000/avatar/uploader/`)
  console.log('  ')
  console.log('_____________________________________________')
  putUserAva(req, res)
})

module.exports = router