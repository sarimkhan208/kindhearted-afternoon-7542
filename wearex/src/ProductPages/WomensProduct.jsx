import { useEffect, useState } from "react"
import axios from "axios"
import { Box, SimpleGrid , Center , Button } from '@chakra-ui/react'
import Footer from "../Footer/Footer"
import LoadingSkeleton from '../Loading/Skeleton'
import ProductCardWomens from "../ProductCards/ProdctCardWomen"
import { Accordion,AccordionButton,AccordionItem,AccordionIcon,AccordionPanel,Link } from "@chakra-ui/react"
import ProductCardWoMens from "../ProductCards/ProdctCardWomen"



export default function WomensProduct(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [page , setPage] = useState(1)
    const [order,setOrder] = useState("asc")


    function getData(){
        setLoading(true)
        axios.get(`http://localhost:8080/womensProduct?_limit=9&_page=${page}&_sort=price&_order=${order}`)
        .then((res)=>{
            let mydata = res.data
            setData(mydata)
            setLoading(false)
        })
    }
    const handleClick = (val)=>{
        setPage(page+val)
    }

    const handleOrder = (order)=>{
        setOrder(order)
    }


    useEffect(()=>{
        getData(page,order)
    },[page,order])
    if(loading){
        return <LoadingSkeleton/>
    }


    return (<div>
        <div
    style={{
      display: "grid",
      gridTemplateColumns: "25% 73%",
      gap: "5px",
      marginTop: "10px",
    }}
  >
    {/* ------Left Side------ */}
    <div>
      <Accordion allowToggle>
        <Button 
        rounded={'none'}
        bg='gray.900'
        
        mb='25px'
        color='white'
        border='2px'
        borderColor = 'gray.900'
        ml="8px"
        _hover={{
            bg : 'white',
            color : 'gray.900',
            border:'2px',
            borderColor:'gray.900'
          }}
          fontWeight='bold'
          width='100%'
        onClick={()=>handleOrder("asc")} >Sort ASC ↑</Button>
        <Button 
        rounded={'none'}
        bg='gray.900'
        ml="8px"
        mb='25px'
        color='white'
        border='2px'
        borderColor = 'gray.900'
        _hover={{
            bg : 'white',
            color : 'gray.900',
            border:'2px',
            borderColor:'gray.900'
          }}
          fontWeight='bold'
          width='100%'
        onClick={()=>handleOrder("desc")} >Sort DSC ↓</Button>
        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Mens Wear
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Link to="/electronics/cameras"> Shirts</Link>
            <br />
            <Link to="/electronics/cameras"> T-Shirts </Link> <br />
            <Link to="/electronics/cameras"> Pants </Link>
            <br />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Womens Wear
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Link to="/electronics/smartphone"> Lehnga</Link>
            <br />
            <Link to="/electronics/smartphone"> Saree </Link> <br />
            <Link to="/electronics/smartphone"> Suits </Link>
            <br />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Kids Wears
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Link to="/electronics/computer"> Shirts</Link>
            <br />
            <Link to="/electronics/computer">T-shirts </Link> <br />
            <Link to="/electronics/computer"> Pants </Link>
            <br />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Kitchen Appliances
              </Box>
              <AccordionIcon color={"blue"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Link to="/electronics/smartwatch"> Gas Stoves</Link>
            <br />
            <Link to="/electronics/smartwatch">
              {" "}
              Smart Watches Accessories{" "}
            </Link>
            <br />
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
    </div>
    {/* ------Rigth Side------ */}
    <div>
    <SimpleGrid gap="1px" gridTemplateColumns={{base:'repeat(2,1fr)' , md:'32% 32% 32%'}} >
                {
                    data.map((el)=>(
                        <ProductCardWoMens key={el.id} id={el.id} image={el.image} title={el.title} 
                        price={el.price} category={el.category}  isNew={true} rating={4.2} numReviews={842} product={"mensproduct"} />
                    ))
                }
            </SimpleGrid>
    </div>
 </div>
<Center>
           <Button rounded={'none'}
                    onClick={()=>handleClick(-1)}
                    height={{base:"20px",md:"40px"}}
                    width={{base:"5px",md:"55px"}}
                    
                    bg='gray.900'
                    color='white'
                    border='1px'
                    borderColor = 'gray.900'
                    _hover={{
                        bg : 'white',
                        color : 'gray.900',
                        border:'2px',
                        borderColor:'gray.900'
                      }}
                      fontWeight='bold'
                      

                    >  Prev </Button>
            <Button 
                    mx='7px'
                    my='20px'
                    borderColor = 'gray.900'
                    border='2px'
                    bg='white'
                    rounded={'none'}
                    height={{base:"22px",md:"40px"}}
                    width={{base:"20px",md:"60px"}}
                    fontSize={{base:"10px",md:"18px"}}
                    color='gray.900'
                    _hover={{
                        bg : 'gray.900',
                        color : 'white',
                        
                        
                      }}
                   
                    >{page} 
                    </Button>
                    <Button rounded={'none'}
                    onClick={()=>handleClick(1)}
                    height={{base:"20px",md:"40px"}}
                    width={{base:"5px",md:"55px"}}
                    
                    bg='gray.900'
                    color='white'
                    border='1px'
                    borderColor = 'gray.900'
                    _hover={{
                        bg : 'white',
                        color : 'gray.900',
                        border:'2px',
                        borderColor:'gray.900'
                      }}
                      fontWeight='bold'
                      
                      

                    >Next</Button>
           </Center>
            <Footer/>
    </div>)

    

}
    
