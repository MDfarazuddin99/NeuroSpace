import {  Flex, Spacer, Text, Button, Icon} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import {Link} from 'react-router-dom';
function Header(){
    return (
        <Flex bg="teal.500" color="white"  align="center" p={1} direction={{base: 'column', md: 'row'}} justify={'center'}

        >
          <Text  fontSize={{base: 'md', md:'xl'}} fontWeight={'bold'} ml={{base: 0, md: "5%"}} mt={{base: 1, md: 0}}>
            MON-SAT: 5PM – 9PM
          </Text>
          <Text  fontSize={{base: 'md', md:'xl'}} fontWeight={'bold'} ml={{base: 0, md: "5%"}} mt={{base: 1, md: 0}}>
            <Icon as={FaLocationDot}/> Mehdipatnam, Hyderabad
          </Text>
          <Text  fontSize={{base: 'md', md:'xl'}} fontWeight={'bold'} ml={{base: 0, md: "5%"}} mt={{base: 1, md: 0}}>
            <Icon as={FaPhoneAlt}/> 7032107724
          </Text>          
          <Spacer display={{base: 'none', md: 'block'}}/>
          <Button bg={'orange'} rightIcon={<ArrowForwardIcon />} flex={"None"} mr={{md: "10%"}} _hover={{bg:'blue.50'}} mb={{base: 1, md : 0}}>
          <Link to="/contact-us">Contact Us</Link>
          </Button>
        </Flex>

    )
}

export default Header