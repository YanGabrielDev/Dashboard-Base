import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
export const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
