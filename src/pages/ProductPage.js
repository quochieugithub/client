import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ProductAll from '../components/ProductAll/ProductAll'
export default class ProductPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li><a href="index.html">Trang chủ</a></li>
                <li className="active">/ Sản phẩm</li>
              </ul>
            </div>
          </div>
        </div>
        <ProductAll></ProductAll>
      </div>
    )
  }
}

