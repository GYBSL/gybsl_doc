---
title: react组件通信
order: 8
---

## react组件常见通信方式

    1、子传父、父传子
    2、兄弟组件间：自定义事件模式产生技术方法 eventBus  /  通过共同的父组件通信
    3、也可以通过状态管理工具 mobx / redux / zustand 实现组件间的通信

## 父传子实现

    // 代码实现
    import React from 'react'

    // 函数式子组件
    function HelloSon(props){
        return (
            <div>
                子组件1 { props.msg }
            </div>
        )
    }

    // 类子组件
    class HelloClassSon extends React.Component {
        render(){
            return (
                <div>
                    <p>这是类组件中的接收父组件传值的方法 --- { this.props.msg }</p>
                </div>
            )
        }
    }

    // 父组件
    class App extends React.Component {
        state = {
            msg: "父传子的实现"
        }

        render(){
            return (
                <>
                    <HelloSon msg={ this.state.msg } />
                    <HelloClassSon msg={ this.state.msg } />
                </>
            )
        }
    }

    export default App


## 子传父实现

子传父实现的原理就是 父组件定义一个回调函数 一起传给子组件 子组件调用这个回调函数并携带参数 父组件中的回调函数接收传递的参数来修改state中的状态

    // 代码实现
    import React from 'react'

    function HelloSon(){
        hand(){
            props.changeMsg('123456')
        }

        return (
            <div>
                <span>{ props.msg }</span>
                <button onClick={ hand }></button>
            </div>
        )
    }

    class APP extends React.Component{
        state = {
            msg: "子传父实现"
        }

        changeMsg = (n) => {
            this.setState({
                msg: n
            })
        }

        render(){
            return (
                <HelloSon msg={ this.state.msg } changeMsg={ this.changeMsg } />
            )
        }
    }


## 兄弟组件之间的传值

思路：利用共同的父组件来实现传值

## 跨组件通信Context

    //代码实现
    import React,{ createContext } from 'react'

    // 1、创建createContext对象
    const { Provider,Consumer } = createContext()


    function conOne(){
        return (
            <conTwo />
        )
    }

    function conTwo(){
        return (
            <Consumer>
                { value => (
                    <div>
                        <span>{ value }</span>
                    </div>
                )}
            </Consumer>
        )
    }

    class App extends React.Component{
        state = {
            msg: "hello context"
        }

        render(){
            return (
                <Provider value={ this.state.msg }>
                    <div className='App'>
                        <conOne />
                    </div>
                </Provider>
            )
        }
    }
   
    export default App
