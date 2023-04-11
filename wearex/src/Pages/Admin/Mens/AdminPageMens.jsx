import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid,Text,Image, HStack, Button, Center } from '@chakra-ui/react'
import axios from "axios"
import { BaseURL } from "../../../BaseURL/BaseURL"
import { Link } from 'react-router-dom'

const AdminPageMens = () => {

    const [data,setData] = useState([])

    
    const  getMensProduct = ()=>{
        axios.get(`${BaseURL}/mensProduct`)
        .then((res)=>setData([...res.data]))
        .catch((err)=>console.log(err))
    }

    const handleDelete = (id)=>{
        axios({
            method : 'delete',
            url : `${BaseURL}/mensProduct/${id}`,
        }).then(()=>getMensProduct()).catch((err)=>console.log(err))
    }

    const handleEdit = (id)=>{
        console.log(id)
    }

    useEffect(()=>{
        getMensProduct()
    },[])
  return (
    <Box>
        <Link to='/adminpagemensaddproduct' ><Button ml={'90%'} my={4} bg={'green.300'} >Add Product</Button></Link>
        <SimpleGrid pl={2} gridTemplateColumns={{base:'repeat(2,1fr)' , sm:'repeat(4,1fr)'}} gap={{base:'0px',sm:'15px'}} >
                    {
                        data?.map((el)=>(
                            <Box
                                key={el.id}
                                w={{base : "170px",  sm : "320px"}}
                                h={{base : "360px" , sm : "490px"}}
                                textAlign={'center'}
                                mb={10}
                                cursor={'pointer'}>
                                <Box width={'100%'} height={{base : 240 , sm : 360}} >
                                <Image width={'100%'} height={'100%'} src={el.image} alt='tees' />
                                </Box>

                                <Box fontFamily={'unset'} >
                                <Text mt={2} fontWeight={'semibold'} fontSize={{base:'15px',sm:'15px'}} color='#D5A249'>{el.brand}</Text>
                                <Text fontSize={'14px'} my={1} >{el.title}</Text>

                                <Box display={{base:'block',sm:'flex'}} justifyContent={'center'} >
                                    <Text fontWeight={'semibold'} >Rs. {el.price}</Text>
                                    <Text mx={2} textDecoration={'line-through'} >{el.lineThroughPrice}</Text>
                                    <Text color='#D5A249' >({el.discount}%off)</Text>
                                </Box>
                                <Center mt={3}>
                                    <HStack>
                                        <Link to={`/adminpagemenseditproduct/${el.id}`} ><Button color={'white'} height={'30px'} bg={'green.600'} >Edit</Button></Link>
                                        <Button onClick={()=>handleDelete(el.id)}  color={'white'} height={'30px'} bg={'red.600'} >Delete</Button>
                                    </HStack>
                                </Center>

                                </Box>
                            </Box>))
                    }
        </SimpleGrid>
    </Box>
  )
}

export default AdminPageMens
