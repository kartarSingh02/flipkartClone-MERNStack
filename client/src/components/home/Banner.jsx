import React from 'react';
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Image = styled('img')(({theme})=>({
    width:'100%',
    height:280,
    [theme.breakpoints.down('md')]:{
      height:180,
      objectFit:'cover'
    }
}))

function Banner() {
  return (
    <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        // showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
        {
            bannerData.map(data=>(
                <Image src={data.url} alt="banner"/>
            ))
        }
    </Carousel>
  )
}

export default Banner
