import { Flex, Heading, Image, Box, Text } from "@chakra-ui/react";

import hplogo from "../../assets/homepagelogo.png";
import shakeeb from "../../assets/shakeeb.jpeg";
import bgimage from "../../assets/bg_image.jpg";
import banner from "../../assets/home_page_banner.png";


import c1 from "../../assets/clinic/clinic1.jpg";
import c2 from "../../assets/clinic/clinic2.jpg";
import c3 from "../../assets/home_slide_show.jpeg";
import c4 from "../../assets/clinic/clinic5.png";
import c5 from "../../assets/clinic/clinic6.png";
import c6 from "../../assets/clinicimage.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const homeCarousel = [c1, c2, c3, c4, c5, c6];

  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <Image src={banner} h={{md:"90vh", base: '30vh'}}/>
      </Flex>


      <Flex
        w="full"
        flexDir={"column"}
        backgroundImage={bgimage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box
          display={{ md: "none", base: "flex" }}
          bg="blue.200"
          justifyContent={"center"}
        >
          <Heading
            fontSize={"2xl"}
            color="white"
            bgGradient="linear(to-r, blue.500, teal.500)"
            bgClip="text"
            fontWeight="bold"
          >
            NeuroSpace
          </Heading>
        </Box>

        {/* <Flex w="100%" backdropFilter=" blur(10px)" px={"2%"} py={"1%"}>
          <Image src={hplogo} h={{ md: 200, base: 100 }} />
          <Flex alignItems={"center"} justifyContent={"center"} w="100%">
            <Box display={{ base: "none", md: "initial" }}>
              <Heading
                fontSize={{ md: "9xl", base: "3xl" }}
                color="white"
                bgGradient="linear(to-r, blue.900, teal.500)"
                bgClip="text"
                fontWeight="bold"
              >
                NeuroSpace
              </Heading>
              <Heading fontSize={{ md: "4xl", base: "md" }} color={"blue.900"}>
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
         */}
        <Flex
          w={{ base: "100%", md: "50%" }}
          mx={{ md: "25%", base: 0 }}
          alignItems={"center"}
        >
          <Carousel autoPlay="true" infiniteLoop="true">
            {homeCarousel.map((image, idx) => (
              <Image src={image} w="70%" h="70vh" key={idx} />
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
