import React from 'react'
import { CART_FAILURE, CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_QUANTITY, } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case CART_REQUEST:
        return {...state , isLoading:true}
    case CART_FAILURE:
        return {...state , isLoading:false,isError:true}
    case GET_CART_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    case UPDATE_CART_QUANTITY :
        return {...state , }
    default : return state 
  }
}

export default reducer
