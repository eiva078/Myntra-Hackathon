import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ModelViewerPage from "../../components/ModelViewerPage/ModelViewerPage";
import TryOnPage from "../../components/TryOnPage/TryOnPage";
import ScrollToTop from "../../components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/try-on" element={<TryOnPage />} />
          <Route path="/model" element={<ModelViewerPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
