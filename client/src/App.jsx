import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ModelViewerPage from "./components/ModelViewerPage/ModelViewerPage";
import TryOnPage from "./components/TryOnPage/TryOnPage";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/try-on" element={<TryOnPage />} />
          <Route path="/model" element={<ModelViewerPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
