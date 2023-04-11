import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Select,
    useColorModeValue,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BaseURL } from '../../../BaseURL/BaseURL'
import axios from 'axios'
const AdminPageWomensEditProduct = () => {
    let {id} = useParams()
    const [data,setData] = useState()
    useEffect(()=>{
        axios.get(`${BaseURL}/womensproduct/${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    
    const [image,setImage] = useState(data?.image)
    const [title,setTitle] = useState("")
    const [color,setColor] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [discount,setDiscount] = useState("")
    const [lineThroughPrice,setLineThroughPrice] = useState("")
    const [quantity,setQuantity] = useState("")
    


    const handleSubmit = (e)=>{
      e.preventDefault()
      const obj = {
        "image" : image,
        "title" : title,
        "color" : color,
        "category" : category,
        "price" : +price,
        "discount" : +discount,
        "lineThroughPrice" : +lineThroughPrice,
        "quantity" : +quantity
      }
    //   axios({
    //     method : 'post',
    //     url : `${BaseURL}/mensProduct`,
    //     data : obj
    //   }).then(()=>alert("Product has been added")).catch((err)=>console.log(err))
    //   setImage("")
    //   setTitle("")
    //   setBrand("")
    //   setColor("")
    //   setCategory("")
    //   setPrice("")
    //   setDiscount("")
    //   setLineThroughPrice("")
    //   setQuantity("")
    // console.log(obj)
    }


  return (
    <Box>
    <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} width={{base:'100%',sm:'55%'}} py={12} px={6}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Image</FormLabel>
            <Input value={image || undefined} onChange={(e)=>setImage(e.target.value)}  type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Color</FormLabel>
            <Input  value={data?.color} onChange={(e)=>setColor(e.target.value)} type="text"   />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Title</FormLabel>
            <Input value={data?.title} onChange={(e)=>setTitle(e.target.value)} type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Category</FormLabel>
            <Select value={data?.category}  onChange={(e)=>setCategory(e.target.value)} >
              <option value='Lehnga' >Lehnga</option>
              <option value='Saree' >Saree</option>
              <option value='Suit' >Suit</option>
            </Select>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Price</FormLabel>
            <Input value={data?.price} onChange={(e)=>setPrice(e.target.value)} type="number"   />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Discount</FormLabel>
            <Input value={data?.discount} onChange={(e)=>setDiscount(e.target.value)} type="number"   />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Line Through Price</FormLabel>
            <Input value={data?.lineThroughPrice} onChange={(e)=>setLineThroughPrice(e.target.value)} type="number"   />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Quantity</FormLabel>
            <Input value={data?.quantity
            } onChange={(e)=>setQuantity(e.target.value)} type="number"   />
          </FormControl>
          <Stack spacing={10}>
            <Button
              onClick={handleSubmit}
              bg={'gray.700'}
              color={'white'}
              _hover={{
                bg: 'Gray.500'
              }}>Add Product
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </Box>
  )
}

export default AdminPageWomensEditProduct
