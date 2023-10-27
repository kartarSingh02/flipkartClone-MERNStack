import React from 'react'
import {Box,Table,TableBody,TableCell,TableRow,Typography,styled} from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size:14px;
    & > p {
        font-size:14px
    }
    vertical-align: baseline;
    
`

const StyledBadge = styled(Badge)`
    color:#00CC00;
    font-size:15px;
    margin-top:8px;
    margin-right:4px
`

const TableText= styled(TableRow)`
    font-size:14px;
    & > td{
        font-size:14px;
        ${'' /* margin-top:10px; */}
        vertical-align: baseline;
        border:none;
    }
`


function ProductDetail({product}) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date= new Date(new Date().getTime() + (5* 24 * 60 * 60 * 1000))

  return (
    <>
        <Typography style={{fontWeight:600}}>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:3, color:'#878787'}}>8 ratings and 1 reviews
            <Box component='span'><img src={fassured} alt='fassured' style={{width:77, marginLeft:20}}/></Box>
        </Typography>
        <Typography component='span' style={{fontSize:28}}>₹{product.price.cost}</Typography>&nbsp;&nbsp;
        <Typography component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Typography>&nbsp;&nbsp;
        <Typography component='span' style={{color:'#388E3C'}}>{product.price.discount}</Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge/>Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography><StyledBadge/>Buy any product & get Rs. 150 Off on your next purchase of GeysersT&C</Typography>
            <Typography><StyledBadge/>Buy for 100 get ₹100 off your Next BuyT&C</Typography>
            <Typography><StyledBadge/>No cost EMI ₹7,333/month. Standard EMI also available</Typography>
            <Typography><StyledBadge/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <TableText>
                    <TableCell style={{color:'#878787'}}>Delievery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delievery by {date.toDateString()}</TableCell>
                </TableText>
                <TableText>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </TableText>
                <TableText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                    <TableCell >
                        <Box component='span' style={{color:'#2874f0'}}>Super ComNet</Box>
                        <Typography>GST Invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </TableText>
                <TableText>
                    <TableCell style={{color:'#878787'}} colSpan={2}>
                        <img src={adURL} alt='flipkartpoints' width={390}/>
                    </TableCell>
                </TableText>
                <TableText>
                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </TableText>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail
