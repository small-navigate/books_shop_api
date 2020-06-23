const express = require('express')
const routerHome = express.Router()
const home_swiper = require('../modules/home_swiper')
const home_content = require('../modules/home_content')


routerHome.get('/api/home/swiper', (req, res, next) => {
  console.log('  ')
  console.log('---------------------localhost:3000/api/home/swiper')
  console.log('  ')
  console.log('_____________________________________________')
  home_swiper(req, res)
})

routerHome.get('/api/home/content', (req, res, next) => {
  console.log('  ')
  console.log('---------------------localhost:3000/api/home/content')
  console.log('  ')
  console.log('_____________________________________________')
  home_content(req, res)
})

module.exports = routerHome