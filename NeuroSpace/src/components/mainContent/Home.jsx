import { Container, Flex, Heading, } from "@chakra-ui/react"
import ReactFloaterJs from 'react-floaterjs';


const Home = () => {
  return (
    <Container variant={'main'} py={"2vh"} >
        <Flex minH="1000px" bg="blue.50" w="75%" mx="12.5%">
          <Heading> Our Services</Heading>
        </Flex>
    </Container>
  )
}

export default Home
