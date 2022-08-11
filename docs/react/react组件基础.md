---
title: react组件基础
order: 4
---

## 函数组件

    //定义函数组件
    function Hello(){
        return (
            <div>hello react</div>
        );
    }

    function App(){
        return (
            <Hello></Hello>
        );
    }

    export default App

**规范：**

组件的名称 *必须首字母大写* ，react就是通过判断首字母的大小写来确定是组件还是普通html标签

组件必须 *要 return 返回值* ，如果不需要渲染，就返回null

函数名称定义的组件，*可以成对出现也可以自闭和*

## 类组件

    import React from 'react';

    class Hello extends React.Cmponent{
        render(){
            return <div>我是一个类组件</div>
        }
    }

    function App () {
        return (
            <div className="App">
                <Hello></Hello>
            </div>
        )
    }

    export default App

同样是要首字母大写

继承 React.Component 父类，从而使用父类中提供的方法或属性

类组件必须提供 render 方法 render 方法必须有返回值，表示该组件的 UI 结构