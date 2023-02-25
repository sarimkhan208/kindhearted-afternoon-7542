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
    Select,Option
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Footer from '../Footer/Footer';


  
  export default function PaymentPage() {
    const {total} = useContext(AuthContext)

    

    

    
    

    return (
      <Box>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} width='55%' py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>You Have To Pay ₹{total}</Heading>
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
                    bg: 'Gray.500',
                    
                  }}>
                  Proceed
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        <Footer/>
      </Box>
      
    );
  }