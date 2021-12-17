import React, { Component } from 'react'

export default class FooterTop extends Component {
  render() {
    return (
      <div className="footer-static-top">
        <div className="container">
          {/* Begin Footer Shipping Area */}
          <div className="footer-shipping pt-60 pb-55 pb-xs-25">
            <div className="row">
              {/* Begin Li's Shipping Inner Box Area */}
              <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="https://i.ibb.co/T47vHYx/1.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Giao hàng miễn phí</h2>
                    <p>Và trả lại miễn phí. Xem thanh toán để biết ngày giao hàng</p>
                  </div>
                </div>
              </div>
              {/* Li's Shipping Inner Box Area End Here */}
              {/* Begin Li's Shipping Inner Box Area */}
              <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="https://i.ibb.co/fdWjv2v/2.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Thanh toán an toàn</h2>
                    <p>Thanh toán bằng các phương thức thanh toán an toàn và phổ biến nhất thế giới.</p>
                  </div>
                </div>
              </div>
              {/* Li's Shipping Inner Box Area End Here */}
              {/* Begin Li's Shipping Inner Box Area */}
              <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="https://i.ibb.co/tbLjsRY/3.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Mua sắm với sự tự tin</h2>
                    <p>Bảo vệ quyền lợi người mua hàng bao gồm việc mua hàng của bạn từ khi nhấp chuột đến khi giao hàng.</p>
                  </div>
                </div>
              </div>
              {/* Li's Shipping Inner Box Area End Here */}
              {/* Begin Li's Shipping Inner Box Area */}
              <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="https://i.ibb.co/GvHXW7z/4.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>24/7 Trung tâm trợ giúp</h2>
                    <p>Có câu hỏi? Gọi cho Chuyên gia hoặc trò chuyện trực tuyến.</p>
                  </div>
                </div>
              </div>
              {/* Li's Shipping Inner Box Area End Here */}
            </div>
          </div>
          {/* Footer Shipping Area End Here */}
        </div>
      </div>

    )
  }
}
