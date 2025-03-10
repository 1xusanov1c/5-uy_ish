import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}

export default App;