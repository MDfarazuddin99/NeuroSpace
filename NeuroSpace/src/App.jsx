



import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/mainContent/Home';
import Services from './components/mainContent/Services';
import Shakeeb from './components/mainContent/Shakeeb';
import BookAppointment from './components/mainContent/BookAppointment';
import ContactUs from './components/mainContent/ContactUs';
import Blog from './components/mainContent/Blog';
import { Route, Routes } from "react-router-dom";


import bgimage from './assets/bg_image.jpg'

function App() {
  return (
    <div style = {{backgroundImage : {bgimage}}}>
        <Header/>
        <Navbar/>
        <Routes>
            <Route exact path="/" Component={Home}>
            </Route>

            <Route path="/services" Component={Services}>
            </Route>

            <Route path="shakeeb" Component={Shakeeb}>
            </Route>

            <Route path = "book-appointment" Component={BookAppointment}>
            </Route>

            <Route path = "contact-us" Component={ContactUs}>
            </Route>

            <Route path="blog" Component={Blog}>
            </Route>
          </Routes>         

        <Footer/>
    </div>
        
  )
}

export default App
