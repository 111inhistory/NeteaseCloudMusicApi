// 云贝推歌历史记录

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    page: JSON.stringify({
      size: query.size || 20,
      cursor: query.cursor || '',
    }),
  }
  return request(
    'POST',
    `https://music.163.com/weapi/yunbei/rcmd/song/history/list`,
    data,
    createOption(query, 'weapi'),
  )
}
