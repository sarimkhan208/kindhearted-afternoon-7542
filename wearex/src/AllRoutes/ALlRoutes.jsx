import {Routes , Route} from 'react-router-dom'
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import MensProduct from '../ProductPages/MensProduct'
import WomensProducts from '../ProductPages/WomensProduct'
import SingleProductPageMens from '../SingleProductPage/SingleProductPageMens'
import SingleProductPageWomens from '../SingleProductPage/SingleProductPageWomen'
import CartItem from '../AddtoCart/CartItem'



export default function AllRoutes(){
    return <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/mensproduct' element={<MensProduct/>} ></Route>
        <Route path='/womensproduct' element={<WomensProducts/>} ></Route>
        <Route path='/mensproduct/:id' element={<SingleProductPageMens/>} ></Route>
        <Route path='/womensproduct/:id' element={<SingleProductPageWomens/>} ></Route>
        <Route path='/cartitem' element={<CartItem/>} ></Route>
    </Routes>
    </>
}