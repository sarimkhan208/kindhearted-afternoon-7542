import React from 'react'
import { MENS_REQUEST,MENS_FAILURE,GET_MENS_SUCCESS } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case MENS_REQUEST:
        return {...state , isLoading:true}
    case MENS_FAILURE:
        return {...state , isLoading:false,isError:true}
    case GET_MENS_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer
