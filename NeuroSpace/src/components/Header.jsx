import {  Flex, Spacer, Text, Button} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Header(){
    return (
        <Flex bg="teal.500" color="white"  align="center" p={1} direction={{base: 'column', md: 'row'}} justify={'center'}>
          <Text fontSize={{base: 'md', md:'2xl'}} fontWeight={'bold'} >
            TIMINGS: MON-SAT: 8AM – 12PM  |   5PM – 9PM
          </Text>
          <Spacer />
          <Button bg={'orange'} rightIcon={<ArrowForwardIcon />} flex={"None"} mr={{md: "10%"}} >
            Book Appointment
          </Button>
        </Flex>

    )
}

export default Header