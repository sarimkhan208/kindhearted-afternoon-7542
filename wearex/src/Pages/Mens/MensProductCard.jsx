import {
    Box,
    Image,
    Text,
  } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom'



  
function MensProductCard({id,image,title,price,brand,discount,lineThroughPrice}) {
    return (
     <Box
      w={{base : "170px",  md : "320px"}}
      h={{base : "360px" , md : "470px"}}
      textAlign={'center'}
      mb={10}
      cursor={'pointer'}
     >
      <RouterLink to={`/mensproduct/${id}`}>
        <Box width={'100%'} height={{base : 240 , sm : 360}} >
          <Image width={'100%'} height={'100%'} src={image} alt='tees' />
        </Box>

        <Box fontFamily={'unset'} >
          <Text mt={2} fontWeight={'semibold'} fontSize={{base:'15px',sm:'15px'}} color='#D5A249'>{brand}</Text>
          <Text fontSize={'14px'} my={1} >{title}</Text>

          <Box display={{base:'block',sm:'flex'}} justifyContent={'center'} >
            <Text fontWeight={'semibold'} >Rs. {price}</Text>
            <Text mx={2} textDecoration={'line-through'} >{lineThroughPrice}</Text>
            <Text color='#D5A249' >({discount}%off)</Text>
          </Box>

        </Box>
      </RouterLink>
     </Box>
    );
  }
  
  export default MensProductCard;


  // <Flex p={{base:3,md:30}}   justifyContent='center'>
      
  //       <Box
  //         bg={useColorModeValue('white', 'gray.800')}
  //         w={{base : "170px",  md : "320px"}}
  //         h={{base : "360px" , md : "470px"}}
         
  //         borderWidth="1px"
  //         shadow="lg"
  //         position="relative">
  //         {isNew && (
  //           <Circle
  //             size="10px"
  //             position="absolute"
              
  //             right={2}
  //             bg="red.200"
  //           />
  //         )}
  
  //         <Center>
  //         <RouterLink to={`/mensproduct/${id}`}>
  //         <Image
  //         height={{base : 240 , md : 320}}
  //         width={{base : "220px" , md :60}}
  //           src={image}
  //           alt={`Picture of ${title}`}
            
  //         />
  //         </RouterLink>
  //         </Center>
  
  //         <Box p="4" pt={'2'} pb={'2'}>
  //           <Box d="flex" alignItems="baseline">
  //             {isNew && (
  //               <Badge rounded="full" px="2" fontSize={{base:"0.4em", md:"0.6em"}} colorScheme="red">
  //                 New
  //               </Badge>
  //             )}
  //           </Box>
  //           <Flex mt="1" justifyContent="space-between" alignContent="center">
  //             <RouterLink to={`/mensproduct/${id}`} >
  //               <Box
                  
  //                 fontSize={{base:"18px", sm:"23px"}}
  //                 fontWeight="semibold"
  //                 as="h4"
  //                 lineHeight="tight"
  //                 isTruncated>
  //                 {title.substring(0,13)}
  //               </Box>
  //             </RouterLink>
  //             <Tooltip
  //               label="Add to cart"
  //               bg="white"
  //               placement={'top'}
  //               color={'gray.800'}
  //               fontSize={'1.2em'}>
  //               <chakra.a display={'flex'}>
  //                 <Icon onClick={()=>handleCartItem(id)} as={FiShoppingCart} h={{base:5,md:7}} w={{base:5,md:7}} alignSelf={'center'} />
  //               </chakra.a>
  //             </Tooltip>
  //           </Flex>
  
  //           <Flex justifyContent="space-between" alignContent="center">
  //             <Rating rating={rating} numReviews={numReviews} />
  //             <Box fontSize="17px" fontWeight={'semibold'} color={useColorModeValue('gray.800', 'white')}>
  //             ₹{price}
  //             </Box>
  //           </Flex>
  //         </Box>
  //       </Box>
        
  //     </Flex>