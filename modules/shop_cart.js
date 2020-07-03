const {
  putCartItem,
  delCartItem,
  addCartItem
} = require('../DAO/shop_cart')

// 修改购物车商品数量
function putCart(id, num, req, res) {
  putCartItem(id, num)
  res.json({
    message: {},
    meta: {
      msg: '修改数据成功',
      status: 200
    }
  })
}

// 删除购物车商品
function delCart(id, req, res) {
  delCartItem(id)
  res.json({
    message: {},
    meta: {
      msg: '删除数据成功',
      status: 200
    }
  })
}

// 增加购物车商品
function addCart(id, bookId, req, res) {
  addCartItem(id, bookId, data => {
    res.json({
      message: {
        data
      },
      meta: {
        msg: '增加数据成功',
        status: 200
      }
    })
  })

}

module.exports = {
  putCart,
  delCart,
  addCart
}