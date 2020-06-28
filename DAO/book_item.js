const db = require('./DAO')

function bookquery(id, callback) {
  const str = `select id,bookname,author,viewcount,bookimg,tag,pubcompany,cataory,score from book WHERE book.id = "${id}"`
  db.query(str, (err, result) => {
    const book = JSON.parse(JSON.stringify(result))
    const tag = book[0].tag.split(' ')

    const strbook = `
    select id,bookname,author,viewcount,bookimg from book 
    where book.tag regexp "${tag[0]}|${tag[1]}" ORDER BY RAND() LIMIT 10
    `
    db.query(strbook, (err, results) => {
      callback(book, JSON.parse(JSON.stringify(results)))
    })
  })
}



module.exports = {
  bookquery
}