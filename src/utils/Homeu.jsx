import { Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navsidebar from './Navbar/Navsidebar';

const Homeu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000 // Set the interval between slides (in milliseconds)
      };
  return (
    <div>
        <Navsidebar/>
      {/* Your main content goes here */}
      <div style={{ padding: '20px' }}>
        <Typography variant="h4">Welcome to Grocery Store</Typography>
        <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="Image 1"  height='400 px' />
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" height='400 px'/>
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" height='400 px'/>
      </div>
    </Slider>
      </div>
    </div>
  )
}

export default Homeu
