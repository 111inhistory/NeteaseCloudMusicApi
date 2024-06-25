// 歌手粉丝数量

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/artist/follow/count/get`,
    data,
    createOption(query, 'weapi'),
  )
}
