import {Routes , Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Login from './Pages/Login'
import MensProduct from './Pages/Mens/MensProduct'
import WomensProducts from './Pages/Womens/WomensProduct'
import SingleProductPageMens from './Pages/Mens/MensSingleProductPage'
import SingleProductPageWomens from './Pages/Womens/WomenSingleProductPage'
import CartItem from './Pages/AddtoCart/CartItem'
import KidsProduct from './Pages/Kids/KidsProduct'
import KidsSingleProductPage from './Pages/Kids/KidsSingleProductPage'
import PaymentPage from './Pages/PaymentPage'
import OrderPlaced from './Pages/OrderPlaced'
import AdminPage from './Pages/Admin/AdminPage'

import AdminPageMens from './Pages/Admin/Mens/AdminPageMens'
import AdminPageMensAddProduct from './Pages/Admin/Mens/AdminPageMensAddProduct'
import AdminPageMensEditProduct from './Pages/Admin/Mens/AdminPageMensEditProduct'

import AdminPageWomens from './Pages/Admin/Womens/AdminPageWomens'
import AdminPageWomensAddProduct from './Pages/Admin/Womens/AdminPageWomensAddProduct'
import AdminPageWomensEditProduct from './Pages/Admin/Womens/AdminPageWomensEditProduct'

import AdminLogin from './Pages/AdminLogin'
import PrivateRouteAdmin from './Context/PrivateRouteAdmin'
import PrivateRoute from './Context/PrivateRoute'
import SignUp from './Pages/SignUp'

export default function AllRouting(){
    return <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>

        <Route path='/mensproduct' element={<MensProduct/>} ></Route>
        <Route path='/mensproduct/:id' element={<SingleProductPageMens/>} ></Route>

        
        <Route path='/womensproduct' element={<WomensProducts/>} ></Route>
        <Route path='/womensproduct/:id' element={<SingleProductPageWomens/>} ></Route>


        <Route path='/kidsproduct' element={<KidsProduct/>} ></Route>
        <Route path='/kidsproduct/:id' element={<KidsSingleProductPage/>}></Route>

        <Route path='/adminpage' element={<PrivateRouteAdmin>{<AdminPage/>}</PrivateRouteAdmin>} ></Route>
        <Route path='/adminpagemens' element={<AdminPageMens/>} ></Route>
        <Route path='/adminpagemensaddproduct' element={<AdminPageMensAddProduct/>} ></Route>
        <Route path='/adminpagemenseditproduct/:id' element={<AdminPageMensEditProduct/>} ></Route>
        <Route path='/adminpagemenseditproduct/:id' element={<AdminPageMensEditProduct/>} ></Route>
        
        <Route path='/adminpagewomens' element={<AdminPageWomens/>} ></Route>
        <Route path='/adminpagewomensaddproduct' element={<AdminPageWomensAddProduct/>} ></Route>
        <Route path='/adminpagewomenseditproduct/:id' element={<AdminPageWomensEditProduct/>} ></Route>
        <Route path='/adminpagewomenseditproduct/:id' element={<AdminPageWomensEditProduct/>} ></Route>

        
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/adminlogin' element={<AdminLogin/>} ></Route>

        <Route path='/cartitem' element={<CartItem/>} ></Route>
        <Route path='/paymentpage' element={<PrivateRoute>{<PaymentPage/>}</PrivateRoute>}></Route>

        <Route path='/orderplaced' element={<OrderPlaced/>} ></Route>
        
    </Routes>
    </>
}