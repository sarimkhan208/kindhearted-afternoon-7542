import { Box, Heading, SimpleGrid,Image,Flex ,Button , Center, Skeleton } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import AddToCartProductCard from './AddTocartPoductCart'
import axios from 'axios'
import LoadingSkeleton from "../Loading/Skeleton"
import { DeleteData } from "./DeleteData"
import {Link as RouterLink } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext"
import Footer from "../Footer/Footer"

export default function CartItem(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [flag,setFlag] = useState(false)
    
    const {total,setTotal} = useContext(AuthContext)
    


    const getData = ()=>{

      setLoading(true)
      axios.get(`http://localhost:8080/key`)
      .then((res)=>{
        res.data.length!=0?setData(res.data):setData(false)

      })
      setLoading(false)
    }
    

    


    useEffect(()=>{
      getData()
    },[flag])

    const HandleDelete = (id)=>{
      DeleteData(id)
      setFlag(true)
    }


    

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

    let sum=0

    if(data.length!==0){
      data?.map((el)=>sum+=Number(el.price))
      setTotal(sum)
    }

    
    
    



    return (
        <Box>
          <SimpleGrid gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)"}} >
              {data.map((el)=>(
                <AddToCartProductCard key={el.id} getId={HandleDelete}  quantity={el.quantity} image={el.image} id={el.id} title={el.title} price={el.price}/>
              ))}
          </SimpleGrid>
          <Center>
            <Flex direction={'column'} >
            <Heading>
              Grand Total : ₹{sum} 
            </Heading>
            <RouterLink to='/paymentpage' >
                <Button
                rounded={'none'}
                bg='gray.900'
                mb='25px'
                color='white'
                border='1px'
                borderColor = 'gray.900'
                _hover={{
                    bg : 'white',
                    color : 'gray.900',
                    border:'2px',
                    borderColor:'gray.900'
                  }}
                  fontWeight='bold'
                  width='100%'
                >Buy Now</Button>
            </RouterLink>
            
            </Flex>
          </Center>
          <Footer/>
        </Box>
    )
}