// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     useToast,
//     Center
// } from '@chakra-ui/react';
// import { useContext, useEffect, useState } from 'react';
// import {Navigate, useNavigate } from 'react-router-dom';
// import { Alert , AlertIcon , AlertDescription , AlertTitle } from "@chakra-ui/react"
// import { AuthContext } from '../Context/AuthContext';

// import {Link as RouterLink} from 'react-router-dom'
  
//   export default function Login() {
//     window.scrollTo({
//       top: 0,
//     });

//     const toast = useToast()

//     const [email,setEmail] = useState("");
//     const [password , setPassword] = useState("");
//     const {isAuth , login} = useContext(AuthContext)

//     let navigate = useNavigate()

    

//     const handleSubmit = (e)=>{

//       e.preventDefault()
//       login()
      // toast({
      //   title: 'Login Successfull.',
      //   description: "We've created your account for you.",
      //   status: 'success',
      //   position : 'top',
      //   duration: 2000,
      //   isClosable: true,
      // })
//       navigate("/")
      
//     }
    

//     return (
//       <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//           <Stack align={'center'}>
//             <Heading fontSize={'4xl'}>Login</Heading>
//             <Text fontSize={'lg'} color={'gray.600'}>
//               Wearex takes your <Link color={'blue.400'}>Privacy & Policy</Link> 
//             </Text>
//           </Stack>
//           <Box
//             rounded={'lg'}
//             bg={useColorModeValue('white', 'gray.700')}
//             boxShadow={'lg'}
//             p={8}>
//             <Stack spacing={4}>
//               <FormControl id="email">
//                 <FormLabel>Email address</FormLabel>
//                 <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
//               </FormControl>
//               <FormControl id="password">
//                 <FormLabel>Password</FormLabel>
//                 <Input type="password"  onChange={(e)=>setPassword(e.target.value)} />
//               </FormControl>
//               <Stack spacing={10}>
//                 <Stack
//                   direction={{ base: 'column', sm: 'row' }}
//                   align={'start'}
//                   justify={'space-between'}>
//                   <Checkbox>Remember me</Checkbox>
//                   <Link color={'blue.400'}>Forgot password?</Link>
//                 </Stack>
//                 <Button
//                 onClick={handleSubmit}
//                   bg={'gray.700'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'Gray.500',
                    
//                   }}>
//                   Login in
//                 </Button>
//                 <Center>
//                   <RouterLink to='/adminlogin' ><Link color={'blue.400'}>Signin as Admin</Link></RouterLink>
//                 </Center>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
      
//     );
//   }










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
  useToast,Center,Icon
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import {FcGoogle} from 'react-icons/fc'
import { Link as RouterLink} from 'react-router-dom';

export default function SignIn() {

  const {setIsAuth,setDisplayName} = useContext(AuthContext)

  const [errmessage,setErrmessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [disableBtn,setdisable] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const toast = useToast()
  const {googleSignIn,googleSignOut,isAuth,adminIsAuth} = useContext(AuthContext)

  
  // MANUAL LOGIN WITH FIREBASE
  const handleSubmit =  ()=>{
    if(!email || !password){
      setErrmessage("please fill all the field")
      return
    }
    setErrmessage("")
    setdisable(true)
    signInWithEmailAndPassword(auth,email,password)
    .then(async (res)=>{
      setIsAuth(true)
      auth.onAuthStateChanged((user)=>{
        if(user){
            setDisplayName(user.displayName)
        }else{
            setDisplayName("")
        }
    })
      toast({
        title: 'Login Successfull.',
        description: "You've Logged Succesfull.",
        status: 'success',
        position : 'top',
        duration: 1200,
        isClosable: true,
      })
      setdisable(false)
      navigate("/")
    })
    .catch((err)=>{
      toast({
        title: 'Wrong Credentials.',
        description: "You've entered wrong credentials",
        status: 'error',
        position : 'top',
        duration: 1200,
        isClosable: true,
      })
      setErrmessage(err.message)
      setdisable(false)
      console.log( "Error occured in Login" ,err.message)
    })

  }



  //LOGIN WITH GOOGLE FIREBSAE

  const handleGoogleSignIn = async ()=>{
    try{
      await googleSignIn()
      toast({
        title: 'Login Successfull.',
        description: "You've Logged in Succesfull.",
        status: 'success',
        position : 'top',
        duration: 1200,
        isClosable: true,
      })
      navigate("/")

    }catch(err){
      console.log("error occured in googe signIn",err)
    }
  }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} >Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Wearex takes your <Link color='#D5A249'>Privacy and Policy</Link> ✌️
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
              <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Text color='red' >{errmessage}</Text>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                isLoading={disableBtn}
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
                onClick={()=>handleSubmit()}
                bg='#D5A249'
                color={'white'}
                _hover={{
                  bg: 'gray.300',
                }}>
                Sign in
              </Button>

            </Stack>
              <Center>
                <Button width={'100%'} onClick={handleGoogleSignIn}>
                  <Icon as={FcGoogle} mr={3} /> Sign in with Google
                </Button>
              </Center>
            <Text fontSize={'lg'} color={'blue.400'} >
              <RouterLink to='/signup' color={'blue.400'} _hover={{cursor:'pointer'}}>Create an account</RouterLink> 
            </Text>
            <Text mt={4} fontSize={'lg'} color={'blue.400'} >
              <RouterLink to='/adminlogin' color={'blue.400'} _hover={{cursor:'pointer'}}>Sign in as Admin</RouterLink> 
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}