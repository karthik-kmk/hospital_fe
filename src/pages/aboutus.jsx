import React from "react";

import Navbar from "../components/navbarapt";
import Img1 from "../assets/abtus-main.jpeg";
import "./aboutus.css";

const MyComponent = () => {
  return (
    <div className="abt-us">
      <Navbar />

      <img src={Img1} alt="" className="image-abtus" />
    </div>
  );
};

export default MyComponent;
