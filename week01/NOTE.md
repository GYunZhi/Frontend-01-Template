# 第1周总结

## 学习方法

### 前端技能模型

|          | 前端技能模型 |                  |
| -------- | :----------: | ---------------- |
|          |   领域知识   | （实践中学习）   |
|          |   前端知识   | （建立知识体系） |
| 编程能力 |   架构能力   | 工程能力         |

编程能力：解决某一具体问题的能力

架构能力：解决某一个大型系统问题的能力

工程能力：协调人员、管理项目的能力

### 学习方法

#### 整理法

> 整理过程需要注意知识的完备性

![](https://gongyz.oss-cn-shenzhen.aliyuncs.com/blog/20200407210543.png)

#### 追溯法

学习过程中，遇到疑惑或者模棱两可的地方，尽量参考标准文档或比较权威的专家处找到答案

![](https://gongyz.oss-cn-shenzhen.aliyuncs.com/blog/20200413202831.png)

## 工程体系

### 课程互动

winter眼中的优秀工程师

- 领域知识
- 编程能力、架构能力、工程能力（个人潜力）
- 职业规划（工程师、资深工程师、专家、经理）

### 如何参与开源项目

- 帮助完善项目文档
- 尝试修改bug，提交给负责人review
- 尝试深入去了解项目，找出可以优化、完善的地方，尝试去处理

### 数据驱动的思考方式

![](https://gongyz.oss-cn-shenzhen.aliyuncs.com/blog/20200411203121.png)

### 课后作业

封装一个URL 解析库

```js
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
```

