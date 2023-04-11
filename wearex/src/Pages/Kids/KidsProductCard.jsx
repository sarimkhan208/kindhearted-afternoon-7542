import {
    Box,
    Image,
    Text,
  } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom'



  
function KidsProductCard({id,image,title,price,brand,discount,lineThroughPrice}) {
    return (
     <Box
      w={{base : "170px",  md : "320px"}}
      h={{base : "360px" , md : "470px"}}
      textAlign={'center'}
      mb={10}
      cursor={'pointer'}
     >
      <RouterLink to={`/kidsproduct/${id}`}>
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
  
  export default KidsProductCard;
