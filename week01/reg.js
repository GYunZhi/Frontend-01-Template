// 正则表达式

// 字面量语法
// let express = /pattern/ flags 

// 去除字符串作用两端的空格
// let reg = /^\s*|\s*$/g

let str = '   abc  '
function trim (str) {
  return str.replace(/^\s*|\s*$/g, '')
} 

console.log(trim(str))


// node url模块
// url 模块提供了两套 API 来处理 URL：一个是旧版本遗留的 API，一个是实现了 whatwg 标准的新 API。

const url = require('url')

let myURL1 = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash', true)
console.log('myURL1', myURL1)

const myURL2 = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log('myURL2', myURL2)

console.log(url.resolve('http://example.com/', '/one'))
console.log(url.resolve('http://example.com/one/', '/two'))

let urlStr = url.format({   
  protocol: 'http:',   
  host: 'www.example.com',    
  pathname: '/p/a/t/h',    
  search: 'query=string'
})
console.log(urlStr)