
// URL组成:
// protocol :// hostname[:port] / path / [:parameters][?query]#hash
// 协议://主机名[:端口]/ 路径/[:参数] [?查询]#哈希值
// /https?\:\/\/ (\w+(?:\.\w+)+|localhost) (?:\:(\d{2,5}))? (\/(?:[^#?]+)?) (?:\?([^#]+))? (?:#{1}(.+))?/i


/**
 * 简单的 URL 解析函数
 * @param {string} url 
 */
function parse (url) {
  let reg =  /https?\:\/\/(\w+(?:\.\w+)+|localhost)(?:\:(\d{2,5}))?(\/(?:[^#?]+)?)(?:\?([^#]+))?(?:#{1}(.+))?/i
  let result = url.match(reg)
  console.log(result)
  return {
    href: result[0],
    protocol: result[0].match(/https?/)[0],
    host: result[1],
    port: result[2] || '80',
    pathname: result[3],
    search: result[4] || null,
    hash: result[5] || null,
  }
}


// test
let url = 'https://sub.host.com:8080/p/a/t/h?query=string#hash'
console.log(parse(url))

// result
// { 
//   href: 'https://sub.host.com:8080/p/a/t/h?query=string#hash',
//   protocol: 'https',
//   host: 'sub.host.com',
//   port: '8080',
//   pathname: '/p/a/t/h',
//   search: 'query=string',
//   hash: 'hash' 
// }
