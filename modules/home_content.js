const {
  homeLike,
  homeCataory
} = require('../DAO/home_content')



// home_center 数据
function home_center(req, res) {
  homeLike((homeLikeList) => {
    homeLikeList.forEach(vlaue => {

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
    homeCataory((homeCataoryList, data) => {
      // console.log(data)
      homeCataoryList.forEach(v => {
        v.forEach(vlaue => {
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
          // delete vlaue.viewcount
        })
      })
      // console.log(homeCataoryList)
      data.forEach((v, i) => {
        v.list = homeCataoryList[i]
      })
      res.json({
        message: {
          homeLikeList,
          homeCataoryList: data
        },
        meta: {
          msg: '获取数据成功',
          status: 200
        }
      })
    })
  })
}
module.exports = home_center