const {
  homeSwiper,
  homeSwiperCataory
} = require('../DAO/home_swiper.js')


// 发送 home_swiper 和 cataory
function home_swiper(req, res) {
  homeSwiper(data => {
    const swiperURL = JSON.parse(JSON.stringify(data))

    homeSwiperCataory((data, arr) => {
      const cataory = JSON.parse(JSON.stringify(data))
      for (let i = 0; i < cataory.length; i++) {
        cataory[i].cataoryList = arr[i]
      }
      // console.log(cataory)
      res.json({
        message: {
          cataory,
          swiperURL
        },
        meta: {
          msg: '获取数据成功',
          status: 200
        }
      })
    })
  })
}


module.exports = home_swiper