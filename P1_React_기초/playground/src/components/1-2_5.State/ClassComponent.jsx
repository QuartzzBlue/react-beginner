import React, { Component } from 'react'

//rcc
export default class ClassComponent extends Component {
/* 
    State의 LifeCycle을 볼 수 있음.
    Hook 이 나오기 이전에는 Fucntional Component에서 State의 상태관리가 불가능했었음.
    그래서 상태관리가 필요한 경우에는 ClassComponent, props를 받아서 간단하게 렌더링하는 경우에는 FunctionalComponent를 사용했었지만,
    Hook이 있는 지금은 그냥 FunctionalComponent만 사용해도 무방! 
*/
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  
  //컴포넌트가 그려지자마자 호출
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //컴포넌트가 사라지기 직전에 호출
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world! It's Class Component</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
