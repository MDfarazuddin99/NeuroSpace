



import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home';
import Services from './components/Services';
import Shakeeb from './components/Shakeeb';
import BookAppointment from './components/BookAppointment';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/home" Component={Home}>
            {/* <Home/> */}
          </Route>

          <Route path="/services" Component={Services}>
            {/* <Services/> */}
          </Route>

          <Route path="shakeeb" Component={Shakeeb}>
            {/* <Shakeeb/> */}
          </Route>

          <Route path = "book-appointment" Component={BookAppointment}>
            {/* <BookAppointment/> */}
          </Route>

          <Route path = "contact-us" Component={ContactUs}>
            {/* <ContactUs/> */}
          </Route>

          <Route path="blog" Component={Blog}>
            {/* <Blog/> */}
          </Route>
        </Routes>
        
        <Footer/>
    </Router>

  )
}

export default App
