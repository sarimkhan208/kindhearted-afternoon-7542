import {Image, Center , Box, Heading } from "@chakra-ui/react"

export default function OrderPlaced(){
    return <Box  style={{backgroundColor : '#F5F5F5',height:"600px",width:'100%'}} >
        <Center>
            <Image height={'300px'} width='300px' src='https://imgs.search.brave.com/e_WboFQ0mGdPs9Cm5w24OEhMCVUSICqqtMS75hfVeVE/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzEwNi0x/MDY0OTAyX3RyYW5z/cGFyZW50LWNoZWNr/LW1hcmstZ2lmLXBu/Zy1kb3dubG9hZC1k/b25lLWljb24ucG5n' alt='name' />
        </Center>
       <Center>
            <Heading>Your Order Has Been Placed!</Heading>
        </Center> 
    </Box> 
}