const express = require('express')
const routerDetails = express.Router()
const {
  tag,
  tagList
} = require('../modules/details')


routerDetails.get('/api/details', (req, res) => {
  console.log('  ')
  console.log('---------------------http://localhost:3000/api/details')
  console.log('  ')
  console.log('_____________________________________________')
  tag(req, res)
})

routerDetails.get('/api/detailsTag', (req, res) => {


  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/detailsTag`)
  console.log('  ')
  console.log('_____________________________________________')
  tagList(req.query, req, res)
})



module.exports = routerDetails