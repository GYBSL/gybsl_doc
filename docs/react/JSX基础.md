---
title: JSX基础
order: 3
---

## JSX简介

概念：JSX是 JavaScript XML（HTML）的缩写，表示在 JS 代码中书写 HTML 结构，是一种js的语法糖

作用：在React中创建HTML结构（页面UI结构）

优势：

    1. 采用类似于HTML的语法，降低学习成本，会HTML就会JSX
    2. 充分利用JS自身的可编程能力创建HTML结构

注意：JSX 并不是标准的 JS 语法，是 JS 的语法扩展，浏览器默认是不识别的，脚手架中内置的 @babel/plugin-transform-react-jsx 包，用来解析该语法

## JSX中使用js表达式

语法：

    let str='world!'
    <h1>hello {str}</h1>

注意：

    if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 {} 中！！

## JSX列表渲染

实现：使用数组的map 方法

    const list=[
        {id: 1, name: '小王'},
        {id: 2, name: '小芳'},
        {id: 3, name: '小军'}
    ];

    function APP() {
        return (
            <div className="App">
                <ul>
                    {
                        list.map(item => <li key=item.id>item.name</li>)
                    }
                </ul>
            </div>
        )
    }

    export default App

注意点：需要为遍历项添加 key 属性

## JSX条件渲染

实现：可以使用 三元运算符 或   逻辑与(&&)运算符

    const flag = true;

    function App() {
    return (
        <div className="App">
        {/* 条件渲染字符串 */}
        {flag ? 'yes' : 'no'}
        {/* 条件渲染标签/组件 */}
        {flag ? <span>this is a span</span> : null}
        </div>
    )
    }

    export default App