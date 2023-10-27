import { Box, Button, styled } from '@mui/material'
import React from 'react';
import {ShoppingCart as Cart , FlashOn as Flash} from '@mui/icons-material';

const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding:'40px 0 0 80px',
  [theme.breakpoints.down('md')]:{
    padding:'20px 40px'
  }
}))



const Image =styled('img')({
    padding:'15px'
})

const StyledButton = styled(Button)(({theme})=>({
    width:'48%',
    height:40,
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
      width:'46%'
    },
    [theme.breakpoints.down('s')]:{
      width:'48%',
    }
}))


function ActionItem({product}) {
  return (
    <LeftContainer>
    <Box>
        <Image src={product.detailUrl} alt='productImage' style={{padding:'15px 20px',border:'1px solid #f0f0f0',width:'90%'}}/>
    </Box>
        <StyledButton variant='contained' style={{marginRight:10,backgroundColor: '#ff9f00'}}><Cart />Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{backgroundColor:'#fb541b'}}><Flash />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
