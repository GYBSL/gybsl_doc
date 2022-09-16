---
title: Hooks基础
order: 11
---

## Hooks 的概念

> 一套能够使函数组件更强大，更灵活的“钩子”

React 中的组件分为 类组件 和 函数组件

函数组件是一个更加匹配 React 的设计理念 UI = f(data)，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从 react v16.8 开始，Hooks 应运而生

**注意：**

    1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用
    2. 有了hooks之后，不能在把函数成为无状态组件了，因为hooks为函数组件提供了状态
    3. hooks只能在函数组件中使用

> Hooks 的出现解决了俩个问题 1. 组件的状态逻辑复用 2.class 组件自身的问题

## Hook 的优势

- Hook 使你在无需改变组件结构的情况下复用状态逻辑（自定义 Hook）
- Hook 将组件中互相关联的部分拆分成更小的函数（比如设置订阅或请求数据）
- Hook 使你在非 class 的情况下可以使用更多的 React 特性

## Hook 使用规则

Hook 就是 Javascript 函数，使用它们时有两个额外的规则：

- 只能在函数外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在 React 的函数组件和自定义 Hook 中调用 Hook。不要在其他 JavaScript 函数中调用

## useState

`useState` 用于在函数组件中调用给组件添加一些内部状态 state，正常情况下纯函数不能存在状态副作用，通过调用该 Hook 函数可以给函数组件注入状态 state

`useState` 唯一的参数就是初始 state，会返回当前状态和一个状态更新函数，并且 `useState` 返回的状态更新函数不会把新的 state 和旧的 state 进行合并，如需合并可使用 ES6 的对象结构语法进行手动合并

**useState 方法使用**

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
