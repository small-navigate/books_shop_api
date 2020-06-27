const {
  tagDetails,
  detailsTagList
} = require('../DAO/details')

function tag(req, res) {
  tagDetails(data => {
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

function tagList(id, req, res) {
  detailsTagList(id, (total, data) => {
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
        data,
        total
      },
      meta: {
        msg: '获取数据成功',
        status: 200
      }
    })
  })
}
module.exports = {
  tag,
  tagList
}