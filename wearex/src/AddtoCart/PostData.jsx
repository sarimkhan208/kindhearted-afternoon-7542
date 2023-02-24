import axios from "axios"

export const  PostData = (id)=>{
    axios.get(`http://localhost:8080/mensproduct/${id}`)
    .then((res)=>
      postData(res.data)
    )

    function postData(obj){
        axios({
          method : 'post',
          url : `http://localhost:8080/key`,
          data : obj
        })
      }
}