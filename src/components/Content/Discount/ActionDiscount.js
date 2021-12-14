import React, { Component } from 'react'
import MyFooter from '../../MyFooter/MyFooter'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class ActionDiscount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: null,
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div className="content-inner">
        {/* Page Header*/}
        <header className="page-header">
          <div className="container-fluid">
            <h2 className="no-margin-bottom">Sản phẩm giảm giá</h2>
          </div>
        </header>
        {/* Breadcrumb*/}
        <div className="breadcrumb-holder container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
            <li className="breadcrumb-item active">Người dùng</li>
          </ul>
        </div>
        {/* Forms Section*/}
        <section className="forms">
          <div className="container-fluid">
            <div className="row">
              {/* Form Elements */}
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    <h3 className="h4">Miêu tả</h3>
                  </div>
                  <div className="card-body">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Mã giảm giá</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Kích hoạt</label>
                        <div className="col-sm-9">
                          <select name="account" className="form-control mb-3">
                            <option>Mã</option>
                            <option>Sản phẩm</option>
                          </select>
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Mã</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Tổng số cần tiếp cận</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Loại</label>
                        <div className="col-sm-9">
                          <select name="account" className="form-control mb-3">
                            <option>FixedAmount</option>
                            <option>Rate</option>
                            <option>Shipping</option>
                          </select>
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Đánh giá</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Số lượng</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Sử dụng tối đa</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Giá vận chuyển</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Thời gian bắt đầu</label>
                        <div className="col-sm-3">
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                        </div>
                        <label className="col-sm-3 form-control-label">Thời gian kết thúc</label>
                        <div className="col-sm-3">
                          <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleChangeEnd}
                          />
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Sản phẩm</label>
                        <div className="col-sm-9">
                          <select name="account" className="form-control mb-3">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Kích hoạt <br /></label>
                        <div className="col-sm-9">
                          <div className="i-checks">
                            <input type="checkbox" defaultValue className="checkbox-template" />
                          </div>
                        </div>
                      </div>
                      <div className="line" />
                      <div className="form-group row">
                        <div className="col-sm-4 offset-sm-3">
                          <button type="reset" className="btn btn-secondary" style={{ marginRight: 2 }}>Reset</button>
                          <button type="submit" className="btn btn-primary">Lưu</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Footer*/}
        <MyFooter></MyFooter>
      </div>
    )
  }
}
