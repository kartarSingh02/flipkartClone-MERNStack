 import React from 'react'
 import { Box, Button, Typography, styled } from '@mui/material'
 import {addEllipsis} from '../../utils/common-utils'

 import GroupedButton from './GroupedButton'

 const Component= styled(Box)`
    border-top:2px solid #f0f0f0;
    display:flex;
    background-color:#fff;
 `

 const LeftContainer = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
    
 `

 const SmallText = styled(Typography)`
    font-size:14px;
    color:#878787;
    margin-top:8px;
`

const Remove = styled(Button)`
    margin-top:20px;
    color:#000;
    font-size:16px;
    font-weight:600;
`

 function CartItem({item}) {
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
   return (
     <Component>
       <LeftContainer >
            <img src={item.url} alt='productImage' style={{height:110, width:110}}/>
            <GroupedButton />
       </LeftContainer>
       <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller: RetailNet 
                <Box component='span'><img src={fassured} style={{width:50,marginLeft:10 }}/></Box>
            </SmallText>
            <Typography style={{margin:'8px 0'}}>
                <Box component='span' style={{fontWeight:600, fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;
                <Box component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;
                <Box component='span' style={{color:'#388E3C'}}>{item.price.discount}</Box>
            </Typography>
            <Remove>Remove</Remove>
       </Box>
     </Component>
   )
 }
 
 export default CartItem
 