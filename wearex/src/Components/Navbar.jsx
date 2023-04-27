import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,chakra, useConst , Avatar,useToast,VStack
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';
  import {FiUser} from 'react-icons/fi'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {useEffect,useState} from 'react'
  import axios from 'axios';
  import {BaseURL} from '../BaseURL/BaseURL'

import {Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


// <Avatar onClick={handleLogout} mt={{base:2,sm:1}} width={{base:'30px' , sm:'40px'}} height={{base:'30px' , sm:'40px'}} src='https://bit.ly/broken-link' />


  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const {isAuth,googleSignOut,displayName} = useContext(AuthContext)

    const navigate = useNavigate()
    const toast = useToast()

    const handleLogout = ()=>{
      toast({
        title: 'Logout Successfull.',
        description: "User has been Logout",
        status: 'error',
        position : 'top',
        duration: 1200,
        isClosable: true,
      })
      navigate("/")
      googleSignOut()
    }

    
    
  
    return (
      <Box position={'sticky'} top={0} zIndex={1} >
        <Flex
          
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily='revert'
              fontSize={33}
              fontWeight={'bold'}
              color={useColorModeValue('gray.700', 'white')}>
              <RouterLink to='/' >WEAREX</RouterLink>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={20}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}> 
                 <RouterLink to='/cartitem' >
                  <Box display='flex' mt={3} >
                    <Icon  as={FiShoppingCart} h={{base:5,md:7}} w={{base:5,md:7}} alignSelf={'center'}  mr={0} pr={0} />
                  </Box>
                 </RouterLink>
            
            
            

              {
                isAuth?<Box _hover={{cursor:'pointer'}} height={'100%'} width={{base:"50px",sm:'70px'}} ><VStack gap={0} >
                  <Box width={'100%'} textAlign={'center'} ><Icon fontSize={{base:'14px',sm:'24px'}} as={FiUser} onClick={handleLogout} /></Box>
                  <Box width={'100%'} textAlign={'center'} fontSize={{base:'10px',sm:'13px'}} >{displayName}</Box>
                  
                  </VStack></Box>:<RouterLink to='/login'><Button
                display={{ base: 'inline-flex', md: 'inline-flex' }}
                fontSize={{base:'10px',sm:'sm'}}
                fontWeight={600}
                color={'gray.600'}
                bg={'white'}
                width={{base:'30px',sm:'45px'}}
                _hover={{
                  bg: 'gray.200',
                }}>
                Login
              </Button>
              </RouterLink>
              }
            
            
            
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'click'} placement={'bottom-start'}>
              <PopoverTrigger>
                <RouterLink
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </RouterLink>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <RouterLink
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.100', 'gray.900') }}>
        <Stack p={2} direction={'row'} rounded='md' align={'center'} _hover={{bg:"blue.50"}}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'gray.900' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
          </Flex>
        </Stack>
      </RouterLink>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none'}}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem}/>
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          
        </Flex>
  
        {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse> */}
      </Stack>
    );
  };
  

  
  const NAV_ITEMS= [
    {
      label: 'Mens',
      href:'/mensproduct',
      children: [
        {
          label: 'Shirts',
          subLabel: 'Casual Shirts',
          href: '/mensproduct',
        },
        {
          label: 'T-shirts',
          subLabel: 'New Fresh Arrival T-shirts',
          href: '/mensproduct',
        },
        {
            label: 'Jeans',
            subLabel: 'Custom Jeans',
            href: '/mensproduct',
        },
        {
            label: 'FootWears',
            subLabel: 'Stylishing Footwears',
            href: '/mensproduct',
        },
        {
            label: 'Winter Wear',
            subLabel: 'Trending Design of Jackets and Coats',
            href: '/mensproduct',
        },
        {
            label: 'Western Wear',
            subLabel: 'Fresh Arrival Designs of Winter wear',
            href: '/mensproduct',
        },
      ],
    },
    {
        label: 'Womens',
        href:'/womensproduct',
        children: [
          {
            label: 'Kurtas',
            subLabel: 'Long heads Kurtas',
            href: '/womensproduct',
          },
          {
            label: 'Salwar & Suits',
            subLabel: 'Trending Simple Salvar & Suits',
            href: '/womensproduct',
          },
          {
              label: 'Sarees',
              subLabel: 'Banasrsi Sarees Collection',
              href: '/womensproduct',
          },
          {
              label: 'Lehnga',
              subLabel: 'Bridal & Part Wear Lehnga',
              href: '/womensproduct',
          },
          {
              label: 'Winter Wear',
              subLabel: 'Trending Design of Western Winterwear',
              href: '/womensproduct',
          },
          {
              label: 'Gowns',
              subLabel: 'Fresh Arrival Designs Gowns',
              href: '/womensproduct',
          },
          {
            label: 'Crop Top',
            subLabel: 'Fresh Arrival Designs Crop-Tops',
            href: '/womensproduct',
        },
        {
            label: 'Beauty Products',
            subLabel: 'Cosmetic-Products',
            href: '/womensproduct',
        },
        ],
      },
      {
        label: 'Kids',
        href:'/kidsproduct',
        children: [
          {
            label: 'Shirts',
            subLabel: 'Casual Shirts',
            href: '/kidsproduct',
          },
          {
            label: 'T-shirts',
            subLabel: 'New Fresh Arrival T-shirts',
            href: '/kidsproduct',
          },
          {
              label: 'Jeans',
              subLabel: 'Custom Jeans',
              href: '/kidsproduct',
          },
          {
              label: 'FootWears',
              subLabel: 'Stylishing Footwears',
              href: '/kidsproduct',
          },
          {
              label: 'Winter Wear',
              subLabel: 'Trending Design of Jackets and Coats',
              href: '/kidsproduct',
          },
          {
              label: 'Western Wear',
              subLabel: 'Fresh Arrival Designs of Winter wear',
              href: '/kidsproduct',
          },
        ],
      },
    {
      label: 'Indie',
      href:'/mensproduct',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
        label: 'Home & Kitchens',
        href:'/kitchenproduct',
        children: [
          {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
          },
          {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
          },
        ],
      },
  ];