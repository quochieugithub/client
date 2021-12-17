import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import rau4 from "../../../../images/banner/rau4.jpg";
import rau2 from "../../../../images/banner/rau2.jpg";
import rau3 from "../../../../images/banner/rau3.jpg";

export default class BannerMiddle extends Component {
  render() {
    return (
      <div className="li-static-banner" style={{ marginTop: -50 }}>
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center">
              <div className="single-banner">
                <Link to="#">
                  
                  <img src={rau4} alt="Banner1" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  
                  <img src={rau2} alt="Banner2" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  
                  <img src={rau3} alt="Banner3" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>
    );
  }
}
