import React, {useEffect} from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`

function Home() {

  const {products} = useSelector(state =>state.getProducts)
  console.log(products);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  

  return (
    <>
        <NavBar/>
        <Component>
            <Banner/>
            {/* only chaning the first one as its divided into tow things one slide and other advertisement */}
            <MidSlide products={products} title='Deals of the day' timer={true}/>
            <MidSection/>
            <Slide products={products} title='Top Picks' timer={false}/>
            <Slide products={products} title='Season sale' timer={false}/>
            <Slide products={products} title='Mens wear' timer={false}/>
            <Slide products={products} title='Accessories' timer={false}/>
            <Slide products={products} title='Shoes' timer={false}/>
            <Slide products={products} title='Recommended' timer={false}/>
            <Slide products={products} title="Editor's Choice" timer={false}/>
        </Component>
    </>
  )
}

export default Home
