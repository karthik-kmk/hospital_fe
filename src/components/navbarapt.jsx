import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import "./navbar.css";
import Modal from "./modal1";
import Modal1 from "./modal2";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HealingIcon from "@mui/icons-material/Healing";
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="header-navbar">
        <Header />
      </div>

      <div className="nav-p">
        <p className="nav-p1">Healior</p>
        <p className="nav-p2">healing lives,everyday.....</p>
      </div>

      <nav className="navbar-fixed">
        <div className="whitebox"></div>

        <Link to="/appointment" style={{ textDecoration: "none" }}>
          <li className="nav-width">
            <div className="openModalBtn1 ">
              <AutoStoriesIcon className="top-nav" />
            </div>
            <div>
              <p className="first-p">Book</p>
              <p className="second-p">Appointment</p>
            </div>
          </li>
        </Link>

        <div className="whitebox"></div>
        <li className="nav-width">
          <div className="openModalBtn1 ">
            <LocalPhoneIcon className="top-nav" />
          </div>
          <div>
            <Modal1 />
          </div>
        </li>
        <div className="whitebox"></div>
        <li className="nav-width">
          <div>
            <AirportShuttleIcon className="top-nav" />
          </div>
          <div>
            <Modal />
          </div>
        </li>
        <div className="whitebox"></div>

        <Link to="/home" style={{textDecoration:"none"}}> 
    
        <li className="nav-width">
          <div className="openModalBtn1">
            <HomeIcon className="top-nav" />
          </div>
          <div>
            
              <p className="first-p">Go</p>
              <p className="second-p">Home</p>
           
          </div>
        </li>
        </Link>
        <div className="whitebox"></div>
      </nav>
    </div>
  );
};

export default Navbar;
