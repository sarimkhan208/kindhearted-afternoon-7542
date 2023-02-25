import {useEffect, useState } from "react"
import axios from "axios"
import { Box, Button, Center, GridItem, SimpleGrid } from '@chakra-ui/react'
import ProductCardMens from '../ProductCards/ProductCardMens'
import Footer from "../Footer/Footer"
import LoadingSkeleton from '../Loading/Skeleton'
import ProductCardKids from "../ProductCards/ProductCardKids"
import ProductCardKitchen from "../ProductCards/ProductCardKitchen"


export default function KitchenProduct(){

    const [data,setData] = useState([])
    const [page , setPage] = useState(1)
    const [loading , setLoading] = useState(false)   

    function getData(page){
        setLoading(true)
        axios.get(`http://localhost:8080/kitchenproduct?_limit=9&_page=${page}`)
        .then((res)=>{
            let mydata = res.data
            setData(mydata)
            setLoading(false)
        })
    }

    const handleClick = (val)=>{
        setPage(page+val)
    }


    useEffect(()=>{
        getData(page)
    },[page])

    if(loading){
        return <LoadingSkeleton/>
    }



    return (<Box>
            <SimpleGrid gap="1px" gridTemplateColumns={{base:'repeat(2,1fr)' , md:'repeat(3 , 1fr)'}} >
                {
                    data.map((el)=>(
                        <ProductCardKitchen key={el.id} id={el.id} image={el.image} title={el.title} 
                        price={el.price} category={el.category}  isNew={true} rating={4.2} numReviews={842} product={"mensproduct"} />
                    ))
                }
            </SimpleGrid>
           <Center>
           <Button rounded={'none'}
                    onClick={()=>handleClick(-1)}
                    height={{base:"20px",md:"40px"}}
                    width={{base:"5px",md:"55px"}}
                    
                    bg='gray.900'
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
                      

                    >  Prev </Button>
            <Button 
                    mx='7px'
                    my='20px'
                    borderColor = 'gray.900'
                    border='2px'
                    bg='white'
                    rounded={'none'}
                    height={{base:"22px",md:"40px"}}
                    width={{base:"20px",md:"60px"}}
                    fontSize={{base:"10px",md:"18px"}}
                    color='gray.900'
                    _hover={{
                        bg : 'gray.900',
                        color : 'white',
                        
                        
                      }}
                   
                    >{page} 
                    </Button>
                    <Button rounded={'none'}
                    onClick={()=>handleClick(1)}
                    height={{base:"20px",md:"40px"}}
                    width={{base:"5px",md:"55px"}}
                    
                    bg='gray.900'
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
                      
                      

                    >Next</Button>
           </Center>
            <Footer/>
            
            </Box>)
    


}
    
