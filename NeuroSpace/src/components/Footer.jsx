import {Box, Flex, Text, Link, IconButton, Image, HStack} from '@chakra-ui/react';
import { IoLocationSharp } from "react-icons/io5";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import FooterLogo from "../assets/FooterLogo.png";


function Footer(){
    return (
        <Flex
        as="footer"
        align="center"
        justify="space-between"
        bg="teal.500"
        color="white"
        p={4}
        position="fixed"
        bottom="0"
        width="100%"
      >
        {/* Footer Content */}
        <Box>
          <Image src={FooterLogo} h={75} />
          {/* <Text mt={2}>opposite to Pillar Number 45, Rethibowli, Mehdipatnam, Hyderabad, Telangana 500028</Text> */}
          <Link href="https://maps.app.goo.gl/95jFxfrWTtUzHDbg8">
            <HStack display="flex" alignItems="center">
                <Icon as={IoLocationSharp} />
                    <Text>Address: </Text>
                    <Text>opposite to Pillar Number 45, Rethibowli, Mehdipatnam, Hyderabad, Telangana 500028</Text>
                    <ExternalLinkIcon ml={2}/>
            </HStack>          
          </Link>
        </Box>
  
        {/* Social Media Icons */}
        <Box>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaTwitter />} aria-label="Twitter" colorScheme="whiteAlpha" />
          </Link>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" colorScheme="whiteAlpha" />
          </Link>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaInstagram />} aria-label="Instagram" colorScheme="whiteAlpha" />
          </Link>
        </Box>
      </Flex>
    )
};

export default Footer;