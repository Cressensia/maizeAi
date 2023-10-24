import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/LoginRegister/Login";
import Main from "./components/Main/Main";
import Register from "./components/LoginRegister/Register";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}
