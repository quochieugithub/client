import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import Profile from '../components/Profile/Profile'
export default class ProfilePage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li className="active">/ Hồ sơ</li>
            </ul>
          </div>
        </div>
      </div>
        <Profile></Profile>
      </div>
    )
  }
}
