

import axios from "axios"

import { BaseURL } from "../../BaseURL/BaseURL"
import { GET_MENS_SUCCESS, MENS_FAILURE, MENS_REQUEST } from "./actionType"


export const getData = (dispatch) =>{
    dispatch({type:MENS_REQUEST})
    axios.get(`${BaseURL}/mensproduct`)
    .then((res)=>dispatch({type:GET_MENS_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:MENS_FAILURE}))
}


// export const  addToCart = (id)=>{
//     axios.get(`${BaseURL}/womensproduct/${id}`)
//     .then((res)=>
//     postData(res.data)
//     )
  
//     function postData(obj){
//         axios({
//         method : 'post',
//         url : `${BaseURL}/key`,
//         data : obj
//         })
//     }
// }

// export const getCartData = (dispatch)=>{
//     dispatch({type:CART_REQUEST})
//     axios.get(`${BaseURL}/key`)
//     .then((res)=>dispatch({type:GET_CART_SUCCESS,payload:res.data}))
//     .catch((err)=>dispatch({type:CART_FAILURE}))
// }


// export const deleteCartItem = (id)=>{
//     return axios({
//         method : 'delete',
//         url : `${BaseURL}/key/${id}`,
//     })
// }

// export const updateQuantity = (value,id)=>{
//     const data = {
//         quantity : value
//     }
//     return axios({
//         method : 'patch',
//         url : `${BaseURL}/key/${id}`,
//         data : data
//     })
// }
