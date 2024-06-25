// MV链接

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    r: query.r || 1080,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/song/enhance/play/mv/url`,
    data,
    createOption(query, 'weapi'),
  )
}
