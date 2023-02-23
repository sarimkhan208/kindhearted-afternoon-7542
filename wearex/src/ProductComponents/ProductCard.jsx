import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Center,
  } from '@chakra-ui/react';
import { useContext } from 'react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import {Link} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Box display='flex' flexDirection="row" alignItems="center"  >
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        
      </Box>
    );
  }
  
function ProductCard({id,image,title,category,price,isNew , rating , numReviews , product}) {
  const {setProduct} = useContext(AuthContext)
  setProduct(product)
  console.log(product)
    return (
      <Link to={`/${product}/${id}`} >
        <Flex p={{base:3,md:30}}   justifyContent='center'>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          w={{base : "220px",  md : "320px"}}
          h={{base : "360px" , md : "500px"}}
         
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Center>
          <Image
          height={{base : 240 , md : 320}}
          width={{base : "220px" , md :60}}
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
          />
          </Center>
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize={{base:"0.6em", md:"0.8em"}} colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                
                fontSize={{base:"12", md:"23"}}
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={{base:5,md:7}} w={{base:5,md:7}} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} numReviews={numReviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      </Link>
    );
  }
  
  export default ProductCard;