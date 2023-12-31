import React from 'react';
import {Box, Grid, Typography,Button, styled} from '@mui/material'
import {useSelector} from 'react-redux'
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';


const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0px'
    }
}))


const Header = styled(Box)`
    padding:15px 24px;
    background-color:#fff;
`

const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background-color:#fff;
    border-top:1px solid #f0f0f0;
    box-shadow:0 -2px 10px 0 rgba(0 0 0 / 10%);
`

const StyledButton = styled(Button)`
    display:flex;
    margin-left:auto;
    background-color:#FB641B;
    color:#fff;
    height:40px;
    width:250px;
    border-radius:2;

    &:hover{
        background: #FF7E3E;
        color:white;
        box-shadow:1 1 1 1 #000
    }
`

const LeftContainer = styled(Grid)(({theme})=>({
        paddingRight:15,
        [theme.breakpoints.down('md')]:{
            paddingBottom:10,
        }
}))


function Cart() {
    const {cartItems} = useSelector(state => state.cart)

  return (
    <>
        {
            cartItems.length > 0 ?
            <Container container>
                <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontSize:18, fontWeight:600}}>Cart Items({cartItems.length})</Typography>
                    </Header>
                        {
                            cartItems.map(item =>(
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper>
                </LeftContainer>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalBalance cartItems={cartItems}/>
                </Grid>
            </Container>
            :
            <EmptyCart />
        }
    </>
  )
}

export default Cart
