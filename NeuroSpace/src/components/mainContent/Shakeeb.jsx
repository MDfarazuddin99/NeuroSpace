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
} from "@chakra-ui/react";
import shakeebImage from "../../assets/shakeeb.jpeg";
import doctorImage1 from "../../assets/doctor1.jpeg";
import doctorImage2 from "../../assets/doctor2.jpeg";


const Shakeeb = () => {
  const shakeebInfo = {
    experience: "7+ years",
    qualifications: "MBBS, DNB GENERAL MEDICINE, DNB NEUROLOGY",
    areasOfExpertise: [
      "Headache",
      "Back pain",
      "Neck pain",
      "Stroke",
      "Seizures",
    ],
    languages: ["English", "Hindi", "Telugu"],
  };

  const physioInfo = {
    name: "Dr. Emma Smith",
    experience: "8+ years",
    qualifications: "BPT, MPT in Orthopedics",
    areasOfExpertise: [
      "Sports Injuries",
    ],
    languages: ["English"],
  };
  // backdropFilter="blur(10px)"
  return (
    <Container variant={"main"} py={"2vh"} p={0}>
      <Flex backdropFilter="blur(5px)">
      <Flex
      my={'1%'}
        w={{md: "75%", base: "90%"}}
        mx={{md: "12.5%", base: "5%"}}
        flexDirection="column"
        align="center"
        bg="blue.50"
        
      >
        <Flex flexDirection={{base: 'column', md: 'row'}} w="100%" >
          <Box bg="blue.50" m={"2%"} >
            <Image src={shakeebImage} w={{base: "100%", md: 400}} />
            <Table w={{base: "100%", md: 400}}>
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
              </Tbody>
            </Table>
          </Box>
          <Box my={"2%"} bg="blue.100" w="100%" mr={"1%"} px={1}>
            <Heading>Dr. Shakeeb Ahrar</Heading>
            <Text mb={2}>Neurology Specialist in Attapur, Hyderabad</Text>
            <Heading size={"md"}> Education & Qualifications </Heading>
            <Text mb={2}>

            </Text>
            <Heading size={"md"}>Professional Experience</Heading>
            <Text mb={2} textAlign="justify">

            </Text>
            <Heading size={"md"}>Special Interests & Achievements</Heading>
            <Text mb={2} textAlign="justify">

            </Text>
            <Heading size={"md"}> Current Position</Heading>
            <Text textAlign="justify">

            </Text>
          </Box>
        </Flex>


        <Heading>
          Additional Doctors
        </Heading>
        <Flex flexDirection={{md: 'row', base:'column'}} w="100%" m={'1%'}>
          <Flex w={{md: "50%", base:"100%"}} flexDirection={{md: 'row', base:'column'}}>
            <Box bg="blue.50" m={"2%"}>
              <Image src={doctorImage1} w={{base: "100%", md: 300}} aspectRatio={'1'}/>
              <Table w={{base: "100%", md: 300}}>
                <Tbody>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"} bg="blue.100">
                      Experience
                    </Td>
                    <Td>{physioInfo.experience}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Qualifications</Td>
                    <Td>{physioInfo.qualifications}</Td>
                  </Tr>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"}>Areas of Expertise</Td>
                    <Td>{physioInfo.areasOfExpertise.join(", ")}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Languages</Td>
                    <Td>{physioInfo.languages.join(", ")}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box my={"2%"} bg="blue.100" mr={"1%"} px={1} w={"100%"}>
            <Heading>Dr. Physio</Heading>
            <Text mb={2}>Neurology Specialist in Attapur, Hyderabad</Text>
            <Heading size={"md"}> Education & Qualifications </Heading>
            <Text mb={2}>

            </Text>
            <Heading size={"md"}>Professional Experience</Heading>
            <Text mb={2} textAlign="justify">

            </Text>
            <Heading size={"md"}>Special Interests & Achievements</Heading>
            <Text mb={2} textAlign="physioInfojustify">

            </Text>
            <Heading size={"md"}> Current Position</Heading>
            <Text textAlign="justify">

            </Text>
          </Box>
          </Flex>
          <Flex w={{md: "50%", base:"100%"}} flexDirection={{md: 'row', base:'column'}}>
            <Box bg="blue.50" m={"2%"}>
              <Image src={doctorImage2} w={{base: "100%", md: 300}} aspectRatio={'1'}/>
              <Table w={{base: "100%", md: 300}}>
                <Tbody>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"} bg="blue.100">
                      Experience
                    </Td>
                    <Td>{physioInfo.experience}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Qualifications</Td>
                    <Td>{physioInfo.qualifications}</Td>
                  </Tr>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"}>Areas of Expertise</Td>
                    <Td>{physioInfo.areasOfExpertise.join(", ")}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Languages</Td>
                    <Td>{physioInfo.languages.join(", ")}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box my={"2%"} bg="blue.100" mr={"1%"} px={1} w={"100%"}>
            <Heading>Dr. Physio</Heading>
            <Text mb={2}>Neurology Specialist in Attapur, Hyderabad</Text>
            <Heading size={"md"}> Education & Qualifications </Heading>
            <Text mb={2}>

            </Text>
            <Heading size={"md"}>Professional Experience</Heading>
            <Text mb={2} textAlign="justify">

            </Text>
            <Heading size={"md"}>Special Interests & Achievements</Heading>
            <Text mb={2} textAlign="physioInfojustify">

            </Text>
            <Heading size={"md"}> Current Position</Heading>
            <Text textAlign="justify">

            </Text>
          </Box>
          </Flex>     
        </Flex>
      </Flex>        
      </Flex>
    </Container>
  );
};

export default Shakeeb;
