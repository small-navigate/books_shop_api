const {
  db
} = require('./DAO')
const {
  each
} = require('../modules/home')

function homeSwiper(callback) {
  const str = `select * from home_swiper`
  db.query(str, (err, results) => {
    callback(results)
  })
}

function homeSwiperCataory(callback) {
  const str = `select * from cataory`
  db.query(str, (err, results) => {

    const arr = []
    for (let i = 0; i < results.length; i++) {
      homeCataoryList(results[i], data => {
        arr.push(data)
        if (i == results.length - 1) {
          callback(results, arr)
        }
      })
    }
  })
}

function homeCataoryList(data, callback) {
  const str = `select id,bookname,bookimg from book where book.cataory = "${data.cataory} "LIMIT 8`
  db.query(str, (err, results) => {
    let dataStr = JSON.stringify(results)
    callback(JSON.parse(dataStr))
  })
}

module.exports = {
  homeSwiper,
  homeSwiperCataory
}