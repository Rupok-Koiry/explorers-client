import React from 'react';
import classes from './TourDetailsBanner.module.css';
import Loader from '../Loader/Loader';
const TourDetailsBanner = ({ tour }) => {
  //Split tour name
  const nameArray = tour.title?.split(' ');

  //Show spinner when tour is not loaded
  if (!tour.title) {
    return <Loader />;
  }
  return (
    <section
      className={classes.tourBanner}
      style={{ backgroundImage: `url('${tour.imageCover}')` }}
    >
      <div className="heading-box">
        <h1 className={classes['heading-tertirary']}>
          <span>
            {nameArray[0]}
            <br /> {nameArray[1]} <br />
            {nameArray.slice(2).join(' ')}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default TourDetailsBanner;
