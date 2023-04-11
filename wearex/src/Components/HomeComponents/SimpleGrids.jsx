import { SimpleGrid } from '@chakra-ui/react'


export default function MySimpleGrid({images}){
    return (
        <SimpleGrid columns={3} spacing={0}>
            {
                images.map((el,i)=>(
                    <img key={i} src={el} alt='name' />
                ))
            }
        </SimpleGrid>
    )
} 