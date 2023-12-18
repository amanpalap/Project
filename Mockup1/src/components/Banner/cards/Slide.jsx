import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';


function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className='h-44'>
        <Slider {...settings}>
          <div className=''>
            <Card/>
          </div>
          <div>
          <Card/>
          
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
        </Slider>
      </div>
  )
}

export default Slide
