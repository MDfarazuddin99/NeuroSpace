import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    teal: {
        50: "#E6FFFA",
        100:"#B2F5EA",
        200:"#81E6D9",
        300:"#4FD1C5",
        400:"#38B2AC",
        500:"#319795",
        600:"#2C7A7B",
        700:"#285E61",
        800:"#234E52",
        900:"#1D4044",
    },
    blue: {
      50: "#EBF8FF",
      900: "#1A365D",
    },
  },

  components: {
    Button: {
      baseStyle: {
        flex: "1",
        mr: "6",
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
