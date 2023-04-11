

import axios from "axios"
import {KIDS_PRODUCT_REQUEST,KIDS_PRODUCT_FAILURE,GET_KIDS_PRODUCT_SUCCESS,ADD_TO_CART_KIDS_PRODUCT_SUCCESS} from './actionType'
import { BaseURL } from "../../BaseURL/BaseURL"

export const getProductKids = (obj)=> (dispatch) =>{
    dispatch({type:KIDS_PRODUCT_REQUEST})
    axios.get(`${BaseURL}/kidsProduct`,obj)
    .then((res)=>dispatch({type:GET_KIDS_PRODUCT_SUCCESS , payload : res.data}))
    .catch((err)=>dispatch({type:KIDS_PRODUCT_FAILURE}))
}



export const  addToCart = (id)=>{
    axios.get(`${BaseURL}/kidsproduct/${id}`)
    .then((res)=>
    postData(res.data)
    )
  
    function postData(obj){
        axios({
        method : 'post',
        url : `${BaseURL}/key`,
        data : obj
        })
    }
}

