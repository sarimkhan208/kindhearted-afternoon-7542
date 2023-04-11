import {HiFilter} from 'react-icons/hi'
import {TbArrowsSort} from 'react-icons/tb'

import {Box,Checkbox,HStack,Icon, VStack} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input
} from '@chakra-ui/react'


import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import {RadioGroup } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'


const WomensProductsSubNavbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  const [params,setParams] = useSearchParams()
  const initialCategory = params.getAll("category")
  const initailColor = params.getAll("color")
  const initialOrder = params.get("order")
  const initialPriceRange = params.get("priceRange")

  const [category,setCategory] = useState(initialCategory || [])
  const [color,setColor] = useState(initailColor || [])
  const [priceRange,setPriceRange] = useState(initialOrder || '')
  const [order,setorder] = useState(initialPriceRange || '')

  const handleCategory = (e)=>{
    let newCategory = [...category]
    let value = e.target.value;
    if(newCategory.includes(value)){
      newCategory = newCategory.filter((el)=>el!==value)
    }else{
      newCategory.push(value)
    }
    setCategory(newCategory)
  }
  
  const handlePriceRange = (e)=>{
    let value = e.target.value
    if(value=='below2000'){
      setPriceRange('below2000')
    }
    else if(value=='2001-5000'){
      setPriceRange('2001-5000')
    }
    else if(value=='above5000'){
      setPriceRange('above5000')
    }
  }
  

  const handleOrder = (e)=>{
    setorder(e.target.value)
  }

  const handleColor = (e)=>{
    let newColor = [...color]
    let value = e.target.value;
    if(newColor.includes(value)){
      newColor = newColor.filter((el)=>el!==value)
    }else{
      newColor.push(value)
    }
    setColor(newColor)
  }


  useEffect(()=>{
    let params = { 
      category,
      color,
    }
    priceRange && (params.priceRange=priceRange)
    order && (params.order=order)
    setParams(params)
  },[category,priceRange,order,color])


  return (
    <Box display={{base:'flex',sm:'none'}}  h={'70px'} bg={'blue.800'}  color='white' justifyContent={'space-around'} >
      <HStack width={'50%'} justifyContent='center' >
      <Menu>
        <MenuButton _hover={{bg:'blue.800'}} bg={'blue.800'} as={Button}>
          <Icon pt={1} color={'white'} fontSize={'20px'} as={TbArrowsSort} /> Sort by Price
          </MenuButton>
          <MenuList>
            <RadioGroup>
              <VStack direction='row' color='black' >
                <label>
                  order By Asc : <input type='radio' name='asx' value='asc' onChange={handleOrder} defaultChecked={order=='asc'} />
                </label>
                <label>
                  order By Desc : <input type='radio' name='asx' value='desc' onChange={handleOrder} defaultChecked={order=='desc'}/>
                </label>
              </VStack>
            </RadioGroup>
          </MenuList>
        </Menu>
      </HStack>
       

      <HStack width={'50%'} justifyContent='center' >
      <Button ref={btnRef} onClick={onOpen} _hover={{bg:'blue.800'}} bg={'blue.800'}>
          <Icon pt={1} color={'white'} fontSize={'20px'} as={HiFilter} /> Filter By Relevance
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter By Relevance</DrawerHeader>

          <DrawerBody>
                <Box mb={5}>
                  <Box fontWeight='700' mb={3} >Filter By Category</Box>
                  <Box> <Checkbox value='Lehnga' onChange={handleCategory} defaultChecked={category.includes("Lehnga")} >Lehnga</Checkbox></Box>
                  <Box><Checkbox value='Saree' onChange={handleCategory} defaultChecked={category.includes("Saree")}>Saree</Checkbox></Box>
                  <Box><Checkbox value='Suit' onChange={handleCategory} defaultChecked={category.includes("Suit")}>Suit</Checkbox></Box>
                </Box>

                <Box mb={5}>
                  <Box fontWeight='700' mb={3} >Filter By Price Range</Box>
                  <Box display='flex' gap={'23.5px'} >
                    <Box>Below Rs.2000 :</Box>
                    <Box><input type='radio' name='rad' value='below2000' onChange={handlePriceRange} defaultChecked={priceRange=='below2000'} /></Box>
                  </Box>

                  <Box display='flex' gap={'29px'} >
                    <Box>Rs.2001-5000 :</Box>
                    <Box><input type='radio' name='rad' value='2001-5000' onChange={handlePriceRange} defaultChecked={priceRange=='2001-5000'} /></Box>
                  </Box>

                  <Box display='flex' gap={'20px'} >
                    <Box>Above Rs.5000 : </Box>
                    <Box><input type='radio' name='rad' value='above5000' onChange={handlePriceRange} defaultChecked={priceRange=='above5000'} /></Box>
                  </Box>
                  
                </Box>

                <Box mb={5}>
                  <Box fontWeight='700' mb={3} >Filter By Color</Box>
                  <Box>
                    <HStack>
                      <Checkbox value='red' onChange={handleColor} defaultChecked={color.includes("red")} >Red </Checkbox><Box width={'15px'} height={'15px'} bg={'red'}></Box>
                    </HStack>
                  </Box>


                  <Box>
                    <HStack>
                      <Checkbox value='blue' onChange={handleColor} defaultChecked={color.includes("blue")} >Blue </Checkbox><Box width={'15px'} height={'15px'} bg={'blue'}></Box>
                    </HStack>
                  </Box>


                  <Box>
                    <HStack>
                      <Checkbox value='pink' onChange={handleColor} defaultChecked={color.includes("pink")} >Pink </Checkbox><Box width={'15px'} height={'15px'} bg={'pink'}></Box>
                    </HStack>
                  </Box>

                </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={onClose}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </HStack>
    </Box>
  )
}

