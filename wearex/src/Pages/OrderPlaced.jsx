import {Image, Center,Button , Box, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function OrderPlaced(){
    window.scrollTo({
        top: 0,
    });
    return <Box mt={150} >
            <Image  width={{base:'125px',sm:'250px'}} height={{base:'125px',sm:'250px'}}  margin={'auto'} src='https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif' alt='image' />
            <Heading mt={5} mb={5} textAlign={'center'} >Your Order Placed Successfull</Heading>
            <Center><Link to='/' ><Button mb={400} bg='blue.300' >Go To Home</Button></Link></Center>
    </Box>
    
}
// https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif