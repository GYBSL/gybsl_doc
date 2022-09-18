---
title: React-Route
order: 13
---

## React-Router

**1、安装路由依赖**

```js
# 安装react-router包
$ yarn add react-router-dom@6
```

**2、基础使用**

实现步骤：

1. 导入必要的路由 router 内置组件
2. 创建 React 组件
3. 按照路由的规则进行路由配置

```js
// 引入必要的内置组件
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 准备俩个路由组件

const Home = () => <div>this is home</div>;
const About = () => <div>this is about</div>;

function App() {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        //路由出口
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

**3. 核心内置组件说明**

1. BrowerRouter

> 作用: 包裹整个应用，一个 React 应用只需要使用一次

> 模式: HashRouter( 哈希模式 ) BrowerRouter( history 模式 )

2. Link

> 作用: 用于指定导航链接，完成声明式的路由跳转 类似于 `<router-link/>`

这里 to 属性用于指定路由地址，表示要跳转到哪里去，Link 组件最终会被渲染为原生的 a 链接

3. Routes

> 作用: 提供一个路由出口，组件内部会存在多个内置的 Route 组件，满足条件的路由会被渲染到组件内部类比 router-view

4. Route

> 作用: 用于定义路由路径和渲染组件的对应关系 [element：因为 react 体系内 把组件叫做 react element]

其中 path 属性用来指定匹配的路径地址，element 属性指定要渲染的组件

**4. 编程式导航**

声明式 【 Link to】 vs 编程式 【调用路由方法进行路由跳转】

概念: 通过 js 编程的方式进行路由页面跳转，比如说从首页跳转到关于页

实现步骤：

1. 导入一个 useNavigate 钩子函数
2. 执行 useNavigate 函数 得到 跳转函数
3. 在事件中执行跳转函数完成路由跳转

```js
// 导入useNavigate函数
import { useNavigate } from 'react-router-dom';
const Home = () => {
  // 执行函数
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => navigate('/about')}> 跳转关于页 </button>
    </div>
  );
};

export default Home;
```

注: 如果在跳转时不想添加历史记录，可以添加额外参数 replace 为 true

```js
navigate('/about', { replace: true });
```

**5. 路由传参**

> 场景：跳转路由的同时，有时候要需要传递参数

1.searchParams 传参

    路由传参:

    ```js
    navigage('/about?id=1')
    ```

    路由取参:

    ```js
    let [params] = useSearchParams()
    let id = params.get('id')
    ```

2.params 传参

    路由传参:

    ```js
    navigage('/about/111')
    ```

    路由取参:

    ```js
    let [params] = useParams()
    let id = params.id
    ```
