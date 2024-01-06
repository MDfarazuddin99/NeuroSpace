import { Box, Flex, Spacer, Text, Button} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Header(){
    return (
      <Box bg="teal.500" color="white">
        <Flex align="center" p={1}>
          <Text fontSize='2xl' fontWeight={'bold'} ml={"10%"}>
            TIMINGS: MON-SAT: 8AM – 12PM  |   5PM – 9PM
          </Text>
          <Spacer/>
          <Button bg={'orange'} rightIcon={<ArrowForwardIcon />} flex={"None"} mr={"10%"} >
            Book Appointment
          </Button>
        </Flex>
      </Box>
    )
}

export default Header