import React, { Component } from 'react'

export default class ConditionClass extends Component {
  isLogin = false

  toggleLogin = () => {
    this.isLogin = !this.isLogin
    console.log(this.isLogin)
  }

  render() {
    if(this.isLogin) {
      return <div>
        <p>Đã Login</p>
        <button onClick={this.toggleLogin}>Đăng Xuất</button>
      </div>
    }

    return <div>
      <p>Chưa Login</p>
      <button onClick={this.toggleLogin}>Đăng Nhập</button>
    </div>

    // Sử dụng toán tử bậc 3
    // return (
    //   <div>
    //     {this.isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
    //   </div>
    // )
  }
}

function ConditionFunction() {
  let isLogin = false;

  if(isLogin) {
    return <p>Đã Đăng Nhập</p>
  }

  return (
    <p>Chưa Đăng Nhập</p>
  )

  // return (
  //   <div>
  //     {isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
  //   </div>
  // )
}












