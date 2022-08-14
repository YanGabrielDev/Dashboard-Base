import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Reports from "../pages/Reports";
import Products from "../pages/Produts";
export const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};
