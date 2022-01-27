import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import Tour from '../../components/Tour/Tour';
const AllBlogs = () => {
  const [phones, setPhones] = useState([]);
  //Load all phones
  useEffect(() => {
    const loadPhones = async () => {
      const response = await fetch(
        'https://frozen-citadel-34677.herokuapp.com/blog'
      );
      const responseData = await response.json();
      setPhones(responseData.data);
    };
    loadPhones();
  }, []);
  return (
    <section className="smartphones my-5">
      <Container>
        <h2 className="section-heading">All Product</h2>
        {!phones.length && <Loader />}
        <Row className="gy-4">
          {phones.map((tour) => (
            <Tour tour={tour} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllBlogs;
