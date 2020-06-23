const bcrypt = require('bcrypt')

// 加密
function password(password) {
  // 生成salt的迭代次数
  const saltRounds = 10
  // 随机生成salt
  const salt = bcrypt.genSaltSync(saltRounds)
  // 获取hash值
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

//解密
function isPasswordValid(newVal, oldVal) {
  // console.log(oldVal, newVal)
  const is = bcrypt.compareSync(newVal, oldVal)
  // console.log(is)
  return is
}


module.exports = {
  password,
  isPasswordValid
}