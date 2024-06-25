// 用户创建的电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/get/byuser`,
    data,
    createOption(query, 'weapi'),
  )
}
