import { Box, Button, Typography, styled } from '@mui/material';
import React, {useContext, useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        // fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const Container = styled(Box)(({theme})=>({
       display:'flex',
       [theme.breakpoints.down('md')]:{
            display: 'block',
       }
}))
 

const LoginButton = styled(Button)`
    color: #fff;
    background:#FB641B;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 3px;
    box-shadow:nonw;
    font-weight:600;
    height: 32px;

    &:hover {
        background-color: #FFA24B;
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
