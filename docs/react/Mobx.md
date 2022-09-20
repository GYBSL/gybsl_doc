---
title: Mobx
order: 14
---

## 1. Mobx 介绍

> 一个可以和 React 良好配合的集中状态管理工具，和 Redux 解决的问题相似，都可以独立组件进行集中状态管理

**优势**

1. `简单` 编写无模板的极简代码精准描述你的意图
2. `轻松实现最优渲染` 依赖自动追踪，实现最小渲染优化
3. `架构自由` 可移植, 可测试 无特殊心智负担

**2. 配置开发环境**

> Mobx 是一个独立的响应式的库，可以独立于任何 UI 框架存在，但是通常大家习惯把它和 React 进行绑定使用，用 Mobx 来做响应式数据建模，React 作为 UI 视图框架渲染内容，我们环境的配置需要三个部分

1. 一个 create-react-app 创建好的 React 项目环境
2. mobx 框架本身
3. 一个用来链接 mobx 和 React 的中间件

```base
# 创建项目
$ yarn create vite react-mobx --template react

# 安装mobx和中间件工具 mobx-react-lite  只能函数组件中使用
$ yarn add  mobx  mobx-react-lite
```

**3. 基础使用**

1. 初始化 mobx

   初始化步骤:

   1. 定义数据状态 state
   2. 在构造器中实现数据响应式处理 makeAutoObservble
   3. 定义修改数据的函数 action
   4. 实例化 store 并导出

```js
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0; // 定义数据
  constructor() {
    makeAutoObservable(this); // 响应式处理
  }
  // 定义修改数据的方法
  addCount = () => {
    this.count++;
  };
}

const counter = new CounterStore();
export default counter;
```

2. React 使用 store

   实现步骤:

   1. 在组件中导入 counterStore 实例对象
   2. 在组件中使用 storeStore 实例对象中的数据
   3. 通过事件调用修改数据的方法修改 store 中的数据
   4. 让组件响应数据变化

```js
// 导入counterStore
import counterStore from './store';
// 导入observer方法
import { observer } from 'mobx-react-lite';
function App() {
  return (
    <div className="App">
      <button onClick={() => counterStore.addCount()}>{counterStore.count}</button>
    </div>
  );
}
// 包裹组件让视图响应数据变化
export default observer(App);
```

**4. 计算属性（衍生状态）**

> 概念: 有一些状态根据现有的状态计算（衍生）得到，我们把这种状态叫做计算属性

```base
实现步骤:

1. 生命一个存在的数据
2. 通过get关键词 定义计算属性
3. 在 makeAutoObservable 方法中标记计算属性
```

```js
// counterStore.js

import { computed, makeAutoObservable } from 'mobx';

class CounterStore {
  list = [1, 2, 3, 4, 5, 6];
  constructor() {
    makeAutoObservable(this, {
      filterList: computed,
    });
  }
  // 修改原数组
  changeList = () => {
    this.list.push(7, 8, 9);
  };
  // 定义计算属性
  get filterList() {
    return this.list.filter((item) => item > 4);
  }
}

const counter = new CounterStore();

export default counter;
```

```js
// app.js

// 导入counterStore
import counterStore from './store';
// 导入observer方法
import { observer } from 'mobx-react-lite';
function App() {
  return (
    <div className="App">
      {/* 原数组 */}
      {JSON.stringify(counterStore.list)}
      {/* 计算属性 */}
      {JSON.stringify(counterStore.filterList)}
      <button onClick={() => counterStore.changeList()}>change list</button>
    </div>
  );
}
// 包裹组件让视图响应数据变化
export default observer(App);
```

**5. 异步数据处理**

```base
实现步骤:

1. 在mobx中编写异步请求方法 获取数据 存入state中
2. 组件中通过 useEffect + 空依赖  触发action函数的执行
```

```js
// channelStore.js

// 异步的获取

import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class ChannelStore {
  channelList = [];
  constructor() {
    makeAutoObservable(this);
  }
  // 只要调用这个方法 就可以从后端拿到数据并且存入channelList
  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels');
    this.channelList = res.data.data.channels;
  };
}
const channlStore = new ChannelStore();
export default channlStore;
```

```js
// App.js

import { useEffect } from 'react';
import { useStore } from './store';
import { observer } from 'mobx-react-lite';
function App() {
  const { channlStore } = useStore();
  // 1. 使用数据渲染组件
  // 2. 触发action函数发送异步请求
  useEffect(() => {
    channlStore.setChannelList();
  }, []);
  return (
    <ul>
      {channlStore.channelList.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
// 让组件可以响应数据的变化[也就是数据一变组件重新渲染]
export default observer(App);
```

**6. 模块化**

> 场景: 一个项目有很多的业务模块，我们不能把所有的代码都写到一起，这样不好维护，提了提供可维护性，需要引入模块化机制

```base
实现步骤:

1. 拆分模块js文件，每个模块中定义自己独立的state/action
2. 在store/index.js中导入拆分之后的模块，进行模块组合
3. 利用React的context的机制导出统一的useStore方法，给业务组件使用
```
