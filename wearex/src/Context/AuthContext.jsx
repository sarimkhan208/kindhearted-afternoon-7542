import { createContext, useState } from "react"
import { Navigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthContextProvider({children}){


    const [isAuth , setIsAuth] = useState(false)
    const [product,setProduct] = useState("")

    
    const login =()=>{
        setIsAuth(true)
    }
    const logout = () =>{
        setIsAuth(false)
    }




    return <AuthContext.Provider value={{isAuth , login , logout,product,setProduct}} >
        {children}
    </AuthContext.Provider>
}