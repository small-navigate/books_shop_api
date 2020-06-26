const {
  classificationList,
  getCataoryList
} = require('../DAO/classification')

// 获取数据
function classificationGet(id, count, req, res) {
  classificationList(id, count, (data) => {
    if (data.length == 0) {
      res.json({
        message: {},
        meta: {
          msg: '没有更多数据了',
          status: 201
        }
      })

    } else {
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
    }
  })
}
// 获取分类
function getCataory(req, res) {
  getCataoryList(data => {
    console.log(JSON.parse(JSON.stringify(data)));
    res.json({
      message: {
        data: JSON.parse(JSON.stringify(data))
      },
      meta: {
        msg: '获取数据成功',
        status: 200
      }
    })
  })
}

module.exports = {
  classificationGet,
  getCataory
}