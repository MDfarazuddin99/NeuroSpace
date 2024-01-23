import {
  Container,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import google from "../../assets/google.png";

const Blog = () => {
  const handleButtonClick = (externalLink) => {
    window.open(externalLink, "_blank");
  };

  const googleReviews = [
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      rating: 4,
      reviewText: "Great experience! Highly recommend.",
    },
  ];

  return (
    <Container variant="main" py={"2vh"} p={0}>
      <Flex
        backdropFilter="blur(5px)"
        justifyContent={"center"}
        h={{ base: "auto", md: "100%" }}
      >
        <Flex bg="blue.50" my="1%" w={{ md: "80%", base: "100%" }} p={"1%"}>
          <Flex flexDirection={"column"} w="100%">
            <Flex justifyContent={"center"}>
              <Image h="150px" src={google} />
            </Flex>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
              gap={6}
              mx={"1%"}
            >
              {googleReviews.map((review, idx) => (
                <Box
                  key={idx}
                  bg="white"
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Flex alignItems="center">
                    <Avatar src={review.avatarUrl} alt={review.name} mr={4} />
                    <Box>
                      <Heading as="h3" size="md" mb={2}>
                        {review.name}
                      </Heading>
                      <Flex alignItems="center">
                        {Array.from({ length: review.rating }, (_, index) => (
                          <FaStar key={index} color="#FFD700" />
                        ))}
                      </Flex>
                    </Box>
                  </Flex>
                  <Text mt={4}>{review.reviewText}</Text>
                </Box>
              ))}
            </Grid>
            <Flex my={"5%"} justifyContent={"center"}>
              <Stack
                direction={{ base: "columb", md: "row" }}
                w={{ base: "100%", md: "30%" }}
              >
                <Button
                  bg="blue.500"
                  m={0}
                  _hover={{ bg: "teal.500" }}
                  onClick={() => {
                    handleButtonClick(
                      "https://www.google.com/search?kgmid=/g/11nn4nvjth&hl=en-IN&q=NEUROSPACE-+Dr+Shakeeb+Ahrar+.+MD,+DM+Neurology+(NIMS)+(Gold+Medalist).+Best+Neurologist+in+Hyderabad.&kgs=0a3ecf775bda2391&shndl=17&source=sh/x/kp/osrp/m5/2"
                    );
                  }}
                >
                  View More
                </Button>
                <Button
                  bg="green.500"
                  m={0}
                  _hover={{ bg: "teal.500" }}
                  onClick={() => {
                    handleButtonClick(
                      "https://www.google.com/search?kgmid=/g/11nn4nvjth&hl=en-IN&q=NEUROSPACE-+Dr+Shakeeb+Ahrar+.+MD,+DM+Neurology+(NIMS)+(Gold+Medalist).+Best+Neurologist+in+Hyderabad.&kgs=0a3ecf775bda2391&shndl=17&source=sh/x/kp/osrp/m5/2"
                    );
                  }}
                >
                  Write a Review
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Blog;