export default WomensProductsSubNavbar











// import {HiFilter} from 'react-icons/hi'
// import {TbArrowsSort} from 'react-icons/tb'

// import {Box,Checkbox,HStack,Icon, VStack} from '@chakra-ui/react'
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from '@chakra-ui/react'

// import React, { useEffect, useState } from 'react'
// import { Button } from '@chakra-ui/react'
// import {RadioGroup } from '@chakra-ui/react'
// import { useSearchParams } from 'react-router-dom'

// const WomensProductSubNavbar = () => {


//   const [category,setCategory] = useState([])
//   const [priceRange,setPriceRange] = useState('')
//   const [order,setorder] = useState('')
//   const [params,setParams] = useSearchParams()

  
//   const handlePriceRange = (e)=>{
//     let value = e.target.value
//     if(value=='above5000'){
//         setPriceRange('above5000')
//     }
//     else if(value=='1000-2000'){
//     setPriceRange('1000-2000')
//     }
//     else if(value=='2001-5000'){
//     setPriceRange('2001-5000')
//     }
    
//   }
  

//   const handleorder = (e)=>{
//     setorder(e.target.value)
//   }


//   useEffect(()=>{
//     let params = { 
//       category,
//     }
//     priceRange && (params.priceRange=priceRange)
//     order && (params.order=order)
//     setParams(params)
//   },[category,priceRange,order])


//   return (
//     <Box display={{base:'flex',sm:'none'}}  h={10} bg={'blue.800'}  color='white' justifyContent={'space-around'} >
//       <HStack width={'30%'} >
//       <Menu>
//         <MenuButton _hover={{bg:'blue.800'}} bg={'blue.800'} as={Button}>
//           <Icon pt={1} color={'white'} fontSize={'20px'} as={TbArrowsSort} /> Sort by<br/> Price
//           </MenuButton>
//           <MenuList>
//             <RadioGroup>
//               <VStack direction='row' color='black' >
//                 <label>
//                   order By Asc : <input type='radio' name='asx' value='asc' onChange={handleorder}/>
//                 </label>
//                 <label>
//                   order By Desc : <input type='radio' name='asx' value='desc' onChange={handleorder}/>
//                 </label>
//               </VStack>
//             </RadioGroup>
//           </MenuList>
//         </Menu>
//       </HStack>

//       <HStack width={'30%'}>
//           <Menu  _hover={{bg:'blue.800'}}>
//             <MenuButton width='100%'  _hover={{bg:'blue.800'}} bg={'blue.800'} as={Button}>
//             <Icon pt={1} color={'white'} fontSize={'20px'} as={HiFilter}/> Filter By<br/> Brand
//             </MenuButton>
//             <MenuList>
//               <MenuItem color={'black'}>
//                 <Checkbox value='ritu kumar lehnga'  >Ritu Kumar</Checkbox>               
//               </MenuItem>

//               <MenuItem color={'black'}>
//               <Checkbox value='manish malhotra'  >Manish Malhotra</Checkbox>
//               </MenuItem>

//               <MenuItem color={'black'}>
//               <Checkbox value='tahiliani'>Tahiliani</Checkbox>
//               </MenuItem>
//             </MenuList>
//         </Menu>
//       </HStack>


                
                
                

//       <HStack width={'30%'}>
//           <Menu  _hover={{bg:'blue.800'}}>
//             <MenuButton  _hover={{bg:'blue.800'}} bg={'blue.800'} as={Button}>
//             <Icon pt={1} color={'white'} fontSize={'20px'} as={HiFilter}/> Filter By<br/> Price
//             </MenuButton>
//             <MenuList>
//               <MenuItem color={'black'}>
//                 <label>
//                   Rs.1000-2000 : <input type='radio' name='rad' value='1000-2000' onChange={handlePriceRange}/>
//                 </label>
//               </MenuItem>

//               <MenuItem color={'black'}>
//                 <label>
//                   Rs.2001-5000 : <input type='radio' name='rad' value='2001-5000' onChange={handlePriceRange}/>
//                 </label>
//               </MenuItem>
//               <MenuItem color={'black'}>
//                 <label>
//                     Above Rs.5000 : <input type='radio' name='rad' value='above5000' onChange={handlePriceRange}/>
//                 </label>
//               </MenuItem>
//             </MenuList>
//         </Menu>
//       </HStack>
//     </Box>
//   )
// }

// export default WomensProductSubNavbar


