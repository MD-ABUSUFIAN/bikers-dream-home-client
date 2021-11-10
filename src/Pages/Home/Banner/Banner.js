import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5f033d752a0ab62890f9acbe/holiday-1920x748-mcy-combo.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>YAMAHA</h3>
      <p>THE TOP RANKING AND TOP PARFORMNCE RAIDING.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5f033d752a0ab62890f9acbe/01-sliders-60th-family-1920x748.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5f033d752a0ab62890f9acbe/02-sliders-r6-gytr-1920x748.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;