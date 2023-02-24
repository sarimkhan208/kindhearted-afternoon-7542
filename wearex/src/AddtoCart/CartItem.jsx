import { Box, Heading, SimpleGrid,Image , Center, Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AddToCartProductCard from './AddTocartPoductCart'
import axios from 'axios'
import LoadingSkeleton from "../Loading/Skeleton"

export default function CartItem(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      axios.get(`http://localhost:8080/key`)
      .then((res)=>res.data.length!=0?setData(res.data):setData(false))
      setLoading(false)
    },[])

    if(loading){
      return <LoadingSkeleton/>
    }
    
    if(!data){
      return <Box>
        <Center>
        <Image width={{base:"80%",md:"25%"}} mt='10%' src='https://imgs.search.brave.com/5MCFjtWkk3lNM-JvIVfNSBCTMHlmMAxCrpNQ9rc5iLQ/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2hvcHBpbmct/YW5kLWVjb21tZXJj/ZS0yOC85MC9lbXB0/eV9jYXJ0LTUxMi5w/bmc' />
        </Center>
      </Box>
    }



    return (
        <Box>
          <SimpleGrid gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)"}} >
              {data.map((el)=>(
                <AddToCartProductCard key={el.id} quantity={el.quantity} image={el.image} id={el.id} title={el.title} price={el.price}/>
              ))}
          </SimpleGrid>
        </Box>
    )
}