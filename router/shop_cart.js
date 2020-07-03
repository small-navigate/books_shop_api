const express = require('express')
const routerCart = express.Router()
const {
  putCart,
  delCart,
  addCart
} = require('../modules/shop_cart')



routerCart.put('/api/putnum', (req, res) => {
  console.log('  ')
  console.log('---------------------http://localhost:3000/api/putnum')
  console.log('  ')
  console.log('_____________________________________________')
  putCart(req.body.id, req.body.value, req, res)
})

routerCart.delete('/api/delitem/:id', (req, res) => {
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/delitem/${req.params.id}`)
  console.log('  ')
  console.log('_____________________________________________')
  delCart(req.params.id, req, res)
})

routerCart.post('/api/additem', (req, res) => {
  console.log(req.body)
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/additem`)
  console.log('  ')
  console.log('_____________________________________________')
  addCart(req.body.userid, req.body.bookid, req, res)
})
module.exports = routerCart