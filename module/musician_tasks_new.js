// 获取音乐人任务

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/nmusician/workbench/mission/stage/list `,
    data,
    createOption(query, 'weapi'),
  )
}
