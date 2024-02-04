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

import backpain from "../../assets/neuroservices/backpain.jpeg";
import dementia from "../../assets/neuroservices/dementia.jpeg";
import demydisiease from "../../assets/neuroservices/demyelination_diseases.png";
import epilepsy from "../../assets/neuroservices/epilepsy.jpeg";
import migraine from "../../assets/neuroservices/migraines.png";
import muscledisease from "../../assets/neuroservices/muscle_disease.png";
import neckpain from "../../assets/neuroservices/neckpain.jpeg";
import parkinson from "../../assets/neuroservices/parkinsons.png";
import spinalcord from "../../assets/neuroservices/spinal_cord_disorder.png";
import headache from "../../assets/neuroservices/headache.jpeg";
import vertigo from "../../assets/neuroservices/vertigo.jpeg";
import physio from "../../assets/neuroservices/physio.jpeg";
import tremors from "../../assets/neuroservices/tremors.jpeg";
import neuropathy from "../../assets/neuroservices/neuropathy2.jpeg";
import stroke from "../../assets/neuroservices/stroke.jpeg";
import s1 from "../../assets/sample1.png";

import s7 from "../../assets/sample7.png";

import s5 from "../../assets/sample5.png";
import s8 from "../../assets/sample8.png";

import cervical from "../../assets/physioservices/cervical.jpeg";
import dumbells from "../../assets/physioservices/dumbells.jpeg";
import exballs from "../../assets/physioservices/exballs.jpeg";
import intefer from "../../assets/physioservices/interferential.jpeg";
import massage from "../../assets/physioservices/massage.webp";
import tens from "../../assets/physioservices/tens.jpg";
import ultrasound from "../../assets/physioservices/ultrasound.jpeg";
import traction from "../../assets/physioservices/traction.jpeg";
import insomnia from "../../assets/neuroservices/insomnia.jpeg";
import EMG from "../../assets/physioservices/EMG.jpeg";
import EEG from "../../assets/physioservices/EEG.jpeg";
import NCS from "../../assets/physioservices/NCS.jpeg";
import bellspalcy from "../../assets/neuroservices/belllspalcy.jpeg";

import medicine_delivery from "../../assets/medicine_delivery.png";

import pharmacy from "../../assets/pharmacy.webp";

const Services = () => {
  const neuroservices = [
    {
      name: "Backpain",
      img: backpain,
    },
    {
      name: "Bell's Palsi",
      img: bellspalcy,
    },
    {
      name: "Stroke",
      img: stroke,
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
      name: "Tremors",
      img: tremors,
    },
    {
      name: "Epilepsy",
      img: epilepsy,
    },

    {
      name: "Migraine",
      img: migraine,
    },

    {
      name: "Muscle Disorders",
      img: muscledisease,
    },

    {
      name: "Neck Pain",
      img: neckpain,
    },

    {
      name: "Neuropathy",
      img: neuropathy,
    },
    {
      name: "Insomnia",
      img: insomnia,
    },
    {
      name: "Parkinsons Disease",
      img: parkinson,
    },

    {
      name: "Spinal Cord Disorder",
      img: spinalcord,
    },

    {
      name: "Headache",
      img: headache,
    },

    {
      name: "Vertigo",
      img: vertigo,
    },
  ];

  const phyioservices = [
    {
      name: "General Physiotherapy",
      img: physio,
    },
    {
      name: "Ultrasound",
      img: ultrasound,
    },
    {
      name: "Exercise Balls",
      img: exballs,
    },
    {
      name: "TENS Machine",
      img: tens,
    },
    {
      name: "Traction",
      img: traction,
    },
    {
      name: "Massage",
      img: massage,
    },
    {
      name: "Dumbbells",
      img: dumbells,
    },
    {
      name: "Cervical Traction",
      img: cervical,
    },
    {
      name: "Interferential Therapy",
      img: intefer,
    },
  ];

  const neurophyservices = [
    {
      name: "EEG",
      img: EEG,
    },


    {
      name: "Nerve Conduction Study",
      img: NCS,
    },
  ];

  const pharmaservices = [
    {
      name: "In-house Pharmacy",
      img: pharmacy,
    },
    {
      name: "Home Delivery",
      img: medicine_delivery,
    },
  ];

  return (
    <Container variant={"main"} p={0}>
      <Flex backdropFilter="blur(5px)">
        <Box
          minH="1000px"
          w={{ md: "75%", base: "95%" }}
          mx={{ md: "12.5%", base: "2.5%" }}
          bg="blue.50"
          m={"1%"}
        >
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
              bg="blue.100"
              w="100%"              
            >
              <Heading> Treatments provided</Heading>
              <Image src={s1} />
            </Flex>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
              gap={6}
              p={"2%"}
              w="100%"
            >
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
              bg="blue.100"
              w="100%"              
            >
              <Heading> Physiotherapy Services</Heading>
              <Image src={s7} />
            </Flex>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
              gap={6}
              p={"2%"}
              w="100%"
            >
              {phyioservices.map((ns) => (
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
              bg="blue.100"
              w="100%"              
            >
              <Heading> Neurophysiology Studies</Heading>
              <Image src={s8} />
            </Flex>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
              gap={6}
              p={"2%"}
              w="100%"
            >
              {neurophyservices.map((ns) => (
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
              bg="blue.100"
              w="100%"
            >
              <Heading> Pharmacy </Heading>
              <Image src={s5} />
            </Flex>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
              gap={6}
              p={"2%"}
              w="100%"
            >
              {pharmaservices.map((ns) => (
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
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Services;
