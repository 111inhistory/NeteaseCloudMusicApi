// MV排行榜

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    area: query.area || '',
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/mv/toplist`,
    data,
    createOption(query, 'weapi'),
  )
}
