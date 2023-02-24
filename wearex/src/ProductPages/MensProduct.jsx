import { useContext, useEffect, useState } from "react"
import axios from "axios"

import { Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import ProductCardMens from '../ProductCards/ProductCardMens'
import Footer from "../Footer/Footer"
import { AuthContext } from "../Context/AuthContext"
import LoadingSkeleton from '../Loading/Skeleton'


export default function MensProduct(){

    const [data,setData] = useState([])
    const [loading , setLoading] = useState(false)
    


    function getData(){
        setLoading(true)
        axios.get(`http://localhost:8080/mensProduct`)
        .then((res)=>{
            let mydata = res.data
            setData(mydata)
            setLoading(false)
        })
    }


    useEffect(()=>{
        getData()
    },[])

    if(loading){
        return <LoadingSkeleton/>
    }



    return (<Box>
            <SimpleGrid gap="1px" gridTemplateColumns={{base:'repeat(2,1fr)' , md:'repeat(3 , 1fr)'}} >
            {
                    data.map((el)=>(
                        <ProductCardMens key={el.id} id={el.id} image={el.image} title={el.title} 
                        price={el.price} category={el.category}  isNew={true} rating={4.2} numReviews={842} product={"mensproduct"} />
                    ))
                }
            </SimpleGrid>
            <Footer/>
            </Box>)
    


}
    
