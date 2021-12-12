import React, { Component } from 'react'
import logo from "../../images/logo2.png";
export default class FooterMiddle extends Component {
  render() {
    return (
      <div className="footer-static-middle">
        <div className="container">
          <div className="footer-logo-wrap pt-50 pb-35">
            <div className="row">
              {/* Begin Footer Logo Area */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                  {/* <img src="https://i.ibb.co/0nfNbwg/1.png" alt="Footer Logo" /> */}
                  <img src={logo} alt="Footer Logo" />

                  <p className="info">
                   Hòa Hợp mang nguồn thực phẩm sạch đến mọi nhà
                  </p>
                </div>
                <ul className="des">
                  <li>
                    <span>Phone: </span>
                    <a href="/">(+123) 123 321 345</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto://hoahop@gmail.com">hoahop@gmail.com</a>
                  </li>
                </ul>
              </div>
              {/* Footer Logo Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Sản phẩm</h3>
                  <ul>
                    <li>
                      <a href="/">Giảm giá</a>
                    </li>
                    <li>
                      <a href="/">Sản phẩm mới</a>
                    </li>
                    <li>
                      <a href="/">Sản phẩm nổi bật</a>
                    </li>
                    <li>
                      <a href="/">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Block Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Công ty chúng tôi</h3>
                  <ul>
                    <li>
                      <a href="/">Giao hàng</a>
                    </li>
                    <li>
                      <a href="/">Thanh toán</a>
                    </li>
                    <li>
                      <a href="/">Mua sắm</a>
                    </li>
                    <li>
                      <a href="/">Hỗ trợ 24/7</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Block Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-4">
                <div className="footer-block">
                  <h3 className="footer-block-title">Mạng xã hội</h3>
                  <ul className="social-link">
                    <li className="twitter">
                      <a
                        href="https://twitter.com/"
                        data-toggle="tooltip"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="rss">
                      <a
                        href="https://rss.com/"
                        data-toggle="tooltip"
                        title="RSS"
                      >
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                    <li className="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        title="Google Plus"
                      >
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/"
                        data-toggle="tooltip"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/"
                        data-toggle="tooltip"
                        title="Youtube"
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/"
                        data-toggle="tooltip"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Begin Footer Newsletter Area */}
                <div className="footer-newsletter">
                  <h4>Đăng ký cập nhật thông tin</h4>
                  <form
                    action="/"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="footer-subscribe-form validate"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div
                        id="mc-form"
                        className="mc-form subscribe-form form-group"
                      >
                        <input
                          id="mc-email"
                          type="email"
                          autoComplete="off"
                          placeholder="Email của bạn"
                        />
                        <button className="btn" id="mc-submit">
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Footer Newsletter Area End Here */}
              </div>
              {/* Footer Block Area End Here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
