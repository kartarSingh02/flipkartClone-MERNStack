import axios from 'axios';
import * as actionTypes from '../constants/productConstant'

const URL = 'http://localhost:8000'

export const getProducts =  () => async (dispatch) =>{
    try{
        const {data} = await axios.get(`${URL}/products`);
        // console.log(response);
        dispatch({type: actionTypes.GET_PRODUCT_SUCCESS, payload: data});
    }
    catch(error){
        // console.log('Error while getProducts api', error.message);
         dispatch({type: actionTypes.GET_PRODUCT_FAIL, payload: error.message});
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${URL}/product/${id}`);
        console.log(data);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data});
    }
    catch(error){
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}