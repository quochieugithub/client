import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
toast.configure()

class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: ''
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { password, repassword } = this.state;
    if (password !== repassword){
      toast.error('Mật khẩu không chính xác.')
      return 
    }
    if (password.length < 6 || password.length > 32) {
      toast.error('Mật khẩu phải có từ 6-23 kí tự.');
      return
    }
    // const newName = (name !== null)  ? name : ''
    // const user = {
    //   name: newName,
    //   email,
    //   password,
    // }
    // startLoading();
    // await this.props.registerRequest(user);
    // this.setState({
    //   name: '',
    //   email: '',
    //   password: '',
    //   repassword: ''
    // })
    
    // doneLoading();
  }

  render() {
    // const { email } = this.state;
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ padding: 55, margin: 'auto' }}>
            {/* Login Form s*/}
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className="login-form fix-border-rspw">
                <h3 className="login-title" style={{ textAlign: 'center' }}>ĐẶT LẠI MẬT KHẨU</h3>
                <div className="row">
                  <div className="col-md-12 col-12 mb-20">
                    <label>Mậu khẩu</label>
                    <input onChange={this.handleChange} className="mb-0" type="password" name="password" placeholder="Mật khẩu" />
                  </div>
                  <div className="col-md-12 col-12 mb-20">
                    <label>Nhập lại mật khẩu </label>
                    <input onChange={this.handleChange} className="mb-0" type="password" name="repassword" placeholder="Xác nhận mật khẩu" />
                  </div>
                  <div className="col-md-4">
                    <button onClick={this.changePassword} className="register-button mb-3 fix-button-resetpw">Đặt lại mật khẩu</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerRequest: (user) => {
//       dispatch(actRegisterRequest(user))
//     }
//   }
// }

export default connect(null)(Change)

