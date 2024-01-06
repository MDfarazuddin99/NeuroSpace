import {  Flex, Spacer, Text, Button} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <Flex bg="teal.500" color="white"  align="center" p={1} direction={{base: 'column', md: 'row'}} justify={'center'}>
          <Text fontSize={{base: 'md', md:'2xl'}} fontWeight={'bold'} ml={{base: 0, md: "5%"}}>
            TIMINGS: MON-SAT: 8AM – 12PM  |   5PM – 9PM
          </Text>
          <Spacer />
          <Button bg={'orange'} rightIcon={<ArrowForwardIcon />} flex={"None"} mr={{md: "10%"}} >
          <Link to="/book-appointment">BOOK APPOINTMENT</Link>
          </Button>
        </Flex>

    )
}

export default Header