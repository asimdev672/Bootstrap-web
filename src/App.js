import { Routes, Route, Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "./App.css";
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   <>
   <Navbar/>
<Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
