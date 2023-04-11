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
    useToast,
    Center
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

import {Link as RouterLink} from 'react-router-dom'
import axios from 'axios';
  
  export default function AdminLogin() {
    window.scrollTo({
      top: 0,
    });

    const toast = useToast()

    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {AdminLogin} = useContext(AuthContext)

    let navigate = useNavigate()

    

    const handleSubmit = (e)=>{

      e.preventDefault()
      let obj={
        email,
        password
      }
      axios.post('https://reqres.in/api/login',obj)
      .then((res)=>{
        toast({
            title: 'Login Successfull.',
            description: "Admin Login Successfull.",
            status: 'success',
            position : 'top',
            duration: 2000,
            isClosable: true,
        })
        AdminLogin()
        navigate('/adminpage')


      })
      .catch((err)=>{
        toast({
            title: 'Wrong Credential.',
            description: "You entered wrong credentials",
            status: 'error',
            position : 'top',
            duration: 2000,
            isClosable: true,
        })
      })
      
    }
    

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin Login Page</Heading>
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