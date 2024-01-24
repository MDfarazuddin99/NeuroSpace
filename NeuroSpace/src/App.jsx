import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/mainContent/Home";
import Services from "./components/mainContent/Services";
import Shakeeb from "./components/mainContent/Shakeeb";
import BookAppointment from "./components/mainContent/BookAppointment";
import ContactUs from "./components/mainContent/ContactUs";
import Blog from "./components/mainContent/Blog";
import Team from "./components/mainContent/Team";
import Gallery from "./components/mainContent/Gallery";
import Reviews from "./components/mainContent/Reviews";
import { Route, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>

        <Route exact path="reviews" Component={Reviews}></Route>

        <Route path="services" Component={Services}></Route>

        <Route path="shakeeb" Component={Shakeeb}></Route>

        <Route path="contact-us" Component={ContactUs}></Route>

        <Route path="blog" Component={Blog}></Route>

        <Route path="team" Component={Team}></Route>

        <Route path="gallery" Component={Gallery}></Route>
      </Routes>
      <a href="tel:070321 07724">
        <Box
          as="a"
          display="inline-block"
          pos="fixed"
          w="60px"
          h="60px"
          bottom="40px"
          right="40px"
          bg="#0C9"
          color="#FFF"
          borderRadius="50px"
          textAlign="center"
          boxShadow="2px 2px 3px #999"
          cursor="pointer"
        >
          <PhoneIcon
            className="fa fa-plus my-float"
            style={{ marginTop: "22px" }}
          ></PhoneIcon>
        </Box>
      </a>
      <Footer />
    </div>
  );
}

export default App;
