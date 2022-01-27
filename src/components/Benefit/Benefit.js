import React from 'react';
//Icons
import {
  MdCalendarToday,
  MdOutlineHiking,
  MdOutlineLiquor,
  MdVerifiedUser,
} from 'react-icons/md';
import classes from './Benefit.module.css';
//Benefit images
import benefit1 from '../../images/benefit-1.webp';
import benefit2 from '../../images/benefit-2.webp';
import benefit3 from '../../images/benefit-3.webp';
import benefit4 from '../../images/benefit-4.webp';
import { Col, Container, Row } from 'react-bootstrap';

const Benefit = () => {
  //Benefit Section
  return (
    <section className={classes.benefit}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className={classes.benefit__content}>
              <div className="section-heading-sm">
                <h2>Our Benefits</h2>
              </div>
              <p>
                Travelling is a great opportunity to sleep late and even have a
                nap in the afternoon. Get your beauty sleep!
              </p>
              <Row>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdCalendarToday />
                      Personal Schedule
                    </h4>
                    <p>
                      Generally, scheduled tours depart on set, non-negotiable
                      dates, feature a circuit of popular attractions bundled
                      around a theme medium to large groups.
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdOutlineLiquor />
                      Luxury Interiors
                    </h4>
                    <p>
                      We invite you to discover unique VIP Experiences that are
                      only available to you as a Luxury Gold guest. VIP
                      Experiences bring you joy.
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdVerifiedUser />
                      Safe &amp; Confidential
                    </h4>
                    <p>
                      We will safeguard, according to strict standards of
                      security and confidentiality, any information our
                      customers share with us.
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdOutlineHiking />
                      Professional Crew
                    </h4>
                    <p>
                      Fully staffed private charters. Tours with experienced
                      captain and passionate local guide who knows very well
                      about that place.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <div className="col-lg-6">
            <div className={classes.benefit__pic}>
              <Row>
                <Col sm={6}>
                  <div className={classes.benefit__pic__item}>
                    <img src={benefit1} alt="tour" className="img-fluid" />
                  </div>
                  <div className={classes.benefit__pic__item}>
                    <img src={benefit2} alt="tour" className="img-fluid" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__pic__item}>
                    <img src={benefit3} alt="tour" className="img-fluid" />
                  </div>
                  <div className={classes.benefit__pic__item}>
                    <img src={benefit4} alt="tour" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Benefit;
