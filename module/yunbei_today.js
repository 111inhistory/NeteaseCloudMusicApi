const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/point/today/get`,
    data,
    createOption(query, 'weapi'),
  )
}
