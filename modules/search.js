const search = require('../DAO/search')

function searchInput(query, req, res) {
  search(query, data => {
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

module.exports = searchInput