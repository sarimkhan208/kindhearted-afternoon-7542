import { useEffect, useState } from "react"
import axios from "axios"

import { Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import ProductCard from "../ProductCards/ProductCardMens"
import Footer from "../Footer/Footer"
import LoadingSkeleton from '../Loading/Skeleton'
import ProductCardWomens from "../ProductCards/ProdctCardWomen"

export default function WomensProduct(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)


    function getData(){
        setLoading(true)
        axios.get(`http://localhost:8080/womensProduct`)
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


    return (
        <Box>
            <SimpleGrid gap="1px" gridTemplateColumns={{base:'repeat(2,1fr)' , md:'repeat(3 , 1fr)'}} >
            {
                    data.map((el)=>(
                        <ProductCardWomens key={el.id} id={el.id} image={el.image} title={el.title} 
                        price={el.price} category={el.category} product={"womensproduct"}  isNew={true} rating={4.2} numReviews={842} />
                    ))
                }
        </SimpleGrid>
        <Footer/>
        </Box>
    )


}
    
