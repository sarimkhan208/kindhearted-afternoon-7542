

import axios from "axios"
import { GET_WOMENS_PRODUCT_SUCCESS, WOMENS_PRODUCT_FAILURE, WOMENS_PRODUCT_REQUEST } from "./actionType"
import { BaseURL } from "../../BaseURL/BaseURL"

export const getProductWomens = (obj)=> (dispatch) =>{
    dispatch({type:WOMENS_PRODUCT_REQUEST})
    axios.get(`${BaseURL}/womensProduct`,obj)
    .then((res)=>dispatch({type:GET_WOMENS_PRODUCT_SUCCESS , payload : res.data}))
    .catch((err)=>dispatch({type:WOMENS_PRODUCT_FAILURE}))
}


export const  addToCart = (id)=>{
    axios.get(`${BaseURL}/womensproduct/${id}`)
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