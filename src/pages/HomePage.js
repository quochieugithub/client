import React, { Component } from 'react'
import Slider from '../components/HomePage/Slider/Slider'
import Product from '../components/HomePage/Content/ProductNew/Product'
import BannerMiddle from '../components/HomePage/Content/BannerMiddle/BannerMiddle'
import StaticHomeQC from '../components/HomePage/Content/StaticHomeQC/StaticHomeQC'
import TrenddingProduct from '../components/HomePage/Content/TrenddingProduct/TrenddingProduct'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Slider></Slider>
                <Product></Product>
                <BannerMiddle></BannerMiddle>
                <StaticHomeQC></StaticHomeQC>
                <TrenddingProduct></TrenddingProduct>
            </div>
        )
    }
}
