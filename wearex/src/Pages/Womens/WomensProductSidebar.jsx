import React, { useEffect, useState } from 'react'
import { Accordion,AccordionButton,AccordionItem,AccordionIcon,AccordionPanel} from "@chakra-ui/react"
import { Box,Checkbox,HStack, CheckboxGroup,VStack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
const WomensProductSidebar = () => {

  const [color ,setColor] = useState([])
  const [category,setCategory] = useState([])
  const [priceRange,setPriceRange] = useState('')
  const [order,setorder] = useState('')
  const [params,setParams] = useSearchParams()

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
  

  const handleOrder = (e)=>{
    setorder(e.target.value)
  }


  useEffect(()=>{
    let params = { 
      category,
      color
    }
    priceRange && (params.priceRange=priceRange)
    order && (params.order=order)
    setParams(params)
  },[category,priceRange,order,color])

  return (

    <Box display={{base:'none',sm:'block'}} >
    <Accordion allowToggle  >
        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckboxGroup colorScheme='blue'    >
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <Checkbox value='Lehnga' onChange={handleCategory}>Lehnga</Checkbox>
                <Checkbox value='Saree' onChange={handleCategory}>Saree</Checkbox>
                <Checkbox value='Suit' onChange={handleCategory}>Suit</Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <label>
                Rs.Below 2000 : <input type='radio' name='rad' value='below2000' onChange={handlePriceRange}/>
                </label>
                <label>
                  Rs.2001-5000 : <input type='radio' name='rad' value='2001-5000' onChange={handlePriceRange}/>
                </label>
                <label>
                  Above 5000 : <input type='radio' name='rad' value='above5000' onChange={handlePriceRange}/>
                </label>
              </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Sort By Price
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >               
                <label>
                  order By Asc : <input type='radio' name='asx' value='asc' onChange={handleOrder}/>
                </label>
                <label>
                  order By Desc : <input type='radio' name='asx' value='desc' onChange={handleOrder}/>
                </label>
              </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Color
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckboxGroup colorScheme='blue' >
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <HStack justifyContent = 'space-evenly' >
                <Checkbox value='red' onChange={handleColor} >Red </Checkbox><Box width={'15px'} height={'15px'} bg={'red'}></Box>
                </HStack>
                <HStack justifyContent = 'space-evenly' >
                <Checkbox value='blue' onChange={handleColor} >Blue </Checkbox><Box width={'15px'} height={'15px'} bg={'blue'}></Box>
                </HStack>
                <HStack justifyContent = 'space-evenly' >
                <Checkbox value='pink' onChange={handleColor} >Pink </Checkbox><Box width={'15px'} height={'15px'} bg={'pink'}></Box>
                </HStack>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        
        
      </Accordion>
      </Box>
  )
}

export default WomensProductSidebar
