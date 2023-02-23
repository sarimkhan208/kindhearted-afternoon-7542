import {Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MensProduct from '../Pages/MensProduct'
import SingleProductPage from '../Pages/SingleProductPage'
import WomensProducts from '../Pages/WomensProduct'





export default function AllRoutes(){
    return <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/mensproduct' element={<MensProduct/>} ></Route>
        <Route path='/womensproduct' element={<WomensProducts/>} ></Route>
        <Route path='/mensproduct/:id' element={<SingleProductPage/>} ></Route>
        <Route path='/womensproduct/:id' element={<SingleProductPage/>} ></Route>
    </Routes>
    </>
}