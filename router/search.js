const express = require('express')
const routerSearch = express.Router()
const searchInput = require('../modules/search')


routerSearch.get('/api/search', (req, res) => {
  console.log('  ')
  console.log('---------------------http://localhost:3000/api/search')
  console.log('  ')
  console.log('_____________________________________________')
  searchInput(req.query.query, req, res)
})

module.exports = routerSearch