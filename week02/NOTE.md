# 第2周总结

## 编程语言通识

```js
# 使用 BNF(巴科斯诺尔范式) 编写带括号的四则运算产生式

<Number> = "0" | "1" | "2" | ... | "9"

# <Number> = /0\[1-9][0-9]* /

<DecimalNumber> = "0" | {{ "1" | "2" | ... | "9"} <Number>* }

<PrimaryExpression> = <DecimalNumber> | "(" <LogicalExpression> ")"

<MultiplicativeExpression> = <DecimaNumber> | <MultiplicativeExpression> "*" <DecimalNumber> | <MultiplicativeExpression> "/" <DecimalNumber> | 

<AdditiveExpression> = <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression> 

<LogicalExpression> = <AdditiveExpression>  | <LogicalExpression> "||" <AdditiveExpression> | <LogicalExpression> "&&" <AdditiveExpression>
```

## 词法

### 源码

JavaScript 源码可以是任意的 Unicode 字符

### 输入元素

#### 空白符

```js
TAB：制表符  '\t'

VT：纵向制表符 '\v'，目前大部分的排版系统都会忽略它

FF：FORM FEED （分页符 ）"\f"，早期用于机械型的打印机，现在已经不适用

SP：SPACE 普通空格

NBSP：不换行空格（英语：no-break space，NBSP）是空格字符，用途是禁止自动换行。 &nbsp

ZWSP：零宽空格

ZWJ：零宽连接符

ZWNJ：零宽非连接符

ZWNBSP：用于判断文件编码格式，也叫BOM（Byte Order Mark）“/uFEFF”，现在已经不适用
```

#### 换行符

```js
LF    “\n”
CR   "\r"
```

#### 注释

```js
// 单行注释

/*
	多行注释
*/
```

#### 有效输入（token）

```
标识符名称
符号
数字直接量
字符串直接量
正则表达式直接量
字符串模版
```

## 课后作业：

- 写一个正则表达式 匹配所有 Number 直接量
- 写一个 UTF-8 Encoding 的函数
- 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号