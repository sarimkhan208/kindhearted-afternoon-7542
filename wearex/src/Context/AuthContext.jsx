import { createContext, useState } from "react"
import { Navigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthContextProvider({children}){


    const [isAuth , setIsAuth] = useState(false)
    const login =()=>{
        setIsAuth(true)
        {<Navigate to='/' />}
    }
    const logout = () =>{
        setIsAuth(false)
    }




    return <AuthContext.Provider value={{isAuth , login , logout}} >
        {children}
    </AuthContext.Provider>
}