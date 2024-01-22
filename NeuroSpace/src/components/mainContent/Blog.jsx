import { Container, Flex } from "@chakra-ui/react";

import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Container variant="main">
      <Flex backdropFilter="blur(5px)" justifyContent={"center"}>
        <Flex bg="blue.50" my="2%" h="100vh" w="70%" m={0}>
          {/* <Helmet defer={false}>
            <script
              defer
              type="text/javascript"
              src="https://static.elfsight.com/platform/platform.js"
            ></script>
          </Helmet>
          <div className="elfsight-app-2c429c63-3fbd-4c09-9ed3-fbb24fd7f9b4" data-elfsight-app-lazy></div> */}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Blog;
