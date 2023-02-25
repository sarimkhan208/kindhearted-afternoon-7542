import axios from "axios"
export const DeleteData = (id)=>{
    axios({
        method : 'delete',
        url : `http://localhost:8080/key/${id}`,
      })
}