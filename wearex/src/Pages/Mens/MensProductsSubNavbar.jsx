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


const MensProductsSubNavbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  const [params,setParams] = useSearchParams()
  const initialCategory = params.getAll("category")
  const initialBrand = params.getAll("brand")
  const initailColor = params.getAll("color")
  const initialOrder = params.get("order")
  const initialPriceRange = params.get("priceRange")

  const [category,setCategory] = useState(initialCategory || [])
  const [brand,setBrand] = useState(initialBrand || [])
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

  const handleBrand = (e)=>{
    let newCategory = [...brand]
    let value = e.target.value;
    if(newCategory.includes(value)){
      newCategory = newCategory.filter((el)=>el!==value)
    }else{
      newCategory.push(value)
    }
    setBrand(newCategory)
  }
  
  const handlePriceRange = (e)=>{
    let value = e.target.value
    if(value=='below2000'){
      setPriceRange('below2000')
    }
    else if(value=='2001-5000'){
      setPriceRange('2001-5000')
    }
    else if(value=='5001-10000'){
      setPriceRange('5001-10000')
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
      brand,
      color,
    }
    priceRange && (params.priceRange=priceRange)
    order && (params.order=order)
    setParams(params)
  },[category,brand,priceRange,order,color])


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
                  <Box> <Checkbox value='T-Shirt' onChange={handleCategory} defaultChecked={category.includes("T-Shirt")} >T-Shirt</Checkbox></Box>
                  <Box><Checkbox value='Shirt' onChange={handleCategory} defaultChecked={category.includes("Shirt")}>Shirt</Checkbox></Box>
                  <Box><Checkbox value='Jeans' onChange={handleCategory} defaultChecked={category.includes("Jeans")}>Jeans</Checkbox></Box>
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
                    <Box>Rs.5001-10000 : </Box>
                    <Box><input type='radio' name='rad' value='5001-10000' onChange={handlePriceRange} defaultChecked={priceRange=='5001-10000'} /></Box>
                  </Box>
                  
                </Box>

                <Box mb={5}>
                  <Box fontWeight='700' mb={3} >Filter By Brand</Box>
                  <Box><Checkbox value='LEVIS' onChange={handleBrand} defaultChecked={brand.includes("LEVIS")} >Levis</Checkbox></Box>
                  <Box><Checkbox value='FLYING MACHINE' onChange={handleBrand} defaultChecked={brand.includes("FLYING MACHINE")} >Flying Machine</Checkbox></Box>
                  <Box><Checkbox value='UNITED COLORS OF BENETTON' onChange={handleBrand} defaultChecked={brand.includes("UNITED COLORS OF BENETTON")} >United Colors of Benetton</Checkbox></Box>
                </Box>

                <Box mb={5}>
                  <Box fontWeight='700' mb={3} >Filter By Color</Box>
                  <Box>
                    <HStack>
                      <Checkbox value='black' onChange={handleColor} defaultChecked={color.includes("black")} >Black </Checkbox><Box width={'15px'} height={'15px'} bg={'black'}></Box>
                    </HStack>
                  </Box>


                  <Box>
                    <HStack>
                      <Checkbox value='blue' onChange={handleColor} defaultChecked={color.includes("blue")} >Blue </Checkbox><Box width={'15px'} height={'15px'} bg={'blue'}></Box>
                    </HStack>
                  </Box>


                  <Box>
                    <HStack>
                      <Checkbox value='white' onChange={handleColor} defaultChecked={color.includes("white")} >White </Checkbox><Box width={'15px'} height={'15px'} bg={'white'}></Box>
                    </HStack>
                  </Box>

                  <Box>
                    <HStack>
                    <Checkbox value='yellow' onChange={handleColor} defaultChecked={color.includes("yellow")} >Yellow </Checkbox><Box width={'15px'} height={'15px'} bg={'yellow'}></Box>
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

export default MensProductsSubNavbar
