import React from 'react'
import {Box, SimpleGrid} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const AdminPage = () => {
  return (
    <Box width={'80%'}  margin={'auto'} my={'100px'} >
      <SimpleGrid gridTemplateColumns={'repeat(3,1fr)'} gap={'20px'} justifyContent={'center'}>
        <Link to='/adminpagemens' ><Box bg={'red'} rounded={'20px'}  color={'white'}  fontSize={'25px'} p={'15%'} fontFamily={'unset'} >Mens</Box></Link>
        <Link to='/adminpagewomens' ><Box bg={'yellow'} rounded={'20px'}  color={'white'}  fontSize={'25px'} p={'14%'} fontFamily={'unset'} >Womens</Box></Link>
        <Link to='/adminpagekids' ><Box bg={'blue.100'} rounded={'20px'}  color={'white'}  fontSize={'25px'} p={'15%'} fontFamily={'unset'} >Kids</Box></Link>
      </SimpleGrid>
    </Box>
  )
}

export default AdminPage
