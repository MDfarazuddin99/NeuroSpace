import { Flex, Button, Image, IconButton, Spacer, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import HeaderLogo from "../assets/HeaderLogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      bg="blue.50"
      align="center"
      justify="space-between"
      direction="row"
    >
      <Image src={HeaderLogo} ml={{base: '25%', md:0}} h={{ base: 50, md: 100 }} bg="blue.50" />
      <Spacer/>
      <Menu bg={'teal.300'}>
        <MenuButton
          fontSize={30}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          bg={'teal.500'}
          h={100}
          rounded={0}
          mr={0}
          _hover={{bg:'blue.50', color:"teal.900"}}
        />
        <MenuList >
          <MenuItem>
            <NavLink to="/">Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/services">SERVICES</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/shakeeb">DR. SHAKEEB AHRAR</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/book-appointment">BOOK APPOINTMENT</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/contact-us">CONTACT US</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/blog">BLOG</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex w="full" display={{ base: 'none', md: 'flex'}}>
        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
        >
          <NavLink to="/">Home</NavLink>
        </Button>

        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
        >
          <NavLink to="/services">SERVICES</NavLink>
        </Button>

        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
        >
          <NavLink to="/shakeeb">DR. SHAKEEB AHRAR</NavLink>
        </Button>

        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
        >
          <NavLink to="/book-appointment">BOOK APPOINTMENT</NavLink>
        </Button>

        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
        >
          <NavLink to="/contact-us">CONTACT US</NavLink>
        </Button>

        <Button
          bg="blue.50"
          _hover={{ bg: "teal.500", color: "orange" }}
          h={100}
          rounded={0}
          w="full"
          py={{ base: 1, md: 0 }}
          mr={0}
        >
          <NavLink to="/blog">BLOG</NavLink>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
