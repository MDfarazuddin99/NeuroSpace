import {
  Container,
  Flex,
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  Image,
  Grid,
} from "@chakra-ui/react";

import backpain from "../../assets/neuroservices/back_pain.png";
import dementia from "../../assets/neuroservices/dementia.png";
import demydisiease from "../../assets/neuroservices/demyelination_diseases.png";
import epilepsy from "../../assets/neuroservices/epilepsy_seizures.png";
import migraine from "../../assets/neuroservices/migraines.png";
import muscledisease from "../../assets/neuroservices/muscle_disease.png";
import neckpain from "../../assets/neuroservices/neck_pain.png";
import nueropathy from "../../assets/neuroservices/neuropathy.png";
import parkinson from "../../assets/neuroservices/parkinsons.png";
import spinalcord from "../../assets/neuroservices/spinal_cord_disorder.png";
import stroke from "../../assets/neuroservices/stroke.png";
import vertigo from "../../assets/neuroservices/vertigo.png";

import s1 from "../../assets/sample1.png"

import s5 from "../../assets/sample5.png"


const Services = () => {
  const neuroservices = [
    {
      name: "Backpain",
      img: backpain,
    },
    {
      name: "Dementia",
      img: dementia,
    },
    {
      name: "Demyelinating Disease",
      img: demydisiease,
    },
    {
      name: "Eplepsy",
      img: epilepsy,
    },

    {
      name: "Migraine",
      img: migraine,
    },

    {
      name: "Muscle Disease",
      img: muscledisease,
    },

    {
      name: "Neck Pain",
      img: neckpain,
    },

    {
      name: "Neuropathy",
      img: nueropathy,
    },

    {
      name: "Parkinson",
      img: parkinson,
    },

    {
      name: "Spinal Cord Disorder",
      img: spinalcord,
    },

    {
      name: "Stroke",
      img: stroke,
    },

    {
      name: "Vertigo",
      img: vertigo,
    },
  ];
  
  return (
    <Container variant={"main"} p={0}>
      <Flex backdropFilter="blur(5px)">
      <Box minH="1000px" w={{md: "75%", base: "95%"}} mx={{md: "12.5%", base: "2.5%"}} bg="blue.50" m={"1%"}>
        <Flex
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            flexDirection={"row"}
            h={100}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading> Treatments provided</Heading>
            <Image src={s1}/>
          </Flex>
          <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(5, 1fr)"}} gap={6} p={"2%"} w="100%">
            {neuroservices.map((ns) => (
              <Card
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                }}
                bg="blue.100"
                key={ns.id}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}                
              >
                <CardHeader>
                  <Image src={ns.img} h={200} borderRadius={"5%"} />
                </CardHeader>
                <CardBody
                  w="100%"
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}                  
                  bg="blue.200"
                >
                  <Heading fontSize={"md"}>{ns.name}</Heading>{" "}
                </CardBody>
              </Card>
            ))}
          </Grid>
          <Flex
            flexDirection={"row"}
            h={100}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading> Pharma Services</Heading>
            <Image src={s5}/>
          </Flex>          
        </Flex>
      </Box>        
      </Flex>
    </Container>
  );
};

export default Services;
