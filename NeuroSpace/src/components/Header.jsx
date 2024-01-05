import { Box, Flex, Spacer, Text, Icon, Link, HStack, VStack , Image} from '@chakra-ui/react';
import { IoLocationSharp } from "react-icons/io5";
import { PhoneIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import HeaderLogo from "../assets/HeaderLogo.png";



function Header(){
    return (
        <Box bg="teal.500" color="white">
        <Flex align="center" >
          {/* Left Side (Logo) */}
          <Box as="imagebox">
            {/* Your logo component goes here */}
            {/* <Text fontSize="4xl" fontWeight="bold">
              NeuroSpace
            </Text> */}
            <Image src={HeaderLogo} h={125} bg="blue.50"/>
          </Box>
  
          {/* Right Side */}
          <Spacer />

        <Box mr={'4rem'} fontSize={'xl'}>

          {/* Address Section */}
          <Link href="https://maps.app.goo.gl/95jFxfrWTtUzHDbg8">
            <HStack display="flex" alignItems="center">
                <Icon as={IoLocationSharp} />
                    <Text>Address: </Text>
                    <Text>opposite to Pillar Number 45, Rethibowli, Mehdipatnam, Hyderabad, Telangana 500028</Text>
                    <ExternalLinkIcon ml={2}/>
            </HStack>          
          </Link>
          {/* Email Section */}
          
          <Box display="flex" alignItems="center" >
            <EmailIcon mr={2} />
            <Text whiteSpace="pre-line" >
                Email Us:
                xyz@neurospace.com
            </Text>
          </Box>
  
          {/* Phone Section */}
          <Box display="flex" alignItems="center" >
            <PhoneIcon mr={2} />
            <Text>Contact Us: 07032107724</Text>
          </Box>            
        </Box>

        </Flex>
      </Box>
    )
}

export default Header