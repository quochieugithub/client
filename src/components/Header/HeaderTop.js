import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { actTokenRequest } from '../../redux/actions/auth'
import {startLoading, doneLoading} from '../../utils/loading'
import callApi from '../../utils/apiCaller'
import { toast } from 'react-toastify'

toast.configure()
let token;
class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      avatar: null,
      loading: false,
      img: null,
      oldPassword: '',
      password: '',
      rePassword: '',
      historyBooking: []
    }
  }


  async componentDidMount() {
    if(localStorage.getItem('_auth') != null){
      token = localStorage.getItem('_auth');
      const res = await callApi('users/me', 'GET', null, token);
      this.setState({
        name: res.data.results[0].name
      });
      // window.location.reload();
      // startLoading();
    }
  }

  handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const img = event.target.files[0];
      this.setState(() => ({ img }));
    }
    const output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // startLoading();
      // window.location.reload();
  }
   
  logOut = async () => {
    localStorage.removeItem('_auth');
    const token = null;
    startLoading();
    await this.props.setTokenRedux(token);
    doneLoading();
  }

  loadingPage = () => {
    startLoading();
    doneLoading();
  }

  render() {
    const { user } = this.props;
    const { name, avatar } = this.state;
    return (
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="header-top-left">
                <ul className="phone-wrap">
                  <li><span>Số điện thoại:</span><a href="/">(+84) 123 456 171</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="header-top-right">
                <ul className="ht-menu">
                  <li>
                    {
                      (!user) ? <Link onClick={()=>this.loadingPage()} to="/login-register" className="fix-link-color language-selector-wrapper"><i className="fa fa-user-o" />Đăng nhập </Link> :
                        <div className="dropdown show">
                          <Link to="#" className=" fix-link-color dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {name}
                            <img id="output" className="fix-img" src={avatar || 'https://i.ibb.co/NCdx7FF/avatar-Default.png'} alt="not found" />
                          </Link>
                          <div className="fix-text-item dropdown-menu ht-setting-list " aria-labelledby="dropdownMenuLink">
                            <Link className="fix-text-item dropdown-item" to="/profile">Hồ sơ</Link>
                            <Link onClick={this.logOut} to="/login-register" className="fix-text-item dropdown-item" href="/">Đăng xuất</Link>
                          </div>
                        </div>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTokenRedux: (token) => {
      dispatch(actTokenRequest(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop)
