import {Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon} from '@chakra-ui/icons';


function Navbar(){
    return (
        <Box bg="teal.300" p={1}>
        <Flex align="center" justify="space-between">
          {/* Home to Blog Links */}
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            Home
          </Button>
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            About Us
          </Button>
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            Departments
          </Button>
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            Patient Care
          </Button>
  
          {/* More (Dropdown) */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
              More
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              {/* Add more dropdown options as needed */}
            </MenuList>
          </Menu>
  
          {/* Blog and Reach Us Links */}
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            Blog
          </Button>
          <Button flex={1} colorScheme="teal.300" mr={6} _hover={{ bg: 'teal.100', color: 'teal.500' }} fontSize="lg">
            Reach Us
          </Button>
  
          <Spacer />
        </Flex>
      </Box>
    )
}

export default Navbar;

