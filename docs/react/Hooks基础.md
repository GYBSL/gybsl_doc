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

> 作用：useState 为函数组件提供状态（state）

**使用步骤**

1. 导入 useState 函数
2. 调用 useState 函数，并传入状态的初始值
3. 从 useState 函数的返回值中，拿到状态和修改状态的方法
4. 在 JSX 中展示状态
5. 调用修改状态的方法更新状态

**状态的读取和修改**

读取状态

    该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

修改状态

1. setCount 是一个函数，参数表示最新的状态值
2. 调用该函数后，将使用新值替换旧值
3. 修改状态后，由于状态发生变化，会引起视图变化

注意事项

    修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型

**组件的更新过程**

函数组件使用 useState hook 后的执行过程，以及状态值的变化

- 组件第一次渲染

  1. 从头开始执行该组件中的代码逻辑
  2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
  3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染

  1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
  2. 组件重新渲染时，会再次执行该组件中的代码逻辑
  3. 再次调用 `useState(0)`，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1
  4. 再次渲染组件，此时，获取到的状态 count 值为：1

```js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // 在这里可以进行打印测试
  console.log(count);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
export default App;
```

注意：useState 的初始值(参数)只会在组件第一次渲染时生效。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值

**使用规则**

useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态

```js
function List() {
  // 以字符串为初始值
  const [name, setName] = useState('cp');
  // 以数组为初始值
  const [list, setList] = useState([]);
}
```
