import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ForgotPassword from '../components/LoginRegister/ForgotPassword'

export default class ForgotPasswordPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li className="active">/ Quên mật khẩu</li>
            </ul>
          </div>
        </div>
      </div>
        <ForgotPassword></ForgotPassword>
      </div>
    )
  }
}
