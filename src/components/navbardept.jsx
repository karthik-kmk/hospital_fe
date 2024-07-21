import React from "react";
import { Link } from "react-router-dom";
import "./navbardept.css";
import logo from "../assets/healior_logo.jpeg";

const MyComponent = () => {
  return (
    <div>
        <img src={logo} alt="" className="logo-dept-nav"/>
      <nav className="nav-dept" >
        <ul className="nav-dept-ul">
          <a href="#ortho" style={{ textDecoration: "none" }}>
            <li className="text-decor">Orthopedics</li>
          </a>
          <a href="#neuro" style={{ textDecoration: "none" }}>
            <li className="text-decor">Neuro Sciences</li>
          </a>
          <a href="#cardio" style={{ textDecoration: "none" }}> 
            <li className="text-decor">Cardiac Sciences</li>
          </a>

          <a href="#gyne" style={{ textDecoration: "none" }}>
            <li className="text-decor">Gynecology</li>
          </a>
          <a href="#pedia" style={{ textDecoration: "none" }}>
            <li className="text-decor">Pediatrics</li>
          </a>
          <a href="#pulma" style={{ textDecoration: "none" }}>
            <li className="text-decor">Pulmonology</li>
          </a>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <li className="text-decor">Home</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MyComponent;
