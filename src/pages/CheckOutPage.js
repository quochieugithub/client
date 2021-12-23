import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import CheckOut from '../components/CheckOut/CheckOut'

export default class CheckOutPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li className="active">/ Thanh toán</li>
            </ul>
          </div>
        </div>
      </div>
        <CheckOut></CheckOut>
      </div>
    )
  }
}
