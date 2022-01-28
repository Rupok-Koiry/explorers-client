import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { ToastContainer } from 'react-toastify';
import toastCreator from '../../hooks/toastifyCreator';
import './Compare.css';

const Compare = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const selectedBlog1 = useRef(null);
  const selectedBlog2 = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://frozen-citadel-34677.herokuapp.com/blog'
      );
      const data = await response.json();
      setBlogs(data.data);
    })();
  }, []);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const blog1 = selectedBlog1.current.value;
    const blog2 = selectedBlog2.current.value;
    if (blog1 === '' || blog2 === '') {
      return toastCreator('Please select blogs', 'error');
    }
    if (blog1 === blog2) {
      return toastCreator('Please select different blogs', 'error');
    }
    setSelectedBlogs(
      blogs.filter((blog) => blog._id == blog1 || blog._id == blog2)
    );
    console.log(selectedBlogs);
  };
  return (
    <section className="my-5 compare">
      <h2 className="section-heading">Compare Between Tours</h2>
      <div className="container">
        <form className="row gx-5 gy-3" onSubmit={onFormSubmit}>
          <div className="col-md-6">
            <select className="form-select" required ref={selectedBlog1}>
              <option selected disabled value="">
                Select the spot
              </option>

              {blogs.map((blog) => (
                <option value={blog._id} key={blog._id}>
                  {blog.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select" required ref={selectedBlog2}>
              <option selected disabled value="">
                Select the spot
              </option>
              {blogs.map((blog) => (
                <option value={blog._id} key={blog._id}>
                  {blog.title}
                </option>
              ))}
            </select>
          </div>
          <button className="formSubmitBtn w-25 mx-auto">Compare</button>
        </form>
      </div>
      {selectedBlogs.length > 0 && (
        <div className="container">
          <ul className="compare-table">
            <li>
              <ul>
                <li>Title</li>
                <li>Author</li>
                <li>Expense</li>
                <li>Rating</li>
                <li>Location</li>
              </ul>
            </li>

            {selectedBlogs.map((blog) => (
              <React.Fragment key={blog._id}>
                <li>
                  <ul>
                    <li>{blog.title}</li>
                    <li>{blog.author}</li>
                    <li>${blog.expense}</li>
                    <li className="rating-icon">
                      {blog.ratingsAverage}{' '}
                      <Rating
                        emptySymbol="far fa-star icon"
                        fullSymbol="fas fa-star icon"
                        initialRating={blog.ratingsAverage}
                        readonly
                      />
                    </li>
                    <li>{blog.location}</li>
                  </ul>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};

export default Compare;
