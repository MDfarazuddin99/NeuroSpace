import {Box, Flex, Text, Link, IconButton, Image} from '@chakra-ui/react';
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
          <Text fontSize="lg" fontWeight="bold">
            NeuroSpace
          </Text>
          <Image src={FooterLogo} h={75} />
          <Text mt={2}>opposite to Pillar Number 45, Rethibowli, Mehdipatnam, Hyderabad, Telangana 500028</Text>
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