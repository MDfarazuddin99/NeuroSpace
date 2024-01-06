import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  Image,
  HStack,
  Spacer
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";

function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify={'center'}
      bg="teal.500"
      color="white"
      p={4}
      position="fixed"
      bottom="0"
      width="100%"
      direction={{base:'column', md: 'row'}}
    >

        <Image src={FooterLogo} h={{base: 50, md: 75}} />

      <Spacer/>    
      <Flex direction={{base:'row' , md: 'column'}}>
        <Link href="#" isExternal mx={{base: 0, md: 2}} my={1}>
          <IconButton
            icon={<FaTwitter />}
            aria-label="Twitter"
            colorScheme="whiteAlpha"
          />
        </Link>
        <Link href="#" isExternal mx={{base: 0, md: 2}} my={1}>
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook"
            colorScheme="whiteAlpha"
          />
        </Link>
        <Link href="#" isExternal mx={{base: 0, md: 2}} my={1}>
          <IconButton
            icon={<FaInstagram />}
            aria-label="Instagram"
            colorScheme="whiteAlpha"
          />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
