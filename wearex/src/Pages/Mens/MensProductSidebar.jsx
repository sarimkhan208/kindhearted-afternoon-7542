import React, { useEffect, useState,useContext } from 'react'
import { Accordion,AccordionButton,AccordionItem,AccordionIcon,AccordionPanel, HStack} from "@chakra-ui/react"
import { Box,Checkbox, CheckboxGroup,VStack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

const MensProductSidebar = () => {


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
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <Checkbox value='T-Shirt' onChange={handleCategory} defaultChecked={category.includes("T-Shirt")} >T-Shirt</Checkbox>
                <Checkbox value='Shirt' onChange={handleCategory} defaultChecked={category.includes("Shirt")} >Shirt</Checkbox>
                <Checkbox value='Jeans' onChange={handleCategory} defaultChecked={category.includes("Jeans")} >Jeans</Checkbox>
              </VStack>
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
                  Below Rs.2000 : <input type='radio' name='rad' value='below2000' onChange={handlePriceRange} defaultChecked={priceRange=='below2000'}/>
                </label>
                <label>
                  Rs.2001-5000 : <input type='radio' name='rad' value='2001-5000' onChange={handlePriceRange} defaultChecked={priceRange=='2001-5000'}/>
                </label>
                <label>
                  Rs.5001-10000 : <input type='radio' name='rad' value='5001-10000' onChange={handlePriceRange} defaultChecked={priceRange=='5001-10000'}/>
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
                  order By Asc : <input type='radio' name='asx' value='asc' onChange={handleOrder} defaultChecked={order=='asc'}/>
                </label>
                <label>
                  order By Desc : <input type='radio' name='asx' value='desc' onChange={handleOrder} defaultChecked={order=='desc'}/>
                </label>
              </VStack>
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <Checkbox value='LEVIS' onChange={handleBrand} defaultChecked={brand.includes("LEVIS")} >Levis</Checkbox>
                <Checkbox value='FLYING MACHINE' onChange={handleBrand} defaultChecked={brand.includes("FLYING MACHINE")} >Flying Machine</Checkbox>
                <Checkbox value='UNITED COLORS OF BENETTON' onChange={handleBrand} defaultChecked={brand.includes("UNITED COLORS OF BENETTON")}>United Colors of Benetton</Checkbox>
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
              <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems={'flex-start'} >
                <HStack>
                <Checkbox value='black' onChange={handleColor} defaultChecked={color.includes("black")} >Black </Checkbox><Box width={'15px'} height={'15px'} bg={'black'}></Box>
                </HStack>
                <HStack>
                <Checkbox value='blue' onChange={handleColor} defaultChecked={color.includes("blue")} >Blue </Checkbox><Box width={'15px'} height={'15px'} bg={'blue'}></Box>
                </HStack>
                <HStack>
                <Checkbox value='white' onChange={handleColor} defaultChecked={color.includes("white")} >White </Checkbox><Box width={'15px'} height={'15px'} bg={'white'}></Box>
                </HStack>
                <HStack>
                <Checkbox value='yellow' onChange={handleColor} defaultChecked={color.includes("yellow")} >Yellow </Checkbox><Box width={'15px'} height={'15px'} bg={'yellow'}></Box>
                </HStack>
              </VStack>
          </AccordionPanel>
        </AccordionItem>
        
        
      </Accordion>
      </Box>
  )
}

export default MensProductSidebar
