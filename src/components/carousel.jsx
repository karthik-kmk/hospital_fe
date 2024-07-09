import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/img1.jpeg";

const carousal = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={img1}
        alt='first slide'
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
        className="d-block w-100"
        src='holder.js/800x400?text=Firstslide&bg=373940'
        alt='first slide'
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
        className="d-block w-100"
        src='holder.js/800x400?text=Firstslide&bg=373940'
        alt='first slide'
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
    </div>
  )
}

export default carousal
