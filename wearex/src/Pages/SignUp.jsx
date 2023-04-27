import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
  } from '@chakra-ui/react';
  import {useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
  import { auth } from '../firebase';
  import { useNavigate } from 'react-router-dom';
  import {Link as RouterLink} from 'react-router-dom'




  
  export default function SignUp() {
    const [errmessage,setErrmessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [disableBtn,setdisable] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()
    const toast = useToast()


    

    const handleSubmit =  ()=>{
      if(!name || !email || !pass){
        setErrmessage("please fill all the field")
        return
      }
      setErrmessage("")
      setdisable(true)
      createUserWithEmailAndPassword(auth,email,pass)
      .then(async (res)=>{
        toast({
            title: 'Account created Successfull.',
            description: "We've created your account for you.",
            status: 'success',
            position : 'top',
            duration: 1200,
            isClosable: true,
          })
        setdisable(false)
        const user = res.user
        await updateProfile(user,{
          displayName:name
        })
        navigate("/login")
      })
      .catch((err)=>{
        setErrmessage(err.message)
        setdisable(false)
        console.log(err.message)
      })

    }
  
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} width={{base:'100%',sm:'50%'}} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} textAlign={'center'} color='#D5A249'>
              Wearex takes your privacy and policy
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" onChange={(e)=>setName(e.target.value)} width={'100%'} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPass(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Text color='red' >{errmessage}</Text>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={disableBtn}
                  loadingText='Loading'
                  colorScheme='teal'
                  variant='outline'
                  spinnerPlacement='start'
                  size="lg"
                  bg='#D5A249'
                  color={'white'}
                  onClick={()=>handleSubmit()}
                  _hover={{
                    bg: 'gray.300',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6} >
                <Text color='red' align={'center'}>
                  Already a user? <Text color={'blue.400'}><RouterLink to='/login' >Login</RouterLink></Text>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }