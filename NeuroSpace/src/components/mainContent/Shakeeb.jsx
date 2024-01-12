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
Spacer,
} from "@chakra-ui/react";
import { useRef } from "react";
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
  
  const orthoInfo = {
    name: "Dr. James Anderson",
    experience: "10+ years",
    qualifications: "MBBS, MS Orthopedics",
    areasOfExpertise: [
      "Arthroscopy",
      "Spine Surgery",
    ],
    languages: ["English"],
  };

  return (
    <Container variant={"main"} py={"2vh"}>
      <Flex
        w={"75%"}
        mx="12.5%"
        flexDirection="column"
        align="center"
        bg="blue.50"
      >
        <Flex>
          <Box bg="blue.50" m={"2%"}>
            <Image src={shakeebImage} w={400} />
            <Table>
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
              MBBS: 2005 - 2010, SHADAN INSTITUTE OF MEDICAL SCIENCES,
              Hyderabad, Telangana Internship: 2010-2011, SHADAN INSTITUTE OF
              MEDICAL SCIENCES, Hyderabad, Telangana DNB General Medicine:
              October 2012 – December 2015, K.J.SOMAIYA MEDICAL COLLEGE &
              RESEARCH CENTRE, Mumbai DNB Neurology: April 2017 - September
              2020, CARE HOSPITALS, Nampally, Hyderabad
            </Text>
            <Heading size={"md"}>Professional Experience</Heading>
            <Text mb={2} textAlign="justify">
              Consultant Neurologist: Renova Hospitals, Langar Houz, October
              2020 - December 2021 Consultant General Physician: Challa
              Hospitals, Hyderabad, April 2016 - March 2017 Presently Working:
              Full Time Consultant Neurologist, American Brain and Spine
              Hospitals, Attapur
            </Text>
            <Heading size={"md"}>Special Interests & Achievements</Heading>
            <Text mb={2} textAlign="justify">
              During Dr. Priyanka Sangani's training period in neurology, she
              developed a special interest in movement disorders, including
              Parkinson's disease, dystonias, and NBIA. These challenging
              disorders have become a focal point of her practice. She has
              presented case reports at state and national level conferences and
              completed a thesis on the clinical spectrum of dementia at a
              tertiary care center. After finishing her superspecialization in
              neurology, Dr. Priyanka Sangani worked as a Consultant
              Neurophysician at Renova Hospitals and began teaching clinical
              classes in neurology for postgraduate (General Medicine) students
              at Princess Durrushevar Hospital. Since April 2021, Dr. Priyanka
              Sangani has been working part-time at American Brain and Spine
              Hospitals, where she has learned the uses of rTMS in stroke and
              its benefits in various neurological and psychiatric illnesses.
              Her passion for neurology has only grown, with a special interest
              in rTMS and other non-invasive treatment modalities for diseases
              with limited medical management options.
            </Text>
            <Heading size={"md"}> Current Position</Heading>
            <Text textAlign="justify">
              Dr. Priyanka Sangani is presently working as a full-time
              Consultant Neurologist at American Brain and Spine Hospitals,
              where she continues to explore innovative treatments and provide
              top-tier care for her patients. Schedule your consultation today,
              call us at 7981370703 or book online.
            </Text>
          </Box>
        </Flex>



        <Heading>
          Additional Doctors
        </Heading>
        <Flex flexDirection={'row'} w="100%" m={'1%'}>
          <Flex w="50%">
            <Box bg="blue.50" m={"2%"}>
              <Image src={doctorImage1} w={300} maxH={300}/>
              <Table w={300}>
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
            <Box my={"2%"} bg="blue.100" w="50%" mr={"1%"} px={1} w={"100%"}>
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
          <Flex w="50%">
            <Box bg="blue.50" m={"2%"}>
              <Image src={doctorImage2} w={300}  maxH={300}/>
              <Table w={300}>
                <Tbody>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"} bg="blue.100">
                      Experience
                    </Td>
                    <Td>{orthoInfo.experience}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Qualifications</Td>
                    <Td>{orthoInfo.qualifications}</Td>
                  </Tr>
                  <Tr bg="blue.100">
                    <Td fontWeight={"bold"}>Areas of Expertise</Td>
                    <Td>{orthoInfo.areasOfExpertise.join(", ")}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"bold"}>Languages</Td>
                    <Td>{orthoInfo.languages.join(", ")}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box my={"2%"} bg="blue.100" w="50%" mr={"1%"} px={1} >
            <Heading>Dr. Ortho</Heading>
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
        </Flex>
      </Flex>
    </Container>
  );
};

export default Shakeeb;
