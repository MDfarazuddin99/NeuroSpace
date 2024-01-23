import {
  Flex,
  Button,
  Image,
  IconButton,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import HeaderLogo from "../assets/HeaderLogo.png";
import { NavLink , useNavigate} from "react-router-dom";

import { useEffect, useState } from "react";



function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const navigateTo = useNavigate();

  const handleClick = (newPath) => {
    // Use the history object to navigate to the new URL
    console.log("button pressed");
    navigateTo(newPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolled");
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      bg="blue.50"
      align="center"
      justify="space-between"
      direction="row"
      px={{ base: "none", md: "5%" }}
      w="100%"
      position={hasShadow ? "sticky" : "relative"}
      top="0"
      boxShadow={hasShadow ? "0px 2px 4px rgba(0, 0, 0, 0.5)" : "none"}
      opacity={hasShadow ? 0.9 : "none"}
      zIndex="999"
    >
      <Image
        src={HeaderLogo}
        ml={{ base: "25%", md: 0 }}
        h={{ base: 50, md: 100 }}
        bg="blue.50"
      />
      <Spacer />
      <Menu bg={"teal.300"}>
        <MenuButton
          fontSize={30}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          bg={"teal.500"}
          h={100}
          rounded={0}
          mr={0}
          _hover={{ bg: "blue.50", color: "teal.900" }}
        />
        <MenuList>
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
            <NavLink to="/team">TEAM</NavLink>
          </MenuItem>          
          <MenuItem>
            <NavLink to="/contact-us">CONTACT US</NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/blog">REVIEWS</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex w="full" display={{ base: "none", md: "flex" }}>
        <Button variant={"navbarbutton"} onClick={() => handleClick('/')}>
          <NavLink to="/">Home</NavLink>
        </Button>

        <Button variant={"navbarbutton"} onClick={() => handleClick('/services')}>
          <NavLink to="/services">SERVICES</NavLink>
        </Button>

        <Button variant={"navbarbutton"} onClick={() => handleClick('/shakeeb')}>
          <NavLink to="/shakeeb">DR. SHAKEEB AHRAR</NavLink>
        </Button>
        <Button variant={"navbarbutton"} onClick={() => handleClick('/team')}>
          <NavLink to="/team">TEAM</NavLink>
        </Button>
        <Button variant={"navbarbutton"} onClick={() => handleClick('/contact-us')}>
          <NavLink to="/contact-us">CONTACT US</NavLink>
        </Button>

        <Button variant={"navbarbutton"} onClick={() => handleClick('/blog')}>
          <NavLink to="/blog">REVIEWS</NavLink>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
