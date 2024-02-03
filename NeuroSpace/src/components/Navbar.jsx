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
import { NavLink, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Services from "./mainContent/Services";
import Gallery from "./mainContent/Gallery";

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
            <NavLink to="/gallery">Gallery</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/services">Services</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/shakeeb">Dr. Shakeeb Ahrar</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/team">Team</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/blog">Reviews</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex w="full" display={{ base: "none", md: "flex" }}>
        <Button variant={"navbarbutton"} onClick={() => handleClick("/")}>
          Home
        </Button>

        <Button
          variant={"navbarbutton"}
          onClick={() => handleClick("/gallery")}
        >
          Gallery
        </Button>

        <Button
          variant={"navbarbutton"}
          onClick={() => handleClick("/services")}
        >
          Services
        </Button>

        <Button
          variant={"navbarbutton"}
          onClick={() => handleClick("/shakeeb")}
        >
          Dr. Shakeeb Ahrar
        </Button>
        <Button variant={"navbarbutton"} onClick={() => handleClick("/team")}>
          Team
        </Button>
        <Button
          variant={"navbarbutton"}
          onClick={() => handleClick("/contact-us")}
        >
          Contact Us
        </Button>

        <Button variant={"navbarbutton"} onClick={() => handleClick("/blog")}>
          Reviews
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
