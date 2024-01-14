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
      {/* <Box
        backgroundImage={bgimage}
        minH={{ base: "20vh", md: "40vh" }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Box> */}
      <Flex minH="1000px" bg="blue.100" w="full" flexDir={"column"}>
        <Box
          display={{ md: "none", base: "flex" }}
          bg="blue.200"
          justifyContent={"center"}
        >
          <Heading fontSize={"xl"} color="blue.600">
            NeuroSpace
          </Heading>
        </Box>
        <Flex
          px={"2%"}
          py={"1%"}
          bg="blue.100"
          w="100%"
          h={{ md: 225, base: 105 }}
        >
          <Image src={hplogo} h={{ md: 200, base: 100 }} />
          <Flex alignItems={"center"} justifyContent={"center"} w="100%">
            <Box display={{ base: "none", md: "initial" }}>
              <Heading fontSize={{ md: "6xl", base: "3xl" }} color="blue.600">
                NeuroSpace
              </Heading>
              <Heading fontSize={{ md: "2xl", base: "md" }}>
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
        <Flex w="100%">
          <Carousel centerMode="True" autoPlay="True" infiniteLoop="True" showArrows="True">
            <Box>
              <Image src={c1} h={"60vh"} />
            </Box>
            <Box>
              <Image src={c2} h={"60vh"} />
            </Box>
            <Box>
              <Image src={c3} h={"60vh"} />
            </Box>
          </Carousel>
        </Flex>
        <Flex bg="red" w={{md: "70%", base:"90%"}} mx={{base:"5%", md:"15%"}} mb={100} display={{base:'none', md: 'initial'}}>
        <iframe  width="100%" height="600" src="https://www.youtube.com/embed/1rRSgqcqdn4?si=D8xU925dm805PlRu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Flex>
        <Flex  m={10} display={{base:'initial', md: 'none'}}>
        <iframe   src="https://www.youtube.com/embed/1rRSgqcqdn4?si=D8xU925dm805PlRu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Flex>

      </Flex>




      
    </Flex>
  );
};

export default Home;
