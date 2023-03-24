import {Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Vision from "./Pages/Vision";
import Letter from "./Pages/Letter";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div dir='rtl' className="">
      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/vision" element={<Vision />} />
        <Route exact path="letter" element={<Letter />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
