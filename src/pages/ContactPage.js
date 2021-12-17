import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import Contact from '../components/Contact/Contact'

export default class ContactPage extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
     <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li className="active">/ Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
       <Contact></Contact>
     </div>
    )
  }
}
