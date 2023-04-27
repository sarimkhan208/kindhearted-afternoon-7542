import {useEffect, useState ,useContext} from "react"
import { Box, Button,Center, SimpleGrid, Image} from '@chakra-ui/react'
import MensProductCard from "./MensProductCard"
import LoadingSkeleton from '../../Loading/Skeleton'
import MensProductsSubNavbar from "./MensProductsSubNavbar"
import MensProductSidebar from "./MensProductSidebar"
import { getProductMens } from "../../Redux/MensProduct/action"
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, useSearchParams } from "react-router-dom"

export default function MensProduct(){

    const [page , setPage] = useState(1)
    const dispatch = useDispatch()
    let data = useSelector((state)=>state.mensProductReducer.data)
    const isLoading = useSelector((state)=>state.mensProductReducer.isLoading)
    const [params,setParams] = useSearchParams()
    const location = useLocation()

    window.scrollTo({
        top: 0,
    });

    
    if(params.get("priceRange")){
        let val1=0,val2=0
        if(params.get("priceRange") == 'below2000'){
            val2=2000
        }
        else if(params.get("priceRange") == '2001-5000'){
            val1=2001
            val2=5000
        }
        else if(params.get("priceRange") == '5001-10000'){
            val1=5001
            val2=10000
        }
        data = data.filter((el)=>el.price>=val1 && el.price<=val2)
    }


    let obj = {
        params : {
            category : params.getAll("category") ,
            brand : params.getAll("brand") ,
            color : params.getAll("color"),
            _sort : params.get('order') && "price",
            _order : params.get('order'),
            _limit : 8,
            _page : page
        }
    }
   
    const handleClick = (val)=>{
        setPage(page+val)
        window.scrollTo({
            top: 0,
          });
    }
    


    useEffect(()=>{
        dispatch(getProductMens(obj))
    },[location,page])


    return (<div>
        
            <MensProductsSubNavbar/>
        
          
            <Box display={'grid'} gap='5px' mt={'10px'} gridTemplateColumns= {{base:'0% 100%',sm:"25% 73%"}}>
                {/* ------Left Side------ */}
                <div>
                <MensProductSidebar/>
                </div>
                {/* ------Rigth Side------ */}
                {
                    isLoading?<Image
                    src="https://i.stack.imgur.com/hzk6C.gif"
                    alt="loading"
                    margin="auto"
                    paddingTop="90px"
                    marginBottom="360px"
                    />:<div>
                    <SimpleGrid pl={2} gridTemplateColumns={{base:'repeat(2,1fr)' , sm:'32% 32% 32%'}} gap={{base:'0px',sm:'15px'}} >
                        {
                            data.map((el)=>(
                                <MensProductCard key={el.id} {...el}/>
                            ))
                        }
                    </SimpleGrid>
                    </div>
                }
            </Box>
            <Center>
                <Button     rounded={'none'}
                            isDisabled = {page==1}
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
                            isDisabled = {data.length<8}
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
    </div>)


}
    























































































// import {useEffect, useState } from "react"
// import axios from "axios"
// import { Box, Button, Center, GridItem, SimpleGrid } from '@chakra-ui/react'
// import MensProductCard from '../ProductCards/MensProductCard'
// import Footer from "../Footer/Footer"
// import LoadingSkeleton from '../Loading/Skeleton'


// export default function MensProduct(){

//     const [data,setData] = useState([])
//     const [page , setPage] = useState(1)
//     const [loading , setLoading] = useState(false)
    


//     function getData(page){
//         setLoading(true)
//         axios.get(`${BaseURL}/mensProduct?_limit=9&_page=${page}`)
//         .then((res)=>{
//             let mydata = res.data
//             setData(mydata)
//             setLoading(false)
//         })
//     }

//     const handleClick = (val)=>{
//         setPage(page+val)
//     }


//     useEffect(()=>{
//         getData(page)
//     },[page])

//     if(loading){
//         return <LoadingSkeleton/>
//     }



//     return (<Box>
//             <SimpleGrid gap="1px" gridTemplateColumns={{base:'repeat(2,1fr)' , md:'repeat(3 , 1fr)'}} >
//                 {
//                     data.map((el)=>(
//                         <MensProductCard key={el.id} id={el.id} image={el.image} title={el.title} 
//                         price={el.price} category={el.category}  isNew={true} rating={4.2} numReviews={842} product={"mensproduct"} />
//                     ))
//                 }
//             </SimpleGrid>
//            <Center>
//            <Button rounded={'none'}
//                     onClick={()=>handleClick(-1)}
//                     height={{base:"20px",md:"40px"}}
//                     width={{base:"5px",md:"55px"}}
                    
//                     bg='gray.900'
//                     color='white'
//                     border='1px'
//                     borderColor = 'gray.900'
//                     _hover={{
//                         bg : 'white',
//                         color : 'gray.900',
//                         border:'2px',
//                         borderColor:'gray.900'
//                       }}
//                       fontWeight='bold'
                      

//                     >  Prev </Button>
//             <Button 
//                     mx='7px'
//                     my='20px'
//                     borderColor = 'gray.900'
//                     border='2px'
//                     bg='white'
//                     rounded={'none'}
//                     height={{base:"22px",md:"40px"}}
//                     width={{base:"20px",md:"60px"}}
//                     fontSize={{base:"10px",md:"18px"}}
//                     color='gray.900'
//                     _hover={{
//                         bg : 'gray.900',
//                         color : 'white',
                        
                        
//                       }}
                   
//                     >{page} 
//                     </Button>
//                     <Button rounded={'none'}
//                     onClick={()=>handleClick(1)}
//                     height={{base:"20px",md:"40px"}}
//                     width={{base:"5px",md:"55px"}}
                    
//                     bg='gray.900'
//                     color='white'
//                     border='1px'
//                     borderColor = 'gray.900'
//                     _hover={{
//                         bg : 'white',
//                         color : 'gray.900',
//                         border:'2px',
//                         borderColor:'gray.900'
//                       }}
//                       fontWeight='bold'
                      
                      

//                     >Next</Button>
//            </Center>
//             <Footer/>
            
//             </Box>)
    


// }
    
