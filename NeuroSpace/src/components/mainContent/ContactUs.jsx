import {Container, Flex, Heading, Text, HStack} from "@chakra-ui/react";

import {CalendarIcon, TimeIcon,PhoneIcon} from "@chakra-ui/icons"
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <Container variant={'main'} py={"2vh"} >
        <Flex bg="blue.50" w="75%" mx="12.5%">
          <Flex bg="green" w="100%" flexDirection={'row'}>
            <Heading>
              Contact Us Anytime, 7 days a Week
            </Heading>
            <Flex flexDir={'column'}>
              <Text>Contact Info</Text>
              <HStack><FaLocationDot/><Text> Vinayak Nagar, Hydershakote, Bandlaguda Jagir, Telangana 500091</Text></HStack>
              <HStack><PhoneIcon/><Text>09618994555</Text></HStack>
            </Flex>
            <Flex flexDir={'column'}>
              <Text>Open Hours</Text>
              <HStack><CalendarIcon/><Text>Monday - Sunday</Text></HStack>
              <HStack><TimeIcon/><Text>8am-12pm & 5pm-9pm</Text></HStack>
            </Flex>
          </Flex>
        </Flex>
    </Container>
  )
}

export default ContactUs