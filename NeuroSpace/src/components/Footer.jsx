import { Flex, Link, IconButton, Image, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";

function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify={"center"}
      bg="teal.500"
      color="white"
      p={"1%"}
      bottom="0"
      width="100%"
      direction={{ base: "column", md: "row" }}
    >
      <iframe
        display={{ base: "none", md: "initial" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.540956136136!2d78.42587023542872!3d17.396153941362982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976492c87e31%3A0x2468e03e03b2c00e!2sNeurospace%20Excellence%20In%20Brain%20Spine%20%26%20Pain%20Care!5e0!3m2!1sen!2sin!4v1705258860149!5m2!1sen!2sin"
        width="300"
        height="200"
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <Spacer />
      <Image
        src={FooterLogo}
        h={{ base: 70, md: 75 }}
        m={{ base: 5, md: 0 }}
      />
    </Flex>
  );
}

export default Footer;
