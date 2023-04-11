import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select
} from '@chakra-ui/react';
import { useEffect } from 'react';
import {Link as RouterLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {getCartData} from '../Redux/Cart/action'

  
  export default function PaymentPage() {
    window.scrollTo({
      top: 0,
    });
    const data = useSelector((state)=>state.cartReducer.data)
    const dispatch = useDispatch()

    let sum = 0,gst=0,grandTotal
    if(data){
      for(let i=0; i<data.length; i++){
        sum+=Number(data[i].price*data[i].quantity)
      }
      gst = (sum*18)/100
      grandTotal = sum+gst
    }

    useEffect(()=>{
      dispatch(getCartData)
    },[])

    

    return (
      <Box>
        <Flex

        align={'center'}
        justify={'center'}
        
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} width={{base:'100%',sm:'55%'}} py={12} px={6}>
          <Stack align={'center'}>
            <Heading textAlign={'center'} fontSize={'4xl'}>You Have To Pay ₹{grandTotal}</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Wearex takes your <Link color={'blue.400'}>Privacy & Policy</Link> 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Address</FormLabel>
                <Input type="text"   />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Phone No.</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Email</FormLabel>
                <Input type="text"   />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Payment Method</FormLabel>
                <Select placeholder='Select option'>
                        <option value='option1'>Cash On Delievey</option>
                        <option value='option2'>Visa Card</option>
                        <option value='option3'>Net Banking</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'gray.700'}
                  color={'white'}
                  _hover={{
                    bg: 'Gray.500'
                  }}>
                    <RouterLink to='/orderplaced' >
                      Proceed
                    </RouterLink>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
      
    );
  }