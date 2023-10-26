import React from 'react'
import {AppBar,Toolbar,Box, styled, Typography} from '@mui/material'

// Components import 
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom'

// This is to use to style the material UI, basically Override and where we want to use this style replace that MateiralUI into the name which we have given
const StyledHeader = styled(AppBar)`
    background: #2872f0;
    height:55px;
`

const Component = styled(Link)`
    margin-left: 12%;
    line-height:0;
    text-decoration:none;
    color:inherit;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`


// if we have to style the html tag then we have to put into '' and styling will be like objects ({})
const PlusImage=styled('img')({
    height: 10,
    width: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`
    margin:0 5% 0 auto;
`

function Header() {
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <Component to='/'>
                <img src={logoURL} alt="logo" style={{width:75}} />
                <Box style={{display:'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL} alt='sub-logo'/>
                </Box>     
            </Component>

        {/* search component */}
        <Search/>
        {/* Button Component */}
        <CustomButtonWrapper>
            <CustomButtons/>
        </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header
