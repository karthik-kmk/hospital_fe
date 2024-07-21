import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Landing from "./pages/landing";
import Home from "./pages/home";
import NoPage from "./pages/NoPage";
import Login from "./pages/login";
import Department from "./pages/departments"


import Signup from "./pages/signup"
import Ortho from "./components/ortho";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        
        
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
