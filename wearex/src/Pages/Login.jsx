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
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import {Navigate, useNavigate } from 'react-router-dom';
import WrongAlert from '../LoginComponents/WrongAlert';
import { Alert , AlertIcon , AlertDescription , AlertTitle } from "@chakra-ui/react"
import { AuthContext } from '../Context/AuthContext';


  
  export default function Login() {

    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {isAuth , login} = useContext(AuthContext)

    let navigate = useNavigate()

    

    const handleSubmit = (e)=>{
      e.preventDefault()
      login()
      alert("Login Successfull")
      navigate("/")
      
    }
    

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login</Heading>
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
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleSubmit}
                  bg={'gray.700'}
                  color={'white'}
                  _hover={{
                    bg: 'Gray.500',
                    
                  }}>
                  Login in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      
    );
  }