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

> 每当组件的 state 或 props 发生变化时，组件就会更新。
>
> 当组件的 props 或 state 发生变化时会触发更新。

组件更新阶段的钩子函数：

**getDerivedStateFromProps**

```js
getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。

根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
```

**shouldComponentUpdate**

```js
shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在render渲染执行之前被调用。

会返回一个布尔值，指定 React 是否应该继续渲染，默认值是 true， 即 state 每次发生变化组件都会重新渲染。

shouldComponentUpdate() 的返回值用于判断 React 组件的输出是否受当前 state 或 props 更改的影响，当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
```

**render**

```js
每次组件渲染都会触发;
```

**getSnapshotBeforeUpdate**

```js
getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。

在 getSnapshotBeforeUpdate() 方法中，我们可以访问更新前的 props 和 state。

getSnapshotBeforeUpdate() 方法需要与 componentDidUpdate() 方法一起使用，否则会出现错误。
```

**componentDidUpdate**

```js
componentDidUpdate(): 组件更新后（DOM渲染完毕）

作用：DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
```

## 生命周期 - 卸载阶段

**componentWillUnmount**

```js
componentWillUnmount(): 组件卸载, 执行清理工作（比如：清理定时器等）
```
