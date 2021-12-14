import React, { Component } from 'react'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import LinkHere from '../components/LinkHere/LinkHere'

export default class ShoppingCartPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li className="active">/ Giỏ hàng</li>
            </ul>
          </div>
        </div>
      </div>
        <ShoppingCart></ShoppingCart>
      </div>
    )
  }
}
