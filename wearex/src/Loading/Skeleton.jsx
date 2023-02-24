import {SkeletonCircle , SkeletonText , Box, SimpleGrid } from '@chakra-ui/react'

export default function LoadingSkeleton(){
    return <Box padding='6' boxShadow='lg' bg='white'>

            
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                
               
                    
           
            </Box>
}