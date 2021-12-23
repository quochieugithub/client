import React, { Component } from 'react'
import ProductFavotire from '../components/ProductFavorite/ProductFavotire'
import LinkHere from '../components/LinkHere/LinkHere'
export default class ProductFavoritePage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li className="active">/ Sản phẩm yêu thích</li>
            </ul>
          </div>
        </div>
      </div>
        <ProductFavotire></ProductFavotire>
      </div>
    )
  }
}
