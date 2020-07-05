const db = require('./DAO')

// 搜索
function search(query, callback) {
  const str = `select id,bookname from book where bookname like '%${query}%' LIMIT 10`
  db.query(str, (err, results) => {
    callback(JSON.parse(JSON.stringify(results)))
  })
}


module.exports = search