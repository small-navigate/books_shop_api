const db = require('./DAO')
// 根据Id 查询数据
function classificationList(id, count, callback) {


  const strId = `SELECT * FROM cataory WHERE cataory.id = "${id}";`
  db.query(strId, (err, results) => {

    const params = JSON.parse(JSON.stringify(results))[0].cataory
    console.log(params)
    const query = 15 * count - 15
    const strList = `SELECT id,bookname,author,viewcount,bookimg FROM book WHERE book.cataory = "${params}" LIMIT ${query}, 15;`
    db.query(strList, (err, results) => {
      console.log(JSON.parse(JSON.stringify(results)).length);
      callback(JSON.parse(JSON.stringify(results)))
    })
  })
}

// 获取分类
function getCataoryList(callback) {
  const str = 'select * from cataory'
  db.query(str, (err, results) => {
    callback(results)
  })
}


module.exports = {
  classificationList,
  getCataoryList
}