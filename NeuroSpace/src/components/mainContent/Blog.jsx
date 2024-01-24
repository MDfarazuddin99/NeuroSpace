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
  Link,
} from "@chakra-ui/react";

import meher from "../../assets/reviews/meher_khan.png";
import navya from "../../assets/reviews/navya.png";
import tanveer from "../../assets/reviews/tanveer.png";
import neha from "../../assets/reviews/neha.png";
import arif from "../../assets/reviews/arif.png";
import omer from "../../assets/reviews/omer.png";
import { FaStar } from "react-icons/fa";
import google from "../../assets/google.png";

import {useNavigate} from "react-router-dom";



const Blog = () => {
  const navigateTo = useNavigate();

  const handleButtonClick = (externalLink) => {
    window.open(externalLink, "_blank");
  };

  const handleClick = (newPath) => {
    // Use the history object to navigate to the new URL
    console.log("button pressed");
    navigateTo(newPath);
  };
  const maxLength = 300;

  const googleReviews = [
    {
      name: "Meher Khan",
      avatarUrl: meher,
      rating: 5,
      reviewText: `Assalamualaikum wa rahmatullahi wa barakaatuhu..

      Alhamdulillah. I took an honor and privilege to share our Gratitude precisely of the pure and small yet memorable Journey  with pride and dignity to state a few lines about the most Ingenious Inspirer of "HOPE" i.e.(Dr. Shakeeb Ahrar) an Angel and a Savior of Mankind.
      
      **Doctor's proper meaning with an awesome example is Dr. Shakeeb Ahrar. An appropriate Map and a Message to many upcoming individuals like me and every other who really want to strive in life to achieve something really worthy to be satisfied enough in life.
      
      As well all know that Doctor's fill an important role in Society in a big way and can make a huge difference in many lives, nothing is nobler than saving a life or making someone's life liveable with positivity.
      
      Most of us know what Qur'an states... that whoever saves the life of one person, it shall be as if he/she saved the life of Mankind.. Alhamdulillah.
      
      Therefore, We're very blessed specially my Father who's diagnosed and getting healed with MG+ve(Mysthenia Gravis) to have such incredible personality Dr. Shakeeb Ahrar and his supportive Team Alhamdulillah.
      
      Hence, We can't thank enough to Shakeeb Sir in words but yes all of us shall pray for his future betterments and success in life. Jazaak Allah hu khairan Sir.. Stay blessed, happy and healthy.`,
      link: "https://g.co/kgs/NxJWCmN",
    },
    {
      name: "Navya Sweetie",
      avatarUrl: navya,
      rating: 5,
      reviewText: `Hello everyone
      Very well-run office. Extremely organized. All the staff I've dealt with over the course of several visits has been very professional and personable. Dr. Shakeeb is very knowledgeable and a careful listener. In addition to taking a very thorough history, he also took all the time needed to answer my numerous questions. I feel like I'm in good hands.
      Thank you`,
      link: "https://maps.app.goo.gl/hebtxrgajFMFuXmGA",
    },
    {
      name: "Neha Afreen",
      avatarUrl: neha,
      rating: 5,
      reviewText: `Humble, ethical and non-commercial doctor. A very understanding one and listens to your health concerns. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. Dr. Shakeeb Ahrar doesn’t confuse his patients, He keeps it simple. Highly recommended to anyone who is looking for a specialist.`,
      link: "https://maps.app.goo.gl/bYd6SXvLRLJ412o2A",
    },
    {
      name: "M Tanveer Ali Khan",
      avatarUrl: tanveer,
      rating: 5,
      reviewText: `Dr Shakeeb is a very skilled and knowledgeable doctor. He gets the right investigations done and is honest and humble with his patients. He answers all the questions and gives clarity on patient's condition. He has a very good approach to treatment and I would definitely recommend him.`,
      link: "https://maps.app.goo.gl/6Wq7UfcvSoYjgqrKA",
    },
    {
      name: "Mohammed Arifuzaman",
      avatarUrl: arif,
      rating: 5,
      reviewText: `He is one of the most talented and versatile  Neurophysicians in town. I had referred one of my friends who was in status epilepticus during the COVID pandemic lockdown who was managed exceptionally well by him. The patient is doing very well with no neurological deficits. Kudos to Dr. Shakeeb's knowledge and judgement.`,
      link: "https://maps.app.goo.gl/W9BqyJtbaRYoqmVQA",
    },
    {
      name: "Mohammed Omer",
      avatarUrl: omer,
      rating: 5,
      reviewText: `He is an honest and a skilled neurologist, and is very passionate about his profession. Prioritizes patient's well-being over everything else. Highly recommend to consult him should one need neurological advice.`,
      link: "https://maps.app.goo.gl/NKqM6PNqq12HjVaw8",
    },
  ];

  return (
    <Container variant="main" py={"2vh"} p={0}>
      <Flex
        backdropFilter="blur(5px)"
        justifyContent={"center"}
        h={{ base: "auto", md: "100%" }}
      >
        <Flex bg="blue.50" my="1%" w={{ md: "100%", base: "100%" }} p={"1%"}>
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
                  minW={300}
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
                  <Text mt={4}>
                    {review.reviewText.length > maxLength
                      ? `${review.reviewText.slice(0, maxLength)}...`
                      : review.reviewText}{" "}
                    {review.reviewText.length > maxLength && (
                      <Link
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={"blue"}
                        isExternal
                      >
                        read more
                      </Link>
                    )}
                  </Text>
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
                  onClick={() => handleClick('/reviews')}
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
