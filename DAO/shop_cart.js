const db = require('./DAO')

// 修改购物车数量
function putCartItem(id, val) {
  const str = `UPDATE shopcat SET num = '${val}' WHERE id = ${id}`
  db.query(str)
}

// 删除购物车商品
function delCartItem(id) {
  const str = `DELETE FROM shopcat WHERE id=${id};`
  db.query(str)
}
// 增加购物车商品
function addCartItem(id, bookId, callback) {
  const str = `insert into shopcat (userid,bookid) values(${id},${bookId});`
  db.query(str, (err, results) => {
    callback(JSON.parse(JSON.stringify(results)).insertId)
  })
}

module.exports = {
  putCartItem,
  delCartItem,
  addCartItem
}