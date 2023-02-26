import {Routes , Route} from 'react-router-dom'
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import MensProduct from '../ProductPages/MensProduct'
import WomensProducts from '../ProductPages/WomensProduct'
import SingleProductPageMens from '../SingleProductPage/SingleProductPageMens'
import SingleProductPageWomens from '../SingleProductPage/SingleProductPageWomen'
import CartItem from '../AddtoCart/CartItem'
import KidsProduct from '../ProductPages/KidsProduct'
import KitchenProduct from '../ProductPages/KitchenProduct'
import SingleProductPageKids from '../SingleProductPage/SingleProductPageKids'
import SingleProductPageKitchen from '../SingleProductPage/SingleProductPageKitchen'
import PaymentPage from '../PaymentPage/PaymentPage'
import OrderPlaced from '../AddtoCart/OrderPlaced'



export default function AllRoutes(){
    return <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>

        <Route path='/kidsproduct' element={<KidsProduct/>} ></Route>
        <Route path='/kitchenproduct' element={<KitchenProduct/>} ></Route>
        <Route path='/mensproduct' element={<MensProduct/>} ></Route>
        <Route path='/womensproduct' element={<WomensProducts/>} ></Route>

        <Route path='/mensproduct/:id' element={<SingleProductPageMens/>} ></Route>
        <Route path='/womensproduct/:id' element={<SingleProductPageWomens/>} ></Route>
        <Route path='/kidsproduct/:id' element={<SingleProductPageKids/>} ></Route>
        <Route path='/kitchenproduct/:id' element={<SingleProductPageKitchen/>}></Route>

        <Route path='/cartitem' element={<CartItem/>} ></Route>
        <Route path='/paymentpage' element={<PaymentPage/>} ></Route>

        <Route path='/orderplaced' element={<OrderPlaced/>} ></Route>
    </Routes>
    </>
}