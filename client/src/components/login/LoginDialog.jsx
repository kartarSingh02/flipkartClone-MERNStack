import React,{useContext, useState} from 'react';
import {Box, Button, Dialog, TextField, Typography,styled} from '@mui/material';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height:70vh;
    width:90vh;
    display:flex;
`

const Image=styled(Box)`
    background:#2872f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:30%;
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

const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-bottom:5px;
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

const signupInitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    contact:'',
    email:'',
    password:''
}

const loginInitialValues = {
    username:'',
    password:''
}

function LoginDialog({open,setOpen}) {

    const [account, toggleAccount] = useState(accountInitialValues.Login)
    const [signup, setSignup] = useState(signupInitialValues)
    const {setAccount} = useContext(DataContext)
    const [login,setLogin] = useState(loginInitialValues)
    const [error , setError] = useState(false)

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.Login);
        setError(false)
    }

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.SignUp);
    }

    const onInputChange = (e) =>{
        setSignup({...signup , [e.target.name] : e.target.value })
        // console.log(signup);
    }

    const signupUser = async () =>{
        let response=await authenticateSignup(signup)
        // console.log(response);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
        
    }

    const onValueChange = (e)=>{
        setLogin({...login, [e.target.name] : e.target.value})
    }

    const loginUser = async ()=> {
        let response = await authenticateLogin(login)
        console.log(response)
        if( response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname)
        }
        else{
            setError(true)
        }
    }
     
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}>
        <Component>
            <Image>
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>
            { account.view==='login' ?
                <Wrapper>
                    {error && <Error>Please enter valid credentials</Error>}
                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name="username" label='Enter Username'></TextField>
                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name="password" type='password' label='Enter Password'></TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={() => {loginUser()}}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request Otp</RequestOTP>
                    <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
            
                :
                <Wrapper>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label='Enter Firstname'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label='Enter Lastname'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username" label='Enter Username'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="contact" label='Enter Contact number'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label='Enter Email'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label='Enter Password'></TextField>
                    <LoginButton onClick={()=> signupUser()}>Signup</LoginButton>
                </Wrapper>
            }
        </Component>
    </Dialog>
  )
}

export default LoginDialog
