import { Flex, Heading, Image, Box } from "@chakra-ui/react";

import hplogo from "../../assets/homepagelogo.png";
import shakeeb from "../../assets/shakeeb.jpeg";
import bgimage from "../../assets/bg_image.jpg";

import c1 from "../../assets/clinic/clinic1.jpg";
import c2 from "../../assets/clinic/clinic2.jpg";
import c3 from "../../assets/clinic/clinic3.jpg";
import c4 from "../../assets/clinic/clinic4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Flex flexDirection={"column"}>

      <Flex w="full" flexDir={"column"}
        backgroundImage={bgimage}
      >
        <Box
          display={{ md: "none", base: "flex" }}
          bg="blue.200"
          justifyContent={"center"}
        >
          <Heading fontSize={"2xl"} 
                  color="white"
                  bgGradient="linear(to-r, blue.500, teal.500)"
                  bgClip="text"
                  fontWeight="bold"               
          >
            NeuroSpace
          </Heading>
        </Box>

          <Flex w="100%" backdropFilter=" blur(10px)" px={"2%"} py={"1%"}
          >
            <Image src={hplogo} h={{ md: 200, base: 100 }} />
            <Flex alignItems={"center"} justifyContent={"center"} w="100%">
              <Box display={{ base: "none", md: "initial" }}>
                <Heading
                  fontSize={{ md: "9xl", base: "3xl" }}
                  color="white"
                  bgGradient="linear(to-r, blue.500, teal.500)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  NeuroSpace
                </Heading>
                <Heading fontSize={{ md: "4xl", base: "md" }} color={'gray.50'}>
                  Excellence in Brain, Spine and Pain Care
                </Heading>
              </Box>
            </Flex>
            <Image
              src={shakeeb}
              h={{ md: 200, base: 100 }}
              borderRadius={"50%"}
              bg="blue.300"
              p={3}
            />
          </Flex>
        <Flex backdropFilter=" blur(10px)">
          <Carousel
            centerMode="True"
            autoPlay="True"
            infiniteLoop="True"
            showArrows="True"            
          >
              <Image src={c1} h={"50vh"} objectFit={"cover"} />
              <Image src={c2} h={"50vh"} objectFit={"cover"} />
              <Image src={c3} h={"50vh"} objectFit={"cover"} />
          </Carousel>
        </Flex>
        <Flex backdropFilter="blur(5px)">
        <Flex
          w={{ md: "70%", base: "90%" }}
          mx={{ base: "5%", md: "15%" }}
          mb={100}
          display={{ base: "none", md: "initial" }}
        >
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/1rRSgqcqdn4?si=D8xU925dm805PlRu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Flex>
        <Flex display={{ base: "initial", md: "none" }}>
          <iframe
            src="https://www.youtube.com/embed/1rRSgqcqdn4?si=D8xU925dm805PlRu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Flex>          
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
