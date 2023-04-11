import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRouteAdmin({children}){
    const {adminIsAuth} = useContext(AuthContext)
    if(adminIsAuth){
        return children
    }else{
        return <Navigate to='/adminlogin' />
    }
}