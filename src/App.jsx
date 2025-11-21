import { useState } from 'react'
import './App.css'

import { Navbar, Footer } from "eportfolio-shared";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import { CodePage } from "eportfolio-code";
import { ExperiencePage } from "eportfolio-experience";
import { GraphicsPage } from "eportfolio-graphics";
import { GalleryPage } from "eportfolio-gallery";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Connect from './pages/Connect';


function AppContent() {
  const location = useLocation();

  // If you're using Home as the under-construction page
  const noFooterRoutes = [
    "/",
    "/about",
    "/connect",
    "/gallery",
  ];

  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      {/* Only show footer if NOT on home */}
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
