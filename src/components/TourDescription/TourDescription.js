import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import classes from './TourDescription.module.css';
import Rating from 'react-rating';

const TourDescription = ({ tour }) => {
  //Date format
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <section className={classes.description}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className={classes['description-content']}>
              <h2 className="section-heading-sm">Quick fact</h2>
              <ul>
                <li>
                  <span>Author : </span>
                  {tour.author}
                </li>
                <li>
                  <span>Location : </span> {tour.location}
                </li>
                <li className={classes.price}>
                  <span>Expense : </span> ${tour.expense}
                </li>
                <li>
                  <span>Tour DATE :</span>
                  {new Date(tour.date).toLocaleDateString('en-US', options)}
                </li>

                <li>
                  <span>Traveller Info : </span> {tour.info}
                </li>
                <li>
                  <span>RATING : </span> {tour.ratingsAverage} / 5{' '}
                </li>
                <span className={classes.rating}>
                  <Rating
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                    initialRating={tour.ratingsAverage}
                    readonly
                  />
                </span>
                <li>
                  <span>Description : </span> {tour.description}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDescription;
