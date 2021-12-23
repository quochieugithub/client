import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ShopCategory from '../components/ShopCategory/ShopCategory'

export default class ShopCategoryPage extends Component {

  render() {
    const url = this.props.match.match.url;
    const {id} = this.props.match.match.params
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li className="active">/ Loại sản phẩm</li>
            </ul>
          </div>
        </div>
      </div>
        <ShopCategory id={id}></ShopCategory>
      </div>
    )
  }
}
