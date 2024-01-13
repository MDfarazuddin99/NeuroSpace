import { Container, Flex, Heading, Image, Box } from "@chakra-ui/react";
import ReactFloaterJs from "react-floaterjs";

import hplogo from "../../assets/homepagelogo.png";
import shakeeb from "../../assets/Shakeeb.jpeg";
import React from "react";
import bgimage from "../../assets/bg_image.jpg";

const Home = () => {
  return (
    <Flex flexDirection={'column'}>
      <Box
          backgroundImage={bgimage}
          minH= {{base: '20vh', md: '40vh'}}
          backgroundSize= "cover"
          backgroundPosition= "center"
          backgroundRepeat= "no-repeat"
        >
  
        </Box>
        <Flex
          minH="1000px"
          bg="blue.50"
          w="full"
          flexDir={"column"}
        >
          <Box display={{ md: "none", base: "flex" }} bg="blue.200" justifyContent={'center'}>
            <Heading fontSize={"xl"} color="blue.600" >
              NeuroSpace
            </Heading>
          </Box>
          <Flex
            px={"2%"}
            py={"1%"}
            bg="blue.100"
            w="100%"
            h={{ md: 325, base: 105 }}
          >
            <Image src={hplogo} h={{ md: 300, base: 100 }} />
            <Flex alignItems={"center"} justifyContent={"center"} w="100%">
              <Box display={{ base: "none", md: "initial" }}>
                <Heading fontSize={{ md: "9xl", base: "3xl" }} color="blue.600">
                  NeuroSpace
                </Heading>
                <Heading fontSize={{ md: "2xl", base: "md" }}>
                  Excellence in Brain, Spine and Pain Care
                </Heading>
              </Box>
            </Flex>
            <Image
              src={shakeeb}
              h={{ md: 300, base: 100 }}
              borderRadius={"50%"}
              bg="blue.300"
              p={3}
            />
          </Flex>
        </Flex>      
    </Flex>
  );
};

export default Home;
