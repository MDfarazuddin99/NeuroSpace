import {
  Image,
  Text,
  Flex,
  Heading,
  Container,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Center,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

import shakeebImage from "../../assets/shakeeb.jpeg";

const Shakeeb = () => {
  const shakeebInfo = {
    experience: "10+ years",
    qualifications: "MBBS, MD GENERAL MEDICINE, DM NEUROLOGY (NIMS) 🥇 ",
    areasOfExpertise: [
      "Headache",
      "Back and Neck pain",
      "Stroke",
      "Seizures",
      "Parkinsons Disease",
      "Vertigo",
      "Peripheral Neuropathy",
      "Myasthenia Gravis",
      "Botox Therapy",
      "Electrophysiological Studies",
    ],
    languages: ["English", "Hindi", "Telugu"],
    number:"75033"
  };

  // backdropFilter="blur(10px)"
  return (
    <Container variant={"main"} py={"2vh"} p={0}>
      <Flex backdropFilter="blur(5px)">
        <Flex
          my={"1%"}
          w={{ md: "75%", base: "90%" }}
          mx={{ md: "12.5%", base: "5%" }}
          flexDirection="column"
          align="center"
          bg="blue.50"
        >
          <Flex flexDirection={{ base: "column", md: "row" }} w="100%">
            <Box bg="blue.50" m={"2%"}>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Heading display={{base:'initial', md:'none'}}>Dr. Shakeeb Ahrar</Heading>
                <Image src={shakeebImage} w={{ base: "100%", md: 400 }} />
              </Flex>
              <Table w={{ base: "100%", md: 400 }}>
                <Tbody>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"} bg="blue.100">
                      Experience
                    </Td>
                    <Td>{shakeebInfo.experience}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Qualifications</Td>
                    <Td>{shakeebInfo.qualifications}</Td>
                  </Tr>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"}>Areas of Expertise</Td>
                    <Td>{shakeebInfo.areasOfExpertise.join(", ")}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Languages</Td>
                    <Td>{shakeebInfo.languages.join(", ")}</Td>
                  </Tr>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"}>Registration No.:</Td>
                    <Td>{shakeebInfo.number}</Td>
                  </Tr>                  
                </Tbody>
              </Table>
            </Box>
            <Box my={"2%"} bg="blue.100" w="100%" mr={"1%"} px={1} fontSize={'20px'}>
              <Heading color="blue.900" >Dr. Shakeeb Ahrar</Heading>
              <Text mb={2} fontWeight={'bold'} >Neurology Specialist in Mehdipatnam, Hyderabad</Text>

              <Text mb={2} textAlign="justify">
                Dr. Shakeeb ahrar is a practicing consultant neurophysician in
                hyderabad with a good clinical experience of 10 years in the
                field of medicine. After being trained in the field of Internal
                Medicine for 3 years, he was among the top few students in the
                post graduate examinations and had worked as a senior resident
                in Gandhi medical college . He has received his Doctorate of
                medicine (DM) in Neurology from the prestigious Nizam's
                Institute of Medical Sciences (NIMS), Hyderabad.
              </Text>
              <Text mb={2} textAlign="justify">
                He exhibits, professionalism in his work , is compassionate and
                strives to provide the best possible care towards his patients.
                He exhibits clinical expertise in diagnosing and treating
                conditions like:
                <UnorderedList>
                  <ListItem>Stroke</ListItem>
                  <ListItem>Epilepsy/seizures</ListItem>
                  <ListItem>Headache/migraine</ListItem>
                  <ListItem>Parkinson's disease</ListItem>
                  <ListItem>Dementia including Alzheimer's disease</ListItem>
                  <ListItem>Vertigo</ListItem>
                  <ListItem>Peripheral neuropathy</ListItem>
                  <ListItem>Movement disorders</ListItem>
                  <ListItem>Muscular disorder</ListItem>
                  <ListItem>Myasthenia Gravis</ListItem>
                  <ListItem>
                    Neuroinflammatory diseases like Multiple sclerosis and
                    Neuromyelitis optica
                  </ListItem>
                  <ListItem>Neck pain</ListItem>
                  <ListItem>Back pain</ListItem>
                  <ListItem>Rare neurological disorders</ListItem>
                </UnorderedList>
                His other areas of interest are in electrophysiological studies
                and botox therapy.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

//

export default Shakeeb;
