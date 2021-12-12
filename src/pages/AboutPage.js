import React, { Component } from 'react'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <ul>
          <li><a href="index.html">Trang chủ</a></li>
          <li className="active">/Giới thiệu</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Li's Breadcrumb Area End Here */}
  {/* about wrapper start */}
  <div className="about-us-wrapper pt-60 pb-40">
    <div className="container">
      <div className="row">
        {/* About Text Start */}
        <div className="col-lg-6 order-last order-lg-first">
          <div className="about-text-wrap">
            <h2>HÒA HỢP<span>Thực phẩm tươi sạch</span></h2>
                      <p>Công ty chúng tôi chuyên phân phối sỉ và lẻ rau, củ, quả và các thực phẩm nông sản sạch có nguồn gốc rõ ràng.Dự án hợp tác và liên kết với các chuỗi hộ gia đình và doanh nghiệp chăn nuôi và nuôi trồng theo quy trình VietGAP từ các công đoạn sơ chế đồ tươi sống, đóng gói thành từng hộp hút chân không (nguyên liệu, gia vị, các bước chế biến).</p>
            <p>Nhằm mang đến những sản phẩm phục vụ bữa ăn hàng ngày của mọi nhà, đảm bảo về chất lượng và có thực đơn phong phú, thay đổi theo từng bữa ăn, đáp ứng nhu cầu tiêu dùng của khách hàng.</p>
          </div>
        </div>
        {/* About Text End */}
        {/* About Image Start */}
        <div className="col-lg-5 col-md-10">
          <div className="about-image-wrap">
            <img className="img-full" src="https://file.hstatic.net/1000269461/file/rau_an_toan_cd20b7d2fc6a4e00baf022dc47c1c5fe_grande.jpg" alt="About Us" />
          </div>
        </div>
        {/* About Image End */}
      </div>
    </div>
  </div>
  {/* about wrapper end */}
 
</div>

    )
  }
}
