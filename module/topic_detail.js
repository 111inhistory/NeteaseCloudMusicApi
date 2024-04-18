module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  }
  return request('POST', `https://music.163.com/api/act/detail`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
