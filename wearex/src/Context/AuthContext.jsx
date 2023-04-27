// import { createContext, useState } from "react"
// import { Navigate } from "react-router-dom"

// export const AuthContext = createContext()

// export default function AuthContextProvider({children}){


//     const [isAuth , setIsAuth] = useState(false)
//     const [product,setProduct] = useState("")
//     const [total , setTotal] = useState(0)
//     const [adminIsAuth,setAminIsAuth] = useState(false)

    
//     const login =()=>{
//         setIsAuth(true)
//     }
//     const logout = () =>{
//         setIsAuth(false)
//     }
//     const AdminLogin = ()=>{
//         setAminIsAuth(true)
//     }




//     return <AuthContext.Provider value={{isAuth , login,adminIsAuth,AdminLogin , logout,product,setProduct,total,setTotal}} >
//         {children}
//     </AuthContext.Provider>
// }


import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()

export const  AuthContextProvider = ({children})=>{
    const [isAuth , setIsAuth] = useState(false)
    const [adminIsAuth,setAminIsAuth] = useState(false)
    const [displayName,setDisplayName] = useState("")


    const googleSignIn = async ()=>{
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth,provider)
        auth.onAuthStateChanged((user)=>{
            if(user){
                setDisplayName(user.displayName)
            }else{
                setDisplayName("")
            }
        })
        setIsAuth(true)
        setAminIsAuth(true)
    }


    const googleSignOut = ()=>{
        signOut(auth).then(() => {
            console.log("Sign Out Successfull")
            setIsAuth(false)
            setAminIsAuth(false)
        }).catch((error) => {
            console.log("Error Occured in SignOut Context",error)
        });
    }


    return <AuthContext.Provider value={{googleSignIn,googleSignOut,isAuth,adminIsAuth,setDisplayName,displayName,setIsAuth}}>
        {children}
    </AuthContext.Provider>
}


