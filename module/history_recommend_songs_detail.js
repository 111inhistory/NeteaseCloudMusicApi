// 历史每日推荐歌曲详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'ios'
  const data = {
    date: query.date || '',
  }
  return request(
    'POST',
    `https://music.163.com/api/discovery/recommend/songs/history/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
