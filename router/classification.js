const express = require('express')
const routerClassification = express.Router()
const {
  classificationGet,
  getCataory
} = require('../modules/classification')



routerClassification.get('/api/classification/:id/:count', (req, res) => {
  const id = req.params.id
  const count = req.params.count
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/classification/${id}/${count}`)
  console.log('  ')
  console.log('_____________________________________________')
  classificationGet(id, count, req, res)
})

routerClassification.get('/api/classification/cataory', (req, res) => {
  console.log('  ')
  console.log(`---------------------http://localhost:3000/api/classification/cataory`)
  console.log('  ')
  console.log('_____________________________________________')
  getCataory(req, res)
})

module.exports = routerClassification