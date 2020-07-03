const express = require('express')
const routerBookItem = express.Router()
const {
  bookItem,
  cartBookItem,
  bookReander
} = require('../modules/book_item.js')


routerBookItem.get('/api/bookItem/:id', (req, res) => {
  const id = req.params.id
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/bookItem/${id}`)
  console.log('  ')
  console.log('_____________________________________________')
  bookItem(id, req, res)
})


routerBookItem.get('/api/getbook/:id', (req, res, next) => {
  const id = req.params.id
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/getbook/${id}`)
  console.log('  ')
  console.log('_____________________________________________')
  cartBookItem(id, req, res)
})

routerBookItem.get('/api/getrandom', (req, res, next) => {
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/getrandom`)
  console.log('  ')
  console.log('_____________________________________________')
  bookReander(req, res)
})


module.exports = routerBookItem