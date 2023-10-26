import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box,Typography,Grid,styled} from '@mui/material'
import ActionItem from './ActionItem';

const Component = styled(Box)`
  background:#F2F2F2;
  margin-top:50px
`

const Container = styled(Grid)`
  background:#FFFFFF;
  display:flex;
`

const RightContainer = styled(Grid)`
  margin-top:50px
`

function DetailView() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const {loading , product} = useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    useEffect(() => {
      if(product && id !== product.id){
        dispatch(getProductDetails(id));
      }
    }, [dispatch,id,product,loading]);
    
  return (
    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={4} md={4} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5, color:'#878787'}}>8 ratings and 1 reviews
              <Box component='span'><img src={fassured} alt='fassured' style={{width:77, marginLeft:20}}/></Box>
            </Typography>
            <Typography component='span' style={{fontSize:28}}>₹{product.price.cost}</Typography>&nbsp;&nbsp;
            <Typography component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Typography>&nbsp;&nbsp;
            <Typography component='span' style={{color:'#388E3C'}}>{product.price.discount}</Typography>
          </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default DetailView
