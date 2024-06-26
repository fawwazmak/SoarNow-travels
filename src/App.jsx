import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flight from "./pages/Flight";
import Visas from "./pages/Visas";
import Holiday from "./pages/Holiday";
import Education from "./pages/Education";
import NoPage from "./pages/NoPage";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Visas" element={<Visas />} />
          <Route path="Flight" element={<Flight />} />
          <Route path="Holiday" element={<Holiday />} />
          <Route path="Education-easy-pay" element={<Education />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
