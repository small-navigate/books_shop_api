const db = require('./DAO')


// like 数据
function homeLike(callback) {
  const str = `SELECT id,bookname,author,viewcount,bookimg FROM book WHERE  book.pubcompany !=''  ORDER BY RAND() LIMIT 10;`
  db.query(str, (err, results) => {
    let dataStr = JSON.stringify(results)
    callback(JSON.parse(dataStr))
  })
}

// cataory
function homeCataory(callback) {
  const str = 'select * from cataory'

  db.query(str, (err, results) => {
    let dataStr = JSON.stringify(results)
    homeCataoryList(JSON.parse(dataStr), (cataoryList) => {
      callback(cataoryList, JSON.parse(dataStr))
    })
  })
}
// cataoryList
function homeCataoryList(data, callback) {
  const arr = []
  data.forEach(v => {
    const str = `
      SELECT id,bookname,author,viewcount,bookimg FROM book WHERE (book.cataory = "${v.cataory}" and book.pubcompany !='')  ORDER BY RAND() LIMIT 10;
    `
    db.query(str, (err, results) => {
      let dataStr = JSON.stringify(results)
      arr.push(JSON.parse(dataStr))
      if (arr.length == 8) {
        callback(arr)
      }
    })
  })
}


module.exports = {
  homeLike,
  homeCataory
}