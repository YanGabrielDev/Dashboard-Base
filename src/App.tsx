import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Router } from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
