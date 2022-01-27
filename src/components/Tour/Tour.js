import React from 'react';
import classes from './Tour.module.css';
import { MdCalendarToday } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import { useHistory } from 'react-router';
import TourButton from '../TourButton/TourButton';
import Rating from 'react-rating';

const Tour = ({ tour }) => {
  const history = useHistory();

  return (
    <div className="col-lg-4 col-md-6" key={tour._id}>
      <div className={classes['card']}>
        <div className={classes['card__header']}>
          <div className={classes['card__picture']}>
            <div className={classes['card__picture-overlay']}>&nbsp;</div>
            <img
              src={tour.imageCover}
              alt={tour.title}
              className={classes['card__picture-img']}
            />
          </div>

          <h3 className={classes['heading-tertirary']}>
            <span>{tour.title}</span>
          </h3>
        </div>

        <div className={classes['card__details']}>
          <p className={classes['card__text']}>
            {tour.description?.substr(0, 168)}...
          </p>
          <div className={classes['card__data']}>
            <FaUserEdit className={classes['card__icon']} />

            <span>{tour.author}</span>
          </div>
          <div className={classes['card__data']}>
            <MdCalendarToday className={classes['card__icon']} />
            <span>{new Date(tour.date).toLocaleDateString('en-US')}</span>
          </div>
        </div>

        <div className={classes['card__footer']}>
          <p className={classes['card__ratings']}>
            <span className={classes['card__footer-value']}>
              {tour.ratingsAverage} / 5
            </span>
            <span className={classes['card__footer-text']}>
              <span className={classes.rating}>
                <Rating
                  emptySymbol="far fa-star icon"
                  fullSymbol="fas fa-star icon"
                  initialRating={tour.ratingsAverage}
                  readonly
                />
              </span>
            </span>
          </p>
          <TourButton
            color="green"
            size="lg"
            onClick={() => history.push(`/tours/${tour._id}`)}
          >
            Read More
          </TourButton>
        </div>
      </div>
    </div>
  );
};

export default Tour;
