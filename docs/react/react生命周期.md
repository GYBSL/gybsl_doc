---
title: react生命周期
order: 10
---

## 生命周期

> 生命周期是组件从创建到挂载页面，到更新，到页面卸载的过程

注意：类组件需要实例化，有生命周期 函数组件不需要实例化，没有生命周期

官网生命周期图解：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

![](https://gitee.com/gybsl/image-upload/raw/master/image_docs/life.png)

## 生命周期 - 挂载阶段

> 组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程，注意，只有类组件才有生命周期（类组件 实例化 函数组件 不需要实例化）

挂载阶段的几个钩子函数：

**constructor**

```js
constructor()：构造函数，创建组件时，最先执行，初始化的时候只执行一次

作用：1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
```

**getDerivedStateFromProps**

```js
getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
```

**render**

```js
render(): 每次组件渲染都会触发

作用：渲染UI（注意： 不能在里面调用setState() ）
```

**componentDidMount**

```js
componentDidMount(): 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次

作用：1. 发送网络请求   2.DOM操作
```

## 生命周期 - 更新阶段
