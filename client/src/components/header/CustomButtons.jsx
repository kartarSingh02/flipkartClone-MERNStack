import { Box, Button, Typography, styled } from '@mui/material';
import React, {useContext, useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    margin: '0 3% 0 auto',
    '& > *' :{
        marginRight: 40,
        fontSize:16,
        alignItems:'center'
    },
    [theme.breakpoints.down('md')]:{
        display: 'block',
    }
}))


const Container = styled(Box)(({theme})=>({
       display:'flex',
       [theme.breakpoints.down('md')]:{
            display: 'block',
       }
}))
 

const LoginButton = styled(Button)`
    color: #2874f0;
    background:#fff;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 3px;
    box-shadow:nonw;
    font-weight:600;
    height: 32px;

    &:hover{
        background: #FB641B;
        color:#fff
    }
`


function CustomButtons() {
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const OpenDialog = () =>{
        setOpen(true)
    }

  return (
    <Wrapper>
    {
        account ? <Profile account={account} setAccount={setAccount}/> : 
        <LoginButton variant='contained' onClick={()=> OpenDialog()}>Login</LoginButton>
    }
        
        <Typography style={{ marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{ marginTop: 3}}>More</Typography>

        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons
