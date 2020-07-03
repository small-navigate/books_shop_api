const {
  bookquery,
  getBookItem,
  rander
} = require('../DAO/book_item.js')


// 返回页面商品信息
function bookItem(id, req, res) {
  bookquery(id, (data, bookList) => {
    data.forEach(vlaue => {

      if (vlaue.viewcount < 2000) {
        vlaue.oldPrice = 119 + '.00'
        vlaue.newPrice = 99 + '.80'
      } else if (vlaue.viewcount < 10000) {
        vlaue.oldPrice = parseInt(vlaue.viewcount / 100) + '.00'
        vlaue.newPrice = parseInt(vlaue.viewcount / 100 * 0.68) + '.88'
      } else {
        vlaue.oldPrice = 29 + '.00'
        vlaue.oldPrice = 16 + '.88'
      }
    })
    bookList.forEach(vlaue => {

      if (vlaue.viewcount < 2000) {
        vlaue.oldPrice = 119 + '.00'
        vlaue.newPrice = 99 + '.80'
      } else if (vlaue.viewcount < 10000) {
        vlaue.oldPrice = parseInt(vlaue.viewcount / 100) + '.00'
        vlaue.newPrice = parseInt(vlaue.viewcount / 100 * 0.68) + '.88'
      } else {
        vlaue.oldPrice = 29 + '.00'
        vlaue.oldPrice = 16 + '.88'
      }
    })

    res.json({
      message: {
        data,
        bookList
      },
      meta: {
        msg: '获取数据成功',
        status: 200
      }
    })
  })
}

// 返回购物车商品信息
function cartBookItem(id, req, res) {
  getBookItem(id, data => {
    data.forEach(vlaue => {

      if (vlaue.viewcount < 2000) {
        vlaue.oldPrice = 119 + '.00'
        vlaue.newPrice = 99 + '.80'
      } else if (vlaue.viewcount < 10000) {
        vlaue.oldPrice = parseInt(vlaue.viewcount / 100) + '.00'
        vlaue.newPrice = parseInt(vlaue.viewcount / 100 * 0.68) + '.88'
      } else {
        vlaue.oldPrice = 29 + '.00'
        vlaue.oldPrice = 16 + '.88'
      }
    })
    res.json({
      message: {
        data
      },
      meta: {
        msg: '获取数据成功',
        status: 200
      }
    })
  })
}

function bookReander(req, res) {
  rander(data => {
    data.forEach(vlaue => {

      if (vlaue.viewcount < 2000) {
        vlaue.oldPrice = 119 + '.00'
        vlaue.newPrice = 99 + '.80'
      } else if (vlaue.viewcount < 10000) {
        vlaue.oldPrice = parseInt(vlaue.viewcount / 100) + '.00'
        vlaue.newPrice = parseInt(vlaue.viewcount / 100 * 0.68) + '.88'
      } else {
        vlaue.oldPrice = 29 + '.00'
        vlaue.oldPrice = 16 + '.88'
      }
    })
    res.json({
      message: {
        data
      },
      meta: {
        msg: '获取数据成功',
        status: 200
      }
    })
  })
}

module.exports = {
  bookItem,
  cartBookItem,
  bookReander
}