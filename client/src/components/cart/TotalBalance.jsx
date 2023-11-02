import { Box, Typography, styled } from '@mui/material'
import React,{useState,useEffect} from 'react'

const Header = styled(Box)`
    padding:15px 24px;
    background-color:#fff;
    border-bottom: 2px solid #f0f0f0;
`
const Heading = styled(Typography)`
    color:#878787;
    font-size:18px;
`

const Container = styled(Box)`
    background-color: #fff;
    padding: 15px 24px;
    & > p{
        margin-bottom: 15px;
    }
    & > h5 {
        margin-bottom:15px;
    }
`

const Price = styled(Box)`
    float:right;
`

const Discount = styled(Typography)`
    color:#388E3C;
    font-weight:600;
`

function TotalBalance({cartItems}) {
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);

    useEffect(() => {
      totalAmount();
    }, [cartItems])
    

    const totalAmount = () =>{
        let price = 0;
        let discount = 0;
        cartItems.forEach(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        })
        setPrice(price);
        setDiscount(discount);
    }


  return (
    <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price ({cartItems?.length} item)
                <Price component='span'>₹{price}</Price>
            </Typography>
            <Typography>Discount
                <Price component='span'>-₹{discount}</Price>
            </Typography>
            <Typography>Delievery Charges
                <Price component='span'>₹40</Price>
            </Typography>
            <Typography variant='h5'>Total Amount
                <Price component='span'>₹{price-discount + 40}</Price>
            </Typography>
            <Discount>You will save ₹{discount - 40} on this Order</Discount>
        </Container>
    </Box>
  )
}

export default TotalBalance
