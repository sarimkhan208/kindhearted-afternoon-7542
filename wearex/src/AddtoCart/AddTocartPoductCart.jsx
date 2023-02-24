import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Center,
    Button
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import {DeleteIcon} from '@chakra-ui/icons'
import {Link as RouterLink} from 'react-router-dom'
  

  
  
function AddToCartProductCard({id,image,title,price,quantity}) {
  
  
    return (
        <Flex p={{base:3,md:30}}   justifyContent='center'>
      
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          w={{base : "152px",  md : "230px"}}
          h={{base : "380px" , md : "360px"}}
         
          borderWidth="1px"
          shadow="lg"
          position="relative">
          
  
          <Center>
          <Image
          height={{base : 240 , md : 200}}
          width={{base : "220px" , md :40}}
            src={image}
            alt={`Picture of ${title}`}
          />
          </Center>
  
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  
                  fontSize={{base:"12", md:"17"}}
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated>
                  {title}
                </Box>
              <Tooltip
                label="Delete Product"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                    
                <chakra.a href={`/mensproduct/${id}`} display={'flex'}>
                  {/* <Icon as={DeleteIcon} h={{base:5,md:7}} w={{base:5,md:7}} alignSelf={'center'} /> */}
                  <DeleteIcon/>
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize={{base:"12", md:"17"}} color={useColorModeValue('gray.800', 'white')}>
                {price}
              </Box>
            </Flex>
          </Box>
          <Center>
          <Box>
            <Button rounded={'none'}
                    height={{base:"20px",md:"28px"}}
                    width={{base:"5px",md:""}}
                    
                    bg='white'
                    color='gray.900'
                    border='1px'
                    borderColor = 'gray.900'
                    _hover={{
                        bg : 'white',
                        color : 'gray.900',
                        border:'2px',
                        borderColor:'gray.900'
                      }}
                      fontWeight='bold'
                      

                    >+</Button>
            <Button 
                    mx='7px'
                    
                    bg='gray.900'
                    rounded={'none'}
                    height={{base:"22px",md:"30px"}}
                    width={{base:"20px",md:"90px"}}
                    fontSize={{base:"10px",md:"18px"}}
                    color='white'
                    _hover={{
                        bg : 'gray.900',
                        color : 'white',
                        
                        
                      }}
                   
                    >Qty {quantity}
                    </Button>
                    <Button rounded={'none'}
                     height={{base:"20px",md:"28px"}}
                     width={{base:"5px",md:""}}
                   
                    bg='white'
                    color='gray.900'
                    border='1px'
                    borderColor = 'gray.900'
                    _hover={{
                        bg : 'white',
                        color : 'gray.900',
                        border:'2px',
                        borderColor:'gray.900'
                      }}
                      fontWeight='bold'
                      
                      

                    >-</Button>
          </Box>
          </Center>
         
        </Box>
        
      </Flex>
     
    );
  }
  
  export default AddToCartProductCard