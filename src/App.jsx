import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
}

export default App;