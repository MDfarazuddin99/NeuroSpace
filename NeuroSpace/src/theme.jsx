import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway";
import bgimage from "./assets/bg_image.jpg";

const theme = extendTheme({
  fonts: {
    Header: `'san-seif', sans-serif`,
  },

  colors: {
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#EBF8FF",
      900: "#1A365D",
    },
  },

  components: {
    GridItem: {
      variants: {
        servicecard: {
          bg: "blue.50",
          w: "10%",
        },
      },
    },
    Container: {
      variants: {
        main: {
          backgroundImage: `url(${bgimage})`,
          minH: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minW: "full",
         
        },
      },
    },
    Button: {
      baseStyle: {
        flex: "1",
        mr: "6",
        fontWeight: "bold",
      },
      variants: {
        navbarbutton: {
          bg: "blue.50",
          _hover: { bg: "teal.500", color: "orange" },
          h: "100",
          rounded: "0",
          w: "full",
          py: { base: 1, md: 0 },
          fontSize: 18,
        },
      },
    },
  },
});

export default theme;
