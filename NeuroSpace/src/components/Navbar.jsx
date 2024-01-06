import { Box, Flex, Button, Image } from "@chakra-ui/react";
import HeaderLogo from "../assets/HeaderLogo.png";
import {Link} from 'react-router-dom';

function Navbar() {



  return (
      <Flex bg="blue.50" align="center" justify="space-between"   direction={{base:'column' , md: 'row'}}>
          <Image src={HeaderLogo} h={{base:75, md: 100}} bg="blue.50" />
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/">Home</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/services">SERVICES</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/shakeeb">DR. SHAKEEB AHRAR</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/book-appointment">BOOK APPOINTMENT</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/contact-us">CONTACT US</Link></Button>
          <Button bg={"blue.50"} _hover={{bg: 'teal.500', color:'orange'}} h={100} rounded={0} ><Link to="/blog">BLOG</Link></Button>
      </Flex> 
  );
}

export default Navbar;
