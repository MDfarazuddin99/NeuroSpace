import { Flex, Image, Box, Text } from "@chakra-ui/react";

import bgimage from "../../assets/bg_image.jpg";
import banner from "../../assets/home_page_banner.png";
import banner2 from "../../assets/home_page_banner_2.png";



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {

  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <Image
          display={{ base: "none", md: "initial" }}
          src={banner}
          h={{ md: "90vh", base: "30vh" }}
        />
        <Image
          display={{ base: "initial", md: "none" }}
          src={banner2}
          h={{ md: "90vh", base: "30vh" }}
        />
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
        ></Box>
        <Flex
          display={{ base: "initial", md: "none" }}
          bg="blue.50"
          w="100%"
          p="1%"
          
        >
          <Flex>
            <Text fontSize={"22"}>
              We at neurospace provide you the best possible team of doctors
              experienced in the field of Neurology , orthopedics , psychiatry
              and physiotherapy. Being located at the center of city, our clinic
              is easily approachable . We also have a pharmacy providing easy
              access to the medications.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
