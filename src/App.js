import "./App.css";
import { Navprepender } from "./Components/SubComponents/Navprepender";
import { Navbar } from "./Components/SubComponents/Navbar";
import { Footer } from "./Components/SubComponents/Footer";
import { Homepage } from "./Components/Homepage";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Team } from "./Components/Team";
import { Testimonials } from "./Components/Testimonials";
import { VehicleModels } from "./Components/VehicleModels";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

function App() {
  return (
    <Router>
      <Navprepender />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="vehiclemodels" element={<VehicleModels />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
