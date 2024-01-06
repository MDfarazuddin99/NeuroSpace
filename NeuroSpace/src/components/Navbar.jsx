import { Box, Flex, Button, Image } from "@chakra-ui/react";
import HeaderLogo from "../assets/HeaderLogo.png";
// import { useHistory } from "react-router-dom";


function Navbar() {

  // const history = useHistory();

  // const handleButtonClick = () => {
  //   // Redirect to the desired URL
  //   history.push("/new-url");
  // };


  return (
    <Box bg="blue.50">
      <Flex align="center" justify="space-between"  marginLeft={10} marginRight={10} >
          <Image src={HeaderLogo} h={100} bg="blue.50" />
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0} >HOME</Button>
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0}>SERVICES</Button>
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0}>DR. SHAKEEB AHRAR</Button>
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0}>BOOK APPOINTMENT</Button>
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0}>CONTACT US</Button>
          <Button bg={"blue.50"} _hover={{bg: 'blue.600', color:'orange'}} h={100} rounded={0}>BLOG</Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
