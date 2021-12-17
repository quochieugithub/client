import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { toast } from "react-toastify";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const newSubject = subject ? subject : null;
    const newMessage = message ? message : null;
    if(!name || !email) {
      return toast.error('Lỗi! Tên và Email là bắt buộc')
    }
    const newContact = {
      name,
      email,
      subject: newSubject,
      message: newMessage
    };
    const res = await callApi("contacts", "POST", newContact, null);
    if (res && res.status === 200) {
      toast.success("Gửi liên hệ thành công");
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };
  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Thông tin liên hệ</h3>
                <p className="contact-page-message mb-25">
                  Công ty chúng tôi luôn có đội ngũ thức trực 24/7 nhằm tư vấn, hỗ trợ hướng dẫn và giải quyết các khiếu nại thắc mắc của khách hàng
                </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax" /> Địa chỉ
                  </h4>
                  <p>Tòa nhà Innovation, lô 24, Công viên phần mềm Quang Trung, Quận 12, Tp. Hồ Chí Minh</p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone" /> Số điện thoại
                  </h4>
                  <p>Phone: (+84) 123 456 789</p>
                  <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o" /> Email
                  </h4>
                  <p>hoa2hop@hhcom</p>
                  <p>support@hh.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">Hòm thư góp ý</h3>
                <div className="contact-form">
                  <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="form-group">
                      <label>
                        Tên khách hàng <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                         Email của bạn<span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                      />
                    </div>
                    {/* <div className="form-group">
                      <label>Subject</label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="subject"
                        value={subject}
                      />
                    </div> */}
                    <div className="form-group mb-30">
                      <label>Lời nhắn gửi công ty</label>
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        value={message}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="li-btn-3"
                        name="submit"
                      >
                        GỬI
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
