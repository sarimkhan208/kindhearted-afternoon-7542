

import axios from "axios"
import { ADD_TO_CART_MENS_PRODUCT_SUCCESS, GET_MENS_PRODUCT_SUCCESS, MENS_PRODUCT_FAILURE, MENS_PRODUCT_REQUEST } from "./actionType"
import { BaseURL } from "../../BaseURL/BaseURL"

export const getProductMens = (obj)=> (dispatch) =>{
    dispatch({type:MENS_PRODUCT_REQUEST})
    axios.get(`${BaseURL}/mensProduct`,obj)
    .then((res)=>dispatch({type:GET_MENS_PRODUCT_SUCCESS , payload : res.data}))
    .catch((err)=>dispatch({type:MENS_PRODUCT_FAILURE}))
}



export const  addToCart = (id)=>{
    axios.get(`${BaseURL}/mensproduct/${id}`)
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

