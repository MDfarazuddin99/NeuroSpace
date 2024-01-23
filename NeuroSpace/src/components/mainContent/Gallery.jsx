import { Container, Flex, Image, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import c1 from "../../assets/clinic/clinic1.jpg";
import c2 from "../../assets/clinic/clinic2.jpg";
import c3 from "../../assets/home_slide_show.jpeg";
import c4 from "../../assets/clinic/clinic5.png";
import c5 from "../../assets/clinic/clinic6.png";
import c6 from "../../assets/clinicimage.jpeg";

const Gallery = () => {
  const homeCarousel = [c1, c2, c3, c4, c5, c6];

  return (
    <Container variant={"main"} p={0}>
      <Flex
        backdropFilter="blur(5px)"
      >
        <Flex alignItems="center" bg="blue.100" flexDirection={"column"}>
          <Heading>Gallery</Heading>
          <Flex w={{base:"100%", md:"50%"}}>
            <Carousel autoPlay="true" infiniteLoop="true">
              {homeCarousel.map((image, idx) => {
                return <Image src={image} key={idx} h="500px" />;
              })}
            </Carousel>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Gallery;
