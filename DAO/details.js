const db = require('./DAO')
const {
  query
} = require('express')

function tagDetails(callback) {
  const str = 'select * from tag'
  db.query(str, (err, results) => {
    callback(JSON.parse(JSON.stringify(results)))
  })
}


function detailsTagList(queryInfo, callback) {
  console.log(queryInfo);
  const strTag = `select * from tag where tag.id = "${queryInfo.tagId}"`
  db.query(strTag, (err, resultsTag) => {
    const tag = JSON.parse(JSON.stringify(resultsTag))[0].tag

    const strTagTotal = `select id,bookname,author,viewcount,bookimg from book where book.tag like "%${tag}%"`
    db.query(strTagTotal, (err, resultsTotal) => {
      const Total = JSON.parse(JSON.stringify(resultsTotal)).length
      const strTagList = `SELECT id,bookname,author,viewcount,bookimg FROM book WHERE book.tag LIKE "%${tag}%" LIMIT ${(queryInfo.currentPage - 1) * queryInfo.pageSize}, ${queryInfo.pageSize}`
      console.log((queryInfo.currentPage - 1) * queryInfo.pageSize)
      db.query(strTagList, (err, resultsList) => {
        const list = JSON.parse(JSON.stringify(resultsList))

        callback(Total, list)
      })
    })
  })
}



module.exports = {
  tagDetails,
  detailsTagList
}