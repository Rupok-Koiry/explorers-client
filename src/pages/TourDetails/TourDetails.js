import React, { useEffect, useState } from 'react';
import TourDescription from '../../components/TourDescription/TourDescription';
import TourDetailsBanner from '../../components/TourDetailsBanner/TourDetailsBanner';
import { useParams } from 'react-router-dom';
const TourDetails = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    //Load single which was clicked by user
    const loadSingleTour = async () => {
      const response = await fetch(
        `https://frozen-citadel-34677.herokuapp.com/blog/${tourId}`
      );
      const responseData = await response.json();
      setTour(responseData.data);
    };
    loadSingleTour();
  }, [tourId]);
  return (
    <>
      <TourDetailsBanner tour={tour} />
      <TourDescription tour={tour} />
    </>
  );
};

export default TourDetails;
