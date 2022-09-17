---
title: Hooks进阶
order: 12
---

## useState - 回调函数的参数

**使用场景**

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

语法

```js
const [name, setName] = useState(() => {
  // 编写计算逻辑    return '计算之后的初始值'
});
```
