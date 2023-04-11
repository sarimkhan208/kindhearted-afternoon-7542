import { Box, Heading, SimpleGrid,Image,Button , Center, HStack, Text, Icon, useToast } from "@chakra-ui/react"
import {useEffect, useState } from "react"
import AddToCartProductCard from './AddTocartPoductCart'
import LoadingSkeleton from "../../Loading/Skeleton"
import Footer from "../../Components/Footer"
import { deleteCartItem, getCartData, updateQuantity } from "../../Redux/Cart/action"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {RiDeleteBin6Line} from 'react-icons/ri'
import { UPDATE_CART_QUANTITY } from "../../Redux/Cart/actionType"
export default function CartItem(){


  const toast = useToast()
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.cartReducer.data)

    const [loading,setLoading] = useState(false)
    const [flag,setFlag] = useState(false)
    let sum = 0,gst=0,grandTotal
    if(data){
      for(let i=0; i<data.length; i++){
        sum+=Number(data[i].price*data[i].quantity)
      }
      gst = (sum*18)/100
      grandTotal = Math.floor(sum+gst)
    }
    
    useEffect(()=>{
      dispatch(getCartData)
    },[flag])

    const handleDelete = (id)=>{
      
      deleteCartItem(id).then(()=>dispatch(getCartData))
      toast({
        title: 'Item Deleted from the Cart.',
        description: "Your item has been Deleted from your cart",
        status: 'error',
        position : 'top',
        duration: 3000,
        isClosable: true,
      })
      setFlag(!flag)
    }
    const handleUpdateQty = (value,id) =>{
      value = Number(value)
      updateQuantity(value,id).then(()=>dispatch(getCartData))
      setFlag(!flag)
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
        <Box display={'grid'} gridTemplateColumns= {{base:'repeat(1,1fr)',sm:"73% 25%"}} gap={'1%'} m={1} ml={3} mb={'70px'}>
          <Box>
            <SimpleGrid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)"}} >
                {data.map((el)=>(
                  // <AddToCartProductCard key={el.id} value={value} handleQty={handleQty} HandleDelete={HandleDelete}  {...el}/>
                  <HStack key={el.id} border='1px solid #BDBDBD' height={{base:'180px',sm:'200px'}} mx={4} my={4}>
                      <Box width={{base:'30%',sm:'20%'}} height={{base:'180px',sm:'200px'}} border='1px solid #BDBDBD'  >
                        <Image src={el.image} width={'100%'} height={'100%'} alt='image' />
                      </Box>
                      <Box width={{base:'68%',sm:'78%'}}  px={15} >
                        <Heading size='sm'>{el.title}</Heading>
                        <Text py='2'>
                          {el.brand}
                        </Text>
                        <Box ml={{base:"0px",sm:"0px"}} display={{base:'flex',sm:'flex'}} justifyContent={"left"} >
                          <Text fontWeight={'semibold'} >Rs. {el.price}</Text>
                          <Text mx={2} textDecoration={'line-through'} >{el.lineThroughPrice}</Text>
                          <Text color='#D5A249' >({el.discount}%off)</Text>
                        </Box>

                        <HStack mt={"15px"} justifyContent={'space-between'} >
                          <Box>
                            Qty <select value={el.quantity} onChange={(e)=>handleUpdateQty(e.target.value,el.id)} >
                                <option value='1' >1</option>
                                <option value='2' >2</option>
                                <option value='3' >3</option>
                                <option value='4' >4</option>
                                <option value='5' >5</option>
                            </select>
                          </Box>
                          <Icon _hover={{cursor:'pointer'}} onClick={()=>handleDelete(el.id)} mr={{base:"10px" ,sm:"500px"}} fontSize={'17px'} mt={4} as={RiDeleteBin6Line} />
                        </HStack>
                      </Box>
                  </HStack>
                ))}
            </SimpleGrid>
          </Box>

          <Box border='1px solid #EEEEEE' bg='#FAFAFA' px={4} pt={4} >
                  <Heading fontSize={'17px'} mb={4} >Order Details</Heading>
                  <HStack justifyContent={'space-between'} >
                    <Text >Bag Total</Text>
                    <Text>₹{sum}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} >
                    <Text>GST</Text>
                    <Text>₹{gst}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} fontWeight={'semibold'} >
                    <Text>Order Total</Text>
                    <Text>₹{Math.floor(grandTotal)}</Text>
                  </HStack>
                  <Button mt={2} rounded={'none'} bg={'#FFD54F'} color='white' width={'100%'} ><Link to='/paymentpage' >PROCEED TO PAY</Link></Button>
          </Box>
        </Box>
        <Box bg={'white'} width={'100%'} height={'90px'} position={'fixed'} bottom={0} 
                display={{base:'flex',sm:'none'}} border='3px solid #212121' borderBottom={'none'}
                borderLeft={'none'}
                borderRight={'none'}
                borderTopRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                columnGap={5}
                >
                <Button border={'3px solid #212121'} bg={'white'} 
                  color="#212121"
                  fontWeight={'bold'}
                   >
                  Order Total ₹{Math.floor(grandTotal)}
                  </Button>
                <Button bg={'#212121'} color={'white'} ><Link to='/paymentpage' >Proceed To Pay</Link></Button>
        </Box>
        <Footer/>
        </Box>
        
    )
}