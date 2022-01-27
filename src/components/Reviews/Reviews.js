import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './Reviews.module.css';
//Reviewer Images
import elon from '../../images/elon.jpg';
import jeff from '../../images/jeff.jpg';
import mark from '../../images/mark.jpg';
const Reviews = () => {
  //reviews Section
  return (
    <section className={classes.reviews}>
      <Container>
        <h2 className="section-heading text-white">Tourist Feedback</h2>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className={`${classes['review-item']} py-4`}>
              <div className={classes.text}>
                <p className={classes.star}>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="mb-4">
                  Thanks Pleasure Explorers for Memorable Tour to The Forest
                  Hiker. The tour was very Fantastic because of Pleasure
                  Explorers very well Organize. Through out the Tour we had
                  pleasant experience.
                </p>
                <div className="d-flex align-items-center">
                  <div className={classes['user-img']}>
                    <img src={elon} alt="user" />
                  </div>
                  <div className="pl-3">
                    <p className={classes.name}>Elon Musk</p>
                    <span className={classes.position}>Space X, Tesla CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={`${classes['review-item']} py-4`}>
              <div className={classes.text}>
                <p className={classes.star}>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="mb-4">
                  I used this platform as traveler and in both ways, this is one
                  of the best platform ever.People here are customer centric and
                  always go beyond KRA to help in every manner.Very good
                  organization
                </p>
                <div className="d-flex align-items-center">
                  <div className={classes['user-img']}>
                    <img src={jeff} alt="user" />
                  </div>
                  <div className="pl-3">
                    <p className={classes.name}>Jeff Bezos</p>
                    <span className={classes.position}>Amazon CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={`${classes['review-item']} py-4`}>
              <div className={classes.text}>
                <p className={classes.star}>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="mb-4">
                  It was a wonderful experience for us. All your arrangements
                  were up to the mark. All hotels and transportation
                  arrangements were excellent. Thanks for your support and
                  prompt response.
                </p>
                <div className="d-flex align-items-center">
                  <div className={classes['user-img']}>
                    <img src={mark} alt="user" />
                  </div>
                  <div className="pl-3">
                    <p className={classes.name}>Mark Zuckerberg</p>
                    <span className={classes.position}>Meta CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
