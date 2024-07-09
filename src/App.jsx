import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Landing from "./pages/landing";
import Home from "./pages/home";
import NoPage from "./pages/NoPage";
import Login from "./pages/login"

import Signup from "./pages/signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
