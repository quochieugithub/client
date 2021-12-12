import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class StaticHomeQC extends Component {
  render() {
    return (
      <div className="li-static-home mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Begin Li's Static Home Image Area */}
              <div className="li-static-home-image" />
              {/* Li's Static Home Image Area End Here */}
              {/* Begin Li's Static Home Content Area */}
              <div className="li-static-home-content">
                <p>Giá giảm<span> -20% Off</span> Tuần này</p>
                <h2>Sản phẩm nổi bật</h2>
                <h2>Rau củ quả tươi sạch 2021</h2>
                <p className="schedule">
                  Bắt đầu với giá
                <span> 129.000 VND</span>
                </p>
                <div className="default-btn">
                  <Link to="#" className="links">Mua Sắm Ngay</Link>
                </div>
              </div>
              {/* Li's Static Home Content Area End Here */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
