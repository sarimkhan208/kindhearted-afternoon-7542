import {
    Box,
    Image,
    Icon,
    Button,
    Heading,
    Text,
    HStack
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  
export default function AddToCartProductCard({image,title,price,brand,HandleDelete,id,handleQty}){

  const handleDelete = (id)=>{
    HandleDelete(id)
  }

  const handleQtyValue = (e)=>{
    let value = e.target.value
    console.log(value)
    handleQty(e.target.value)
  }

  return (
      <HStack border='1px solid #BDBDBD' height={{base:'150px',sm:'200px'}} mx={4} my={4}>
        <Box width={{base:'30%',sm:'20%'}} height={{base:'150px',sm:'200px'}} border='1px solid #BDBDBD'  >
          <Image src={image} width={'100%'} height={'100%'} alt='image' />
        </Box>
        <Box width={{base:'68%',sm:'78%'}} pl={15} >
          <Heading size='sm'>{title}</Heading>
          <Text py='2'>
            {brand}
          </Text>

          <Box>
            Qty <select onChange={(e)=>handleQtyValue(e)} >
                <option value='1'>1</option>
                <option value='2' >2</option>
                <option value='3' >3</option>
                <option value='4' >4</option>
                <option value='5' >5</option>
            </select>
          </Box>
          {/* <Icon ml={'500px'} fontSize={'17px'} mt={4} as={RiDeleteBin6Line} /> */}
        </Box>
      </HStack>
    )


}

{/* <Card
      mb={2}
      direction={{ base: 'row', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      rounded={'none'}
      height={{base:'140px',sm:'180px'}}
    >
      <Image
          src={image}
          width='100px'
          alt='image'

        />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text py='2'>
           {brand}
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme='gray' variant='outline' rounded={'none'} >
            +
          </Button>
          <Button  variant='outline' rounded={'none'} mx={1} >
            Qty:1
          </Button>
          <Button colorScheme='gray' variant='outline' rounded={'none'} >
            -
          </Button>
          <Icon ml={'500px'} fontSize={'17px'} mt={4} as={RiDeleteBin6Line} />
        </CardFooter>
      </Stack>
    </Card> */}











// function AddToCartProductCard({getId,id,image,title,price,quantity}) {


//   const handleDelete = (id)=>{
//     alert("Item Successfully Deleted")
//     getId(id)
//   }
  
  
//     return (
//         <Flex p={{base:3,md:30}}   justifyContent='center'>
      
//         <Box
//           bg={useColorModeValue('white', 'gray.800')}
//           w={{base : "152px",  md : "230px"}}
//           h={{base : "380px" , md : "360px"}}
         
//           borderWidth="1px"
//           shadow="lg"
//           position="relative">
          
  
//           <Center>
//           <Image
//           height={{base : 240 , md : 200}}
//           width={{base : "220px" , md :40}}
//             src={image}
//             alt={`Picture of ${title}`}
//           />
//           </Center>
  
//           <Box p="6">
//             <Flex mt="1" justifyContent="space-between" alignContent="center">
//                 <Box
                  
//                   fontSize={{base:"12", md:"17"}}
//                   fontWeight="semibold"
//                   as="h4"
//                   lineHeight="tight"
//                   isTruncated>
//                   {title}
//                 </Box>
              // <Tooltip
              //   label="Delete Product"
              //   bg="white"
              //   placement={'top'}
              //   color={'gray.800'}
              //   fontSize={'1.2em'}>
                    
              //   <chakra.a  display={'flex'}>
              //     <DeleteIcon onClick={()=>handleDelete(id)} />
              //   </chakra.a>
              // </Tooltip>
//             </Flex>
  
//             <Flex justifyContent="space-between" alignContent="center">
//               <Box fontSize={{base:"12", md:"17"}} color={useColorModeValue('gray.800', 'white')}>
//                 {price}
//               </Box>
//             </Flex>
//           </Box>
//           <Center>
//           <Box>
//             <Button rounded={'none'}
//                     height={{base:"20px",md:"28px"}}
//                     width={{base:"5px",md:""}}
                    
//                     bg='white'
//                     color='gray.900'
//                     border='1px'
//                     borderColor = 'gray.900'
//                     _hover={{
//                         bg : 'white',
//                         color : 'gray.900',
//                         border:'2px',
//                         borderColor:'gray.900'
//                       }}
//                       fontWeight='bold'
                      

//                     >+</Button>
//             <Button 
//                     mx='7px'
                    
//                     bg='gray.900'
//                     rounded={'none'}
//                     height={{base:"22px",md:"30px"}}
//                     width={{base:"20px",md:"90px"}}
//                     fontSize={{base:"10px",md:"18px"}}
//                     color='white'
//                     _hover={{
//                         bg : 'gray.900',
//                         color : 'white',
                        
                        
//                       }}
                   
//                     >Qty {quantity}
//                     </Button>
//                     <Button rounded={'none'}
//                      height={{base:"20px",md:"28px"}}
//                      width={{base:"5px",md:""}}
                   
//                     bg='white'
//                     color='gray.900'
//                     border='1px'
//                     borderColor = 'gray.900'
//                     _hover={{
//                         bg : 'white',
//                         color : 'gray.900',
//                         border:'2px',
//                         borderColor:'gray.900'
//                       }}
//                       fontWeight='bold'
                      
                      

//                     >-</Button>
//           </Box>
//           </Center>
         
//         </Box>
        
//       </Flex>
     
//     );
//   }
  
//   export default AddToCartProductCard