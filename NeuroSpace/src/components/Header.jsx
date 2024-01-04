import { Box, Flex, Spacer, Text, Icon, Link } from '@chakra-ui/react';
import { IoLocationSharp } from "react-icons/io5";
import { PhoneIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';


function Header(){
    return (
        <Box bg="teal.500" p={4} color="white">
        <Flex align="center">
          {/* Left Side (Logo) */}
          <Box>
            {/* Your logo component goes here */}
            <Text fontSize="4xl" fontWeight="bold">
              NeuroSpace
            </Text>
          </Box>
  
          {/* Right Side */}
          <Spacer />

          {/* Address Section */}
          <Link href="https://maps.app.goo.gl/95jFxfrWTtUzHDbg8">
            <Box display="flex" alignItems="center">
                <Icon as={IoLocationSharp} mr={2} />
                <Text>Address: opposite to Pillar Number 45, Rethibowli, Mehdipatnam, Hyderabad, Telangana 500028</Text>
                <ExternalLinkIcon ml={2}/>
            </Box>          
          </Link>
          {/* Email Section */}
          
          <Box display="flex" alignItems="center" ml={4}>
            <EmailIcon mr={2} />
            <Text whiteSpace="pre-line" >
                Email Us:
                xyz@neurospace.com
            </Text>
          </Box>
  
          {/* Phone Section */}
          <Box display="flex" alignItems="center" ml={4}>
            <PhoneIcon mr={2} />
            <Text>Contact Us: 07032107724</Text>
          </Box>
        </Flex>
      </Box>
    )
}

export default Header