import React from "react";
import Navbar from "../components/navbarapt";
import Cards from "../components/cards";
import logo from "../assets/appointment_headerbg.webp";
import "./appointment.css";

const Appointment = () => {
  return (
    <div>
      <Navbar />
      <img src={logo} alt="" style={{height:"180px"}} />
      <p className="apt-p">Doctors at Healior</p>
      <Cards />
    </div>
  );
};

export default Appointment;
