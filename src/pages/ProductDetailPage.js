import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import LinkHere from '../components/LinkHere/LinkHere'

export default class ProductDetailPage extends Component {
  render() {
    const url = this.props.match.match.url;
    const {id} = this.props.match.match.params
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li className="active">/ Sản phẩm</li>
              <li className="active">/ {id}</li>
            </ul>
          </div>
        </div>
      </div>
        <ProductDetail id={id}></ProductDetail>
      </div>
    )
  }
}
