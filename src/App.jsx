import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/landing";
import Home from "./pages/home";
import NoPage from "./pages/NoPage";
import Login from "./pages/login";

import Department from "./pages/departments";

import Signup from "./pages/signup";
import Aboutus from "./pages/aboutus";
import Pharmacy from "./pages/pharmacy";
import Appointment from "./pages/appointment";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/departments" element={<Department />} />
       
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
