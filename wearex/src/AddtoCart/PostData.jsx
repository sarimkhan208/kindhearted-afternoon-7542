import axios from "axios"
import { BaseURL } from "../BaseURL/BaseURL";

export const  PostData = (id)=>{
  let category;
  if(id>=1 &&  id<=30){
    category="kidsproduct"
  }
  else if(id>=31 &&  id<=60){
    category="kitchenproduct"
  }
  if(id>=61 &&  id<=90){
    category="mensproduct"
  }
  if(id>=91 &&  id<=120){
    category="womensproduct"
  }
    axios.get(`${BaseURL}/${category}/${id}`)
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