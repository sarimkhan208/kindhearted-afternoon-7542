import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "./home.css"

import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickSlider extends Component{
  constructor(props){
    super(props)
  }
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
        
      <div>
        <Slider {...settings} className="hover-image">
        {
           this.props.images.map((el,i)=>(<div key={i} className="hover-image"  ><figure><img src={el} alt='name' className="hover-image" /></figure></div>))
        }
        </Slider>
      </div>
    );
  }
}



const sliderImages = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P5-Spykar-4070.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P6-Nike-Upto50.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P7-AX-3050.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P8-Budajeans-Starting499.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P9-MnS-Min30.jpg'

]