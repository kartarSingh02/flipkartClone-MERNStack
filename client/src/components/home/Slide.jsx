import React from "react";
import Carousel from "react-multi-carousel";
import { Box,Button,Divider,Typography,styled } from "@mui/material";
import Countdown from 'react-countdown';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
    margin-top:10px
`

const Deal = styled(Box)`
    padding: 15px 20px;
    display:flex;
`

const DealText = styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
`

const Timer = styled(Box)`
    display:flex;
    margin-left:10px;
    align-items: center;
    color: #7f7f7f
`

const ViewAllButton = styled(Button)`
    margin-left:auto;
    background:#2872f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600
`

const Image = styled('img')({
    width:'auto',
    height:150, 
})

const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
`

function Slide({ products,title,timer }) {

    const renderer=({hours, minutes , seconds})=>{
        return <Box span='variant'>{hours} : {minutes} : {seconds} left</Box>
    }
  return (
    <Component>
        <Deal>
            <DealText>{title}</DealText>
            {
                timer && 
                    <Timer>
                        <img src={'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'} alt="timerImage"/>
                        <Countdown  date={Date.now() + 5.04e+7} renderer={renderer}></Countdown>
                    </Timer>
            }
            <ViewAllButton variant="contained" color="primary">View all</ViewAllButton>
        </Deal>
        <Divider/>
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
            centerMode={true}
            >
            {products.map((product) => (
                <Box textAlign='center' style={{padding:'25px 15px'}}>
                    <Image src={product.url} alt="productImage" />
                    <Text style={{color:'black',fontWeight:600}}>{product.title.shortTitle}</Text>
                    <Text style={{color:'green'}}>{product.discount}</Text>
                    <Text style={{colot:'#212121',opacity:0.6}}>{product.tagline}</Text>
                </Box>
            ))}
    </Carousel>
    </Component>
  );
}

export default Slide;
