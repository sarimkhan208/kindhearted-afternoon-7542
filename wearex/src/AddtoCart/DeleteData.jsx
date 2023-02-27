import axios from "axios"
import { BaseURL } from "../BaseURL/BaseURL"
export const DeleteData = (id)=>{
    axios({
        method : 'delete',
        url : `${BaseURL}/key/${id}`,
      })
}