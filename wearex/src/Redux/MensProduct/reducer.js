import React from 'react'
import { GET_MENS_PRODUCT_SUCCESS, MENS_PRODUCT_FAILURE, MENS_PRODUCT_REQUEST } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case MENS_PRODUCT_REQUEST:
        return {...state , isLoading:true}
    case MENS_PRODUCT_FAILURE:
        return {...state , isLoading:false,isError:true}
    case GET_MENS_PRODUCT_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer
