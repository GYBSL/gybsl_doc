---
title: 组件children和props类型校验
order: 9
---

## 组件 children

**children 属性**

表示该组件的子节点，只要组件内部有子节点，props 中就有该属性

其中 children 中可以传递：

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
import React from 'react';

function Listviews({ chialdren }) {
  return (
    <>
      {
        children.map((item) => item) // 通过map遍历传过来的children
      }
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <Listview>
        // 传多个节点
        <p>这是一个p标签</p>
        <span>这是一个span标签</span>
      </Listview>
    );
  }
}
```

## props 类型校验

为什么要进行类型校验

> 如果组件接收的类型是一个数组的话，传过去的值是一个其他类型的值就会报错，所以要进行类型校验

**实现方法**

1、安装并引入第三方库包文件

 `npm` 方式： `npm i prop-types`

 `yarn` 方式：`yarn add prop-types`

2、导入`prop-types` 包

 `import PropTypes from 'prop-types'`

3、使用 `组件名.propTypes = {}` 给组件添加校验规则

```js
import PropTypes from 'prop-types';

const List = (props) => {
  const arr = props.colors;
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>);
  return <ul>{lis}</ul>;
};

List.propTypes = {
  colors: PropTypes.array,
};
```

## props 校验常用规则

  1. 常见类型：array、bool、func、number、object、string
  2. React元素类型：element
  3. 必填项：isRequired
  4. 特定的结构对象：shape({})

```js
// 常见类型
optionalFunc: PropTypes.func,
// 必填 只需要在类型后面串联一个isRequired
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象
optionalObjectWithShape: PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
})
```

官网文档相关链接：https://reactjs.org/docs/typechecking-with-proptypes.html

## props校验默认值

给props设置默认值的方法：

1、直接在接收props解构赋值时设置默认值

```js
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```