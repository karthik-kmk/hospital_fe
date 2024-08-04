import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/yes123456789.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/slide-show3.1.jpeg";
import "./carousal.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const carousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 radius" src={img1} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 radius" src={img2} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 radius1" src={img3} alt="first slide" />
          <Link to="/aboutus">
          
          <button className="click-3image">
            <p className="p-knowmore">Know More</p> 
            <ArrowForwardIcon className="knowmore-logo" />
          </button>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default carousal;
