import {
  Image,
  Text,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import {useState, useEffect} from "react";

import shakeebImage from "../../assets/shakeeb.jpeg";

const Shakeeb = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a delay to trigger the animation after the component is mounted
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Container variant={"main"}>
      <Flex
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(-50px)'}
      transition="opacity 0.3s, transform 0.3s"      
      >
        <Card
          w={{ md: "auto", base: "100%" }}
          direction={{ base: "column", sm: "row" }}
          my={"5%"}
          mx={"10%"}
          bg="blue.50"
          boxShadow="xl"
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            display={{ base: "flex", md: "none" }}
          >
            <Text
              fontSize={"lg"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Meet Our Doctor
            </Text>
          </Flex>
          <Image
            bg="teal.300"
            borderRadius={{
              md: "30% 70% 70% 30% / 30% 30% 70% 70%",
              base: "0",
            }}
            h={400}
            src={shakeebImage}
            p={"1%"}
            _hover={{ transform: "scale(1.1)" }} // Add scaling transformation on hover
            transition="transform 0.5s ease-in-out" // Add a smooth transition effect
          />
          <Stack>
            <CardBody>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                display={{ base: "none", md: "flex" }}
              >
                <Text
                  fontSize={"lg"}
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                >
                  Meet Our Doctor
                </Text>
              </Flex>

              <Heading fontSize={"4xl"} fontWeight={"bold"}>
                Dr. Shakeeb Ahrar
              </Heading>
              <Text fontSize={"xl"}>
                MBBS, MD DM Neurology (NIMS) (Gold Medalist)
              </Text>
              <Text fontSize={"18px"} color={"black"}>
                Dr. Shakeeb Ahrar is a practicing consultant neurophysician in
                hyderabad with a good clinical experience of 10 years in the
                field of medicine. After being trained in the field of Internal
                Medicine for 3 years, he was among the top few students in the
                post graduate examinations and had worked as a senior resident
                in Gandhi medical college . He has received his Doctorate of
                medicine (DM) in Neurology from the prestigious Nizam's
                Institute of Medical Sciences (NIMS), Hyderabad. He exhibits,
                professionalism in his work , is compassionate and strives to
                provide the best possible care towards his patients.
              </Text>
              <UnorderedList
                fontSize={"16px"}
                fontWeight={"bold"}
                fontFamily={"sans-serif"}
                mt={"1%"}
              >
                <ListItem>
                  {"8 years plus Clinical Experience".toUpperCase()}
                </ListItem>
                <ListItem>
                  {"Doctorate of Medicine (DM) Neurology".toLocaleUpperCase()}
                </ListItem>
                <ListItem>{"MD Internal Medicine".toUpperCase()}</ListItem>
                <ListItem>
                  {"Member in the International Parkinson and Movement Disorder Society (IPMDS)".toUpperCase()}
                </ListItem>
              </UnorderedList>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </Container>
  );
};

export default Shakeeb;
