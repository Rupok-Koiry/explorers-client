import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../Loader/Loader';
import Tour from '../Tour/Tour';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://frozen-citadel-34677.herokuapp.com/blog?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      setpageCount(Math.ceil(data.total / limit));
      setTours(data.data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://frozen-citadel-34677.herokuapp.com/blog?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setTours(commentsFormServer);
    // scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <section className={`mb-5`} id="tours">
      <div className="container mb-4">
        <h2 className="section-heading">MOST POPULAR Blogs</h2>
        {/* If tour is not loaded then show spinner */}
        {!tours.length && <Loader />}
        <div className="row gy-5">
          {tours.map((tour) => (
            <Tour tour={tour} />
          ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </section>
  );
};

export default Tours;
