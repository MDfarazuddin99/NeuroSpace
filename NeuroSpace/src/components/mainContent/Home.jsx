import { Flex, Heading, Image, Box } from "@chakra-ui/react";

import hplogo from "../../assets/homepagelogo.png";
import shakeeb from "../../assets/shakeeb.jpeg";
import bgimage from "../../assets/bg_image.jpg";

import c1 from "../../assets/clinic/clinic1.jpg";
import c2 from "../../assets/clinic/clinic2.jpg";
// import c3 from "../../assets/electrophys.jpeg"
import c6 from "../../assets/clinic/clinic6.png";
import c5 from "../../assets/clinic/clinic5.png";
import c7 from "../../assets/clinicimage.jpeg";
import c3 from "../../assets/home_slide_show.jpg";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex w="full" flexDir={"column"} backgroundImage={bgimage}>
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

        <Flex w="100%" backdropFilter=" blur(10px)" px={"2%"} py={"1%"}>
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
        <Flex width={"75%"} mx="12.5%">
          <Carousel
            centerMode="True"
            autoPlay="True"
            infiniteLoop="True"
            showArrows="True"
          >
            <Image src={c6} h={"60vh"}  />
            <Image src={c1} h={"60vh"} objectFit={"cover"} />
            <Image src={c2} h={"60vh"} objectFit={"cover"} />
            <Image src={c3} h={"60vh"} objectFit={"cover"} />
            <Image src={c5} h={"60vh"} objectFit={"cover"} />
            <Image src={c7} h={"60vh"} objectFit={"cover"} />

          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
