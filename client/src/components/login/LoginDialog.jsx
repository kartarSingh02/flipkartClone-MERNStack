import React,{useState} from 'react';
import {Box, Button, Dialog, TextField, Typography,styled} from '@mui/material';


const Component = styled(Box)`
    height:70vh;
    width:90vh;
    display:flex;
`

const Image=styled(Box)`
    background:#2872f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:40%;
    padding:45px 30px;
    & > p , & > h5{
        color:white;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding: 35px 25px;
    flex:1;
    & > div, & > button,& > p {
        margin-top:20px
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color:#2872f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccount = styled(Typography)`
    font-size:14px;
    color:#2872f0;
    cursor:pointer;
    text-align:center;
    font-weight:600
`
const accountInitialValues = {
    Login :{
        view:'login',
        heading:"Login",
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    SignUp :{
        view:'signup',
        heading:"Looks like you are new here!",
        subHeading:'Signup with your information to get started'
    }
}

function LoginDialog({open,setOpen}) {

    const [account, toggleAccount] = useState(accountInitialValues.Login)

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.Login);
    }

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.SignUp);
    }
    // checking 
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}>
        <Component>
            <Image>
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>
            { account.view==='login' ?
                <Wrapper>
                    <TextField variant='standard' label='Enter Email/Phone Number'></TextField>
                    <TextField variant='standard' label='Enter Password'></TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request Otp</RequestOTP>
                    <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
            
                :
                <Wrapper>
                    <TextField variant='standard' label='Enter Firstname'></TextField>
                    <TextField variant='standard' label='Enter Lastname'></TextField>
                    <TextField variant='standard' label='Enter Username'></TextField>
                    <TextField variant='standard' label='Enter Contact number'></TextField>
                    <TextField variant='standard' label='Enter Email'></TextField>
                    <TextField variant='standard' label='Enter Password'></TextField>
                    <LoginButton>Signup</LoginButton>
                </Wrapper>
            }
        </Component>
    </Dialog>
  )
}

export default LoginDialog
