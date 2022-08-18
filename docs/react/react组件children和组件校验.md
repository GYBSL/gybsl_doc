---
title: 组件children和props类型校验
order: 9
---

## 组件children

**children属性**

表示该组件的子节点，只要组件内部有子节点，props中就有该属性

其中children中可以传递：

```js
1.普通文本
2.普通标签元素
3.函数
4.jsx

import React from 'react'

// 解构chidldren
function Lister({ children }){
    return <div>这是一个组件{children}</div>
}

class App extends React.Component{
    render()  {
        return(
            <Lister>这是传的children子节点</Lister>
        )
    }
}

export default App
```

**传递多个节点**

```js
import React from "react"

function Listviews({ chialdren }){
    return (
        <>
            {
                children.map(item => item) // 通过map遍历传过来的children
            }
        </>
    )
}

class App extends React.Component{
    render(){
        return (
            <Listview>
            // 传多个节点
                <p>这是一个p标签</p>
                <span>这是一个span标签</span>
            </Listview>
        )
    }
}
```


## props类型校验

为什么要进行类型校验

> 如果组件接收的类型是一个数组的话，传过去的值是一个其他类型的值就会报错，所以要进行类型校验

**实现方法**

1、安装并引入第三方库包文件

​	``npm`` 方式：  ``npm i prop-types``

​	``yarn`` 方式：``yarn add prop-types``



2、导入`prop-types` 包

​	``import PropTypes from 'prop-types'``



3、使用 `组件名.propTypes = {}` 给组件添加校验规则

```js
import PropTypes from 'prop-types'

const List = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}
```



## props校验常用规则





