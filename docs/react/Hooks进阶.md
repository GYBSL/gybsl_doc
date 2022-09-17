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

**语法规则**

1. 回调函数 return 出去的值将作为 name 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次

**语法选择**

1. 如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可
2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用 useState(()=>{})

**使用示例**

```js
import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  );
}

export default App;
```

## useEffect - 发送网络请求

**使用场景**

在 useEffect 中发送网络请求，并且封装同步 async await 操作

**语法要求**

不可以直接在 useEffect 的回调函数外层直接包裹 await ，因为异步会导致清理函数无法立即返回

```js
useEffect(async () => {
  const res = await axios.get('http://xxx.net');
  console.log(res);
}, []);
```

**正确写法**

在内部单独定义一个函数，然后把这个函数包装成同步

```js
useEffect(()=>{
    async function fetchData(){
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)
    }
},[])
```

## useRef
