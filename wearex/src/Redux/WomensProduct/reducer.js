import React from 'react'
import { GET_WOMENS_PRODUCT_SUCCESS, WOMENS_PRODUCT_FAILURE, WOMENS_PRODUCT_REQUEST } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case WOMENS_PRODUCT_REQUEST:
        return {...state , isLoading:true}
    case WOMENS_PRODUCT_FAILURE:
        return {...state , isLoading:false,isError:true}
    case GET_WOMENS_PRODUCT_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer
