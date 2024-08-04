import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

import Carousel from "../components/carousel";
import "./home.css";
import Navbar from "../components/navbar";
import Special from "../components/special";
import logo1 from "../assets/left-logo.jpeg";
import logo from "../assets/healior_symbol2.jpeg";
import Modal from "../components/modal1";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Header from "../components/header";

export default function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);

  // On page open, run the id check
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    if (id === undefined || id === null || id.length !== 36) {
      navigate("/login");
    }
  }, []);

  // On page open, get the user profile details
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    axios
      .get(`http://127.0.0.1:5000/profile?id=${id}`)
      .then((response) => {
        // 200 response
        setUserName(response.data.name);
        setAge(response.data.age);
      })
      .catch((error) => {
        // Non-200 response
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      {/* <div className="width-flex">
          <div className="width">
            <div className="header-flex">
              <img src={logo} alt="" className="main-logo-home" />

              <button className="openModalBtn1">
                <LocalPhoneIcon className="right" />
                Appointment
              </button>

              <button
                className="openModalBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <AirportShuttleIcon className="right" />
                Emergency
              </button>

              {modalOpen && (
                <Modal setOpenModal={setModalOpen} className="z-index1" />
              )}
              <div className="logo1-div">
              <img src={logo1} alt="" className="logo1" />
              </div>
              
            </div>
           
          </div>
          
        </div> */}
      
      <Navbar />
      <Carousel />
      <Special/>
      
    </div>
  );
}
