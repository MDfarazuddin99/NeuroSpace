import {
  Container,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
  Spacer,
} from "@chakra-ui/react";

import { CalendarIcon, TimeIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <Container variant={"main"} py={"2vh"}>
      <Flex backdropFilter="blur(5px)">
        <Flex bg="blue.50" w="75%" mx="12.5%" flexDir={"column"}>
          <Flex
            bg="blue.50"
            w="100%"
            flexDirection={{ md: "row", base: "column" }}
            fontSize={"lg"}
            px="2%"
          >
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Heading fontSize={"5xl"}>
                Contact Us Anytime, 7 days a Week
              </Heading>
              <Flex flexDirection={{base:'column', md:'row'}}>
                <Flex flexDir={"column"} w="50%" mx="2%" fontSize={"20px"}>
                  <Text fontWeight={"bold"} w={{md: "50%", base:"100%"}} mx="25%">
                    Contact Info
                  </Text>
                  <HStack mb="2%">
                    <Icon as={FaLocationDot} />
                    <Text>
                      {" "}
                      Ground Floor, 12-2-727/44, Ring Road, Rethi Bowli Rd,
                      opposite Pillar no 45, Mehdipatnam, Hyderabad, Telangana
                      500028
                    </Text>
                  </HStack>
                  <HStack>
                    <PhoneIcon />
                    <Text>7032107724</Text>
                  </HStack>
                </Flex>
                <Spacer />
                <Flex flexDir={"column"} W="50%" mx="2%" fontSize={"20px"}>
                  <Text fontWeight={"bold"} mb="5%" w="70%" mx="15%">
                    Open Hours
                  </Text>
                  <HStack mb="5%">
                    <CalendarIcon />
                    <Text>Monday - Saturday</Text>
                  </HStack>
                  <HStack>
                    <TimeIcon />
                    <Text>5pm-9pm</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Heading>Map</Heading>
            <iframe
              display={{ base: "none", md: "initial" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.540956136136!2d78.42587023542872!3d17.396153941362982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976492c87e31%3A0x2468e03e03b2c00e!2sNeurospace%20Excellence%20In%20Brain%20Spine%20%26%20Pain%20Care!5e0!3m2!1sen!2sin!4v1705258860149!5m2!1sen!2sin"
              width="800"
              height="600"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent={"center"}
            m="2%"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Heading>Map</Heading>

            <iframe
              display={{ base: "none", md: "initial" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.540956136136!2d78.42587023542872!3d17.396153941362982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976492c87e31%3A0x2468e03e03b2c00e!2sNeurospace%20Excellence%20In%20Brain%20Spine%20%26%20Pain%20Care!5e0!3m2!1sen!2sin!4v1705258860149!5m2!1sen!2sin"
              width="200"
              height="200"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ContactUs;
