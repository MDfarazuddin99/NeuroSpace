import { Box, Flex, Button, Image } from "@chakra-ui/react";
import HeaderLogo from "../assets/HeaderLogo.png";
import {Link} from 'react-router-dom';

function Navbar() {



  return (
    <Box bg="blue.50">
      <Flex align="center" justify="space-between"  marginLeft={10} marginRight={10} >
          <Image src={HeaderLogo} h={100} bg="blue.50" />
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/">Home</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/services">SERVICES</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/shakeeb">DR. SHAKEEB AHRAR</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/book-appointment">BOOK APPOINTMENT</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/contact-us">CONTACT US</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/blog">BLOG</Link></Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
