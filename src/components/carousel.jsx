import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/yes123456789.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/12345.jpeg";
import "./carousal.css";


const carousal = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item>
          <img
           
            className="d-block w-100 radius"
            src={img1}
            alt="first slide"
          />

         
        </Carousel.Item>

        <Carousel.Item>
          <img
           
            
            className="d-block w-100 radius"
            src={img2}
            alt="first slide"
          />

       
        </Carousel.Item>

        <Carousel.Item>
          <img
           
            className="d-block w-100 radius"
            src={img3}
            alt="first slide"
          />

        
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default carousal;
