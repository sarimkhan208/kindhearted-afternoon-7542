import React from 'react'
import { KIDS_PRODUCT_FAILURE,KIDS_PRODUCT_REQUEST,GET_KIDS_PRODUCT_SUCCESS } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case KIDS_PRODUCT_REQUEST:
        return {...state , isLoading:true}
    case KIDS_PRODUCT_FAILURE:
        return {...state , isLoading:false,isError:true}
    case GET_KIDS_PRODUCT_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer
