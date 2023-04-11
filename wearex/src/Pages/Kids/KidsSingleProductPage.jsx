import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Icon,
    Center
  } from '@chakra-ui/react';

import {BsBag} from 'react-icons/bs'
import axios from 'axios';
import {useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { BaseURL } from '../../BaseURL/BaseURL';
import { addToCart } from '../../Redux/Kids/action';
import KidsProductCard from './KidsProductCard'
  
  export default function MensSingleProductPage() {
    const location = useLocation()

    let {id} = useParams()

    const toast = useToast()
    const AddtoCartItem = (id)=>{
      toast({
        title: 'Item Added To Cart.',
        description: "Your item has been added to your cart",
        status: 'success',
        position : 'top',
        duration: 3000,
        isClosable: true,
      })
      addToCart(id)
    }
    
    const [data , setData] = useState()
    

    function getData(){
        axios.get(`${BaseURL}/kidsproduct/${id}`).then((res)=>setData(res.data))

    }

    useEffect(()=>{
      window.scrollTo({
        top: 0,
      });
        getData()
    },[location])



    return (
      <Box>
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex >
          <Image
              rounded={'md'}
              alt={'product image'}
              src={
                data?data.image:"'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'"
              }
              fit='cover'
              
              align={'center'}
              w={{ base: '100%', sm: '90%' }}
              h={{ base: '100%', sm: '70%'}}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
            <Heading
                textAlign={'center'}
                color='#D5A249'
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl'}}>
                  {data?data.brand:"brand"}
              </Heading>

              <Heading
                textAlign={'center'}
                lineHeight={1.1}
                fontWeight={600}
                my={1}
                fontSize={{ base: '2xl', sm: '3xl'}}>
                  {data?data.title:"title"}
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={600}
                fontSize={'2xl'}>
                {data?"₹"+data.price:"price"}
              </Text>
              <Box display={'flex'} justifyContent={'center'} color='#D5A249' >
                <Text fontWeight={'semibold'} >MRP</Text>
                <Text mx={2} textDecoration={'line-through'} >Rs.899</Text>
                <Text  >(55% off)</Text>
              </Box>
              <Text textAlign={'center'}   color={'gray.300'} >Price inclusive of all taxes</Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Additional Details:
                    </Text>{' '}
                    100% Cotton
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Care:
                    </Text>{' '}
                    Machine Washable
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Product ID:
                    </Text>{' '}
                    S2788582_C101
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    DELIVERY:
                    </Text>{' '}
                    Standard Home Delivery
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Standard Click & Collect:
                    </Text>{' '}
                    Your order will arrive in store within 3-5 days.
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    RETURNS:
                    </Text>{' '}
                    We’ll be happy to exchange or refund within 14 days of purchase
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    By post:
                    </Text>{' '}
                    A delivery charge is applicable.
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'#D5A249'}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={()=>AddtoCartItem(data.id)}>
              <Icon mr={2} as={BsBag}/>Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box>
        <Heading fontSize={{base:"18px",sm:"26px"}} ml={{base:10,sm:59}} mb={{base:2,sm:5}} fontFamily={'serif'} >You May Like it</Heading>
          <Box margin={'auto'} border={'1px solid gray'} width={{base:"80%",sm:"90%"}} mb={8} ></Box>
          <Center>
            <SimpleGrid pl={2}  gridTemplateColumns={{base:'repeat(2,1fr)' , sm:'24% 24% 24% 24%'}} gap={{base:'7px',sm:'15px'}} >
                {
                    extraData.map((el)=>(
                        <KidsProductCard key={el.id} {...el}/>
                    ))
                }
            </SimpleGrid>
          </Center>
      </Box>
      </Box>
    );
  }


  let extraData = [
{
    "id" : 22,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwc6e6d633/images/hi-res/169600912/169600912_01_Style%20Shot.jpg?sw=451&sh=600",
    "brand" : "LEVIS",
    "color" : "blue",
    "title" : "LEVI'S® MEN'S CREW NECK T-SHIRT",
    "category" : "T-Shirt",
    "price" : 782,
    "discount" : 35,
    "lineThroughPrice":1199,
    "quantity" :1 
},
{
    "id" : 23,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw77573292/images/hi-res/169600908/169600908_01_Style%20Shot.jpg?sw=299&sh=397",
    "brand" : "LEVIS",
    "color" : "blue",
    "title" : "LEVI'S® MEN'S CREW NECK T-SHIRT",
    "category" : "T-Shirt",
    "price" : 833,
    "discount" : 35,
    "lineThroughPrice":1199,
    "quantity" :1 
},
{
    "id" : 24,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw6e7beac2/images/hi-res/329070360/329070360_01_Style%20Shot.jpg?sw=299&sh=397",
    "brand" : "LEVIS",
    "color" : "white",
    "title" : "Men's White Collar Shirt",
    "category" : "Shirt",
    "price" :2008 ,
    "discount" : 26,
    "lineThroughPrice":2699,
    "quantity" :1 
},
{
    "id" : 25,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwebfe1434/images/hi-res/176580119/176580119_01_Style%20Shot.jpg?sw=299&sh=397",
    "brand" : "LEVIS",
    "color" : "white",
    "title" : "Men's Striped Spread Collar Shirt",
    "category" : "Shirt",
    "price" : 2599,
    "discount" : 35,
    "lineThroughPrice":4099,
    "quantity" :1 
},
{
    "id" : 26,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwd51740ba/images/hi-res/198830299/198830299_01_Style%20Shot.jpg?sw=299&sh=397",
    "brand" : "LEVIS",
    "color" : "black",
    "title" : "Men's Self Design Slim Fit Shirt",
    "category" : "Shirt",
    "price" : 3799,
    "discount" : 20,
    "lineThroughPrice":5099,
    "quantity" :1 
},
{
    "id" : 27,
    "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw28a55dd2/images/hi-res/328640190/328640190_02_Back.jpg?sw=299&sh=397",
    "brand" : "LEVIS",
    "color" : "black",
    "title" : " Men's Checkered Spread Collar Shirt",
    "category" : "Shirt",
    "price" : 4199,
    "discount" : 10,
    "lineThroughPrice":5099,
    "quantity" :1 
},
{
  "id" : 30,
  "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw3fe1e643/images/hi-res/182981306/182981306_01_Style%20Shot.jpg?sw=299&sh=397",
  "brand" : "LEVIS",
  "color" : "blue",
  "title" : "Men's 511 Blue Slim Fit Jeans",
  "category" : "Jeans",
  "price" : 3999,
  "discount" : 10,
  "lineThroughPrice":4300,
  "quantity" :1 
},
{
  "id" : 31,
  "image" : "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw3d4cb3fc/images/hi-res/182981261/182981261_01_Style%20shot.jpg?sw=299&sh=397",
  "brand" : "LEVIS",
  "color" : "blue",
  "title" : "Levi's® Men's 511™ Slim Fit Jeans",
  "category" : "Jeans",
  "price" :2079 ,
  "discount" : 20,
  "lineThroughPrice":2500,
  "quantity" :1 
}
]