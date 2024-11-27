import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ContactPage from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';
import GalleryPage from "./components/GalleryPage";

import "./index.css";

export default function App() {
  const [language, setLanguage] = useState("sr"); 

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} /> 
      <Routes>   
      <Route path="/" element={<Home language={language} />}/>  
      <Route path="/contact" element={<ContactPage language={language} />}/> 
      <Route path="/gallery" element={<GalleryPage language={language} />} />
      </Routes>   
      <Footer language={language}/> 
    </Router>
  );
};
