// 购买数字专辑

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    business: 'Album',
    paymentMethod: query.payment,
    digitalResources: JSON.stringify([
      {
        business: 'Album',
        resourceID: query.id,
        quantity: query.quantity,
      },
    ]),
    from: 'web',
  }
  return request(
    'POST',
    `https://music.163.com/api/ordering/web/digital`,
    data,
    createOption(query, 'weapi'),
  )
}
