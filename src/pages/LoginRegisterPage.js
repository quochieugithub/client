import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import LoginRegister from '../components/LoginRegister/LoginRegister'

export default class LoginRegisterPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li className="active">/ Đăng nhập</li>
            </ul>
          </div>
        </div>
      </div>
        <LoginRegister></LoginRegister>
      </div>
    )
  }
}
