import { Container, Flex, Heading,Stack, Text } from "@chakra-ui/react"
import ReactFloaterJs from 'react-floaterjs';

import clinicimage from '../../assets/clinic_animation.png'
import bgimage from '../../assets/bg_image.jpg';

const Home = () => {
  return (
    <Container variant={'main'}>
      <Flex bg="red" w="100%" >
        <Container align={'center'} justifyContent={'left'} w="50%">
          <Stack>
          <Heading color={'orange'} fontSize={'xl'}>
            NeuroSpace
          </Heading>
          <Heading fontSize={'2xl'}>
            Excellence in Brain Spine and Pain Care
          </Heading>
          <Text>
          At Suguna Clinic, we are open 365 days so we can provide the best care you need. We are not your typical doctor’s office – from routine care to treatment of chronic conditions, our doctors are committed to you and your health. We serve all our local communities of Bandlaguda Jagir, Langar House, Rajendra Nagar, Sun City, Hydeshakote and the near by areas.
          </Text>
          </Stack>
        </Container>
      </Flex>

    </Container>
  )
}

export default Home
