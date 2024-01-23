import {
  Container,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Flex,
  Heading,
  Image,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
import doctorImage1 from "../../assets/doctor1.jpeg";
import doctorImage2 from "../../assets/doctor2.jpeg";
import doctorImage3 from "../../assets/doctor3.jpeg";

import babu from "../../assets/babu.jpeg";
import triveni from "../../assets/triveni.jpeg";
import shoeb from "../../assets/shoeb.jpeg";

const Team = () => {
  const orthoInfo = {
    name: "Dr. Saadullah Khan Quadri",
    experience: "4+ years",
    qualifications: "MBBS, MS, DNB (Gandhi Medical College), MRCS (UK)",
    areasOfExpertise: [
      "Fractures, Joint Pains, Deformity Correction in Children, Bone Infections, Bone Tumours, Joint Replacement Surgery",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  const physioInfo = {
    name: "Dr. Kandula Sankalp",
    experience: "4+ years",
    qualifications: "BPT (NIMS)",
    areasOfExpertise: [
      "Spondylitis",
      "Back and Neck Pain",
      "Frozen Shoulder",
      "Stroke Rehab",
      "Parkinson's Disease",
      "Knee Pain",
      "Ankle Sprain",
      "Ortho Rehab",
      "Cervicogenic Headache",
      "Migraine",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  const psycInfo = {
    name: "Dr. Mazher Ali",
    experience: "6+ years",
    qualifications: "MBBS, MD Psychiatry",
    areasOfExpertise: [
      "General Psychiatry",
      "Depression",
      "Postpartum Depression",
      "Anxiety Disorders",
      "Mood Disorders",
      "Dementia",
      "Addictive Disorders",
      "Neurocognitive Disorders",
      "Anger Management",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  const babuInfo = {
    name: "G. Venkanna Babu",
    experience: "13+ years",
    qualifications: "PGPEC (EMRI), PGDNT (NIMS), PG (PSY)",
    areasOfExpertise: [
      "EEG",
      "NCS",
      "Repetitive Nerve Stimulation (RNS)",
      "Evoked Potential Studies",
      "Autonomic Function Test",
      "Facial NCS and Blink Reflex",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  const triveniInfo = {
    name: "Veligonda Triveni",
    experience: "5+ years",
    qualifications: "BSC (NPT), MSC (PSY)",
    areasOfExpertise: [
      "EEG",
      "NCS",
      "Repetitive Nerve Stimulation (RNS)",
      "Evoked Potential Studies",
      "Autonomic Function Test",
      "Facial NCS and Blink Reflex",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  const shoebInfo = {
    name: "Mr. Shoeb Abrar",
    experience: "4+ years",
    qualifications: "MSC Microbiology, MBA HR",
    areasOfExpertise: [
      "Strategic Planning",
      "Operational Efficiency",
      "Community Engagement",
      "Financial Management",
    ],
    languages: ["English", "Urdu", "Telugu"],
  };

  return (
    <Container variant="main" py={"2vh"} p={0}>
      <Flex backdropFilter="blur(5px)">
        <Flex
          my={"1%"}
          w={{ md: "90%", base: "90%" }}
          mx={{ md: "5%", base: "5%" }}
          flexDirection="column"
          align="center"
          bg="blue.50"
        >
          <Flex flexDirection={{ md: "row", base: "column" }} w="100%" m={"1%"}>
            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {orthoInfo.name}
                  </Heading>
                  <Image
                    src={doctorImage2}
                    w={{ base: "100%", md: "100%" }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }}>
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
              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">Dr. Saadullah Khan Quadri</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Orthopedic Surgeon, Hyderabad
                </Text>

                <Heading size={"md"}> Education & Qualifications </Heading>
                <Text mb={8}>
                  MBBS – Deccan College of Medical Sciences (2008 – 2013),
                  Internship Owaisi Group of Hospitals (2013-2014), Post
                  Graduation at Gandhi Medical College (2017-2020)
                </Text>

                <Heading size={"md"}>Professional Experience</Heading>
                <Text mb={8} textAlign="justify">
                  Senior Resident at Gandhi Hospital (2020-21), Emergency
                  Physician at Olive Hospital (2015-2017)
                </Text>

                <Heading size={"md"}>Areas of Expertise</Heading>
                <Text textAlign="justify">
                  Fractures, Joint Pains, Deformity Correction in Children, Bone
                  Infections, Bone Tumours, Joint Replacement Surgery
                </Text>
              </Box>
            </Flex>
            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {psycInfo.name}
                  </Heading>
                  <Image
                    src={doctorImage3}
                    w={{ base: "100%", md: "100%" }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }}>
                  <Tbody>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"} bg="blue.100">
                        Experience
                      </Td>
                      <Td>{psycInfo.experience}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Qualifications</Td>
                      <Td>{psycInfo.qualifications}</Td>
                    </Tr>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"}>Areas of Expertise</Td>
                      <Td>{psycInfo.areasOfExpertise.join(", ")}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Languages</Td>
                      <Td>{psycInfo.languages.join(", ")}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">{psycInfo.name}</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Psychiatrist, Hyderabad
                </Text>

                <Heading size={"md"}> Education & Qualifications </Heading>
                <Text mb={8}>
                  MBBS Kurnool Medical College, MD Deccan College of Medical
                  Sciences, Hyderabad
                </Text>

                <Heading size={"md"}>Professional Experience</Heading>
                <Text mb={8} textAlign="justify">
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Medicare Hospital, Doodh bowli
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Mount Hira Hospital, Mehdipatnam
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Femcity Womens Hospital, Shaikhpet
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Adams Polyclinic, Towlichowki
                    </ListItem>
                  </List>
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex flexDirection={{ md: "row", base: "column" }} w="100%" m={"1%"}>
            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {physioInfo.name}
                  </Heading>
                  <Image
                    src={doctorImage1}
                    w={{ base: "100%", md: 300 }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }}>
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
              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">{physioInfo.name}</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Clinical Physiotherapist, Hyderabad
                </Text>

                <Heading size={"md"}>Education</Heading>

                <Text mb={2}>
                  Bachelor of Physiotherapy, Physical Therapy/Therapist, NIMS
                </Text>

                <Heading size={"md"}>Activities and Societies</Heading>
                <Text mb={2}>
                  Worked as an assistant to Neurophysiotherapist. Participated
                  in the conference of the Indian Association of
                  Physiotherapists in Bangalore. Conducted free medical camps in
                  Hyderabad. Played in inter-medical college cricket matches.
                  Given free physiotherapy services at old age homes.
                </Text>

                <Heading size={"md"}>Skills</Heading>
                <Text mb={2}>
                  Personal Training · Inpatient Care · Neurological
                  Rehabilitation · Ergonomics · Manual Therapy · Leadership
                </Text>

                <Heading size={"md"}>Experience</Heading>
                <Text mb={2}>
                  - CERTIFIED NEURODYNAMIC SOLUTIONS - CERTIFIED DRY NEEDLING
                  PRACTITIONER (UK) - CERTIFIED ORTHOPEDIC MANUAL THERAPIST
                </Text>
              </Box>
            </Flex>

            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {shoebInfo.name}
                  </Heading>
                  <Image
                    src={shoeb}
                    w={{ base: "100%", md: 300 }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }} >
                  <Tbody>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"} bg="blue.100">
                        Experience
                      </Td>
                      <Td>{shoebInfo.experience}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Qualifications</Td>
                      <Td>{shoebInfo.qualifications}</Td>
                    </Tr>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"}>Areas of Expertise</Td>
                      <Td>{shoebInfo.areasOfExpertise.join(", ")}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Languages</Td>
                      <Td>{shoebInfo.languages.join(", ")}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">{shoebInfo.name}</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Managing Director, Neurospace
                </Text>

                <Heading size={"md"}>About</Heading>
                <Text mb={2}>
                  Meet Mr. Shoeb Abrar, the dynamic Managing Director of our
                  center, whose unwavering commitment to healthcare excellence
                  has been instrumental in shaping our center into a beacon of
                  quality medical care. Background and Expertise: With a rich
                  background in healthcare management of about 4 years, Mr.
                  Abrar brings a wealth of experience to his role. His expertise
                  lies in strategic planning, operational efficiency, and a deep
                  understanding of the ever-evolving landscape of healthcare
                  administration. Financial Stewardship: With a keen eye for
                  financial management, Mr. Abrar has steered the hospital
                  towards fiscal responsibility and sustainable growth. His
                  strategic financial planning has contributed to our center's
                  stability and ability to invest in technologies and resources.
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex flexDirection={{ md: "row", base: "column" }} w="100%" m={"1%"}>
            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {babuInfo.name}
                  </Heading>
                  <Image
                    src={babu}
                    w={{ base: "100%", md: 300 }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }}>
                  <Tbody>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"} bg="blue.100">
                        Experience
                      </Td>
                      <Td>{babuInfo.experience}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Qualifications</Td>
                      <Td>{babuInfo.qualifications}</Td>
                    </Tr>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"}>Areas of Expertise</Td>
                      <Td>{babuInfo.areasOfExpertise.join(", ")}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Languages</Td>
                      <Td>{babuInfo.languages.join(", ")}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">{babuInfo.name}</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Clinical Neurotechnologist, Hyderabad
                </Text>

                {/* <Heading size={"md"}> Education & Qualifications </Heading>
                <Text mb={8}>
                  MBBS Kurnool Medical College, MD Deccan College of Medical
                  Sciences, Hyderabad
                </Text>

                <Heading size={"md"}>Professional Experience</Heading>
                <Text mb={8} textAlign="justify">
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Medicare Hospital, Doodh bowli
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Mount Hira Hospital, Mehdipatnam
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Femcity Womens Hospital, Shaikhpet
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Adams Polyclinic, Towlichowki
                    </ListItem>
                  </List>
                </Text> */}
              </Box>
            </Flex>

            <Flex
              w={{ md: "50%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box bg="blue.50" m={"2%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Heading display={{ base: "initial", md: "none" }}>
                    {triveniInfo.name}
                  </Heading>
                  <Image
                    src={triveni}
                    w={{ base: "100%", md: 310 }}
                    aspectRatio={"1"}
                  />
                </Flex>
                <Table w={{ base: "100%", md: 300 }}>
                  <Tbody>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"} bg="blue.100">
                        Experience
                      </Td>
                      <Td>{triveniInfo.experience}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Qualifications</Td>
                      <Td>{triveniInfo.qualifications}</Td>
                    </Tr>
                    <Tr bg="blue.100">
                      <Td fontWeight={"bold"}>Areas of Expertise</Td>
                      <Td>{triveniInfo.areasOfExpertise.join(", ")}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight={"bold"}>Languages</Td>
                      <Td>{triveniInfo.languages.join(", ")}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box
                my={"2%"}
                bg="blue.100"
                mr={"1%"}
                px={1}
                w={"100%"}
                fontSize={"20px"}
              >
                <Heading color="blue.900">{triveniInfo.name}</Heading>
                <Text mb={8} fontWeight={"bold"}>
                  Clinical Neurotechnologist, Hyderabad
                </Text>

                {/* <Heading size={"md"}> Education & Qualifications </Heading>
                <Text mb={8}>
                  MBBS Kurnool Medical College, MD Deccan College of Medical
                  Sciences, Hyderabad
                </Text>

                <Heading size={"md"}>Professional Experience</Heading>
                <Text mb={8} textAlign="justify">
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Medicare Hospital, Doodh bowli
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Mount Hira Hospital, Mehdipatnam
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Femcity Womens Hospital, Shaikhpet
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Worked as consultant at Adams Polyclinic, Towlichowki
                    </ListItem>
                  </List>
                </Text> */}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Team;
