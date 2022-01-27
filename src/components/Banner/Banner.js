import React from 'react';
import classes from './Banner.module.css';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from '../../images/hero1.jpg';
import bannerImg2 from '../../images/hero2.jpg';
import bannerImg3 from '../../images/hero3.jpg';
const Banner = () => {
  /* Banner Section */
  return (
    <section className={classes.banner}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
