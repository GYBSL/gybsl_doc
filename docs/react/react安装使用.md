---
title: React安装
order: 2
---

## React安装使用
**1、CDN 引入**

和普通的 JS 库或框架一样，React 也可以从 CDN 引入 <br/>
React 的 CDN引入需要引入 2 个 JS 库文件，即 react 和 react-dom
> react (先引入): ```<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>```

> react-dom (后引入): ```<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>```

**2、脚手架方式创建项目**

创建项目 <br/>
`$ npx create-react-app 项目名`

启动项目 <br/>
`$ npm start`

## 项目目录文件说明
`src` 存放的是这个项目的核心内容，也就是我们的主要工作区域。其中，index.js文件是和index.html进行关联的文件的唯一接口

`package.json` 配置文件

`public文件夹` 

`index.html` 项目的入口文件，引用了第三方类库啊，还可以引入cdn

    <div id="root"></div> 是项目的总容器，所有的内容存储在这个容器中。这个容器有且只能有一个。

`Robots.txt` 可以对特定网页进行屏蔽

`manifest.json` 扩展的配置文件，指明了扩展的各种信息

`index.js` 

    ReactDOM.render()的作用是将的内容渲染到根“root”中去。

    document.getElementById(‘root’)中的"root"便是index.html中的"root"了，便是引用页面内容了。在这里，也可以写一些内容(结构,样式,逻辑)是整个项目的根组件

    能够引用的原因是文档内容的头部，有import App from ‘./App’;内容，就是为了将App.js的内容引入到index.js文件中。

`App.js`

```import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

    export default App;是为了将App公开，index.js才能够引用.

    return的内容是类似于html结构的内容，就是jsx，jsx语法是react的主要语法。内部的div的className是为了区分html语法的一个类名，这个是div的样式引用。在这个文件中，只能用一个div容器，如果在div的同级目录添加别的内容，便会报错

    className=“App”，是引用到App.css的样式。注意，页面内容样式是就近原则，首先用App.css的样式，App.css是组件的样式，index.css是全局的样式。

## package.json配置信息详解
**1、name字段**

项目工程名称 `"name": ""`

**2、version字段**

项目版本号 `"version": ""`

**3、private字段**

发布配置 `"private": true` <br/>
*"private": true在package.json中设置，那么npm将拒绝发布它。这是一种防止意外发布私有存储库的方法。*

**4、dependencies字段**

dependencies字段指定了项目运行所依赖的模块 <br/>
*latest：安装最新版本*

**5、scripts字段**

scripts 指定了运行脚本命令的 npm 命令行缩写，比如 start 指定了运行 npm run start 时，所要执行的命令

**5、eslintConfig字段**

Eslint配置
```
"eslintConfig": {
    "extends": "react-app",
    "rules":{
        "no-console":1
    }
}
```

上面代码，配置了不让输出，否则会warning。

*“off” 或者 0：关闭规则* <br/>
*“warn” 或者 1：打开规则，并且作为一个警告（不影响exit code）* <br/>
*“error” 或者 2：打开规则，并且作为一个错误（exit code将会是1）*

**6、browserslist字段**

```dotnetcli
"browserslist": {
    "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
    ],
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
    ]
}
```

browserlist是一个前端项目配置工具，功能是在前端工具之间共享目标环境的浏览信息

比如我们项目构建的时候一般会用到babel，postCss等等，提供了对应的浏览器信息后，他们就会针对浏览器信息采取不同的编译策略。

