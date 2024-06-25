// 歌手粉丝

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/artist/fans/get`,
    data,
    createOption(query, 'weapi'),
  )
}
