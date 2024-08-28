import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/topnav/topnav";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./components/routes/route";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrolltotop/scroll_to_top";
import ScrollToTopnext from "./components/scrolltotop/scroll_to_topwhen";
import Mascot from "./components/scrolltotop/mascout";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTopnext/>
      <TopNavbar/>
      <Navbar/>
      <AppRoutes/>
      {/* <ScrollToTop/> */}
      <Mascot/> 
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
