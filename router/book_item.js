const express = require('express')
const routerBookItem = express.Router()
const {
  bookItem
} = require('../modules/book_item.js')


routerBookItem.get('/api/bookItem/:id', (req, res) => {
  const id = req.params.id
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/bookItem/${id}`)
  console.log('  ')
  console.log('_____________________________________________')
  bookItem(id, req, res)
})

module.exports = routerBookItem