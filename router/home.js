const express = require('express')
const router = express.Router()
const {
  home_swiper
} = require('../modules/home')

const routerHome = router.get('/api/home/swiper', (req, res, next) => {
  home_swiper(req, res)
})

module.exports = {
  routerHome
}