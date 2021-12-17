import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ProductSearch from '../components/ProductAll/ProductSearch'
export default class ProductSearchPage extends Component {
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
              <li className="active">/ Tìm kiếm</li>
            </ul>
          </div>
        </div>
      </div>
        <ProductSearch></ProductSearch>
      </div>
    )
  }
}

