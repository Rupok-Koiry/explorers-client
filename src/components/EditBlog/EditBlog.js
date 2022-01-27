import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
const EditBlog = () => {
  const { blogId } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`https://frozen-citadel-34677.herokuapp.com/blog/${blogId}`)
      .then((res) => res.json())
      .then((response) => {
        reset(response.data);
        setBlog(response.data);
      });
  }, [blogId]);
  //Form submit handler
  const onSubmit = async (data) => {
    delete data._id;
    const response = await fetch(
      `https://frozen-citadel-34677.herokuapp.com/blog/${blogId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    await response.json();
    history.push('/dashboard/all-blogs');
  };
  //Add new Blog
  return (
    <section className="addNewService">
      <Container>
        <h2 className="section-heading">Add a new blog</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <FloatingLabel label="Blog Title" className="label mb-3">
                <Form.Control
                  placeholder="Blog Title"
                  className="input"
                  defaultValue={blog.title}
                  {...register('title', { required: true })}
                />
                {errors.title && (
                  <small className="error">*Blog title is required!</small>
                )}
              </FloatingLabel>
              <FloatingLabel label="Blog Description" className="label mb-3">
                <Form.Control
                  placeholder="Blog Description"
                  className="textArea"
                  as="textarea"
                  defaultValue={blog.description}
                  rows={3}
                  {...register('description', { required: true })}
                />
                {errors.description && (
                  <small className="error">
                    *Blog Description is required!
                  </small>
                )}
              </FloatingLabel>
              <FloatingLabel label="Author" className="label mb-3">
                <Form.Control
                  placeholder="Author"
                  className="input"
                  defaultValue={blog.author}
                  {...register('author', { required: true })}
                />
                {errors.author && (
                  <small className="error">*Author is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel label="Travel Location" className="label mb-3">
                <Form.Control
                  placeholder="Travel Location"
                  defaultValue={blog.location}
                  className="input"
                  {...register('location', { required: true })}
                />
                {errors.location && (
                  <small className="error">*Travel Location is required!</small>
                )}
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel label="Blog Image" className="label mb-3">
                <Form.Control
                  placeholder="Blog Image"
                  className="input"
                  defaultValue={blog.imageCover}
                  {...register('imageCover', { required: true })}
                />
                {errors.imageCover && (
                  <small className="error">*Blog Image Link is required!</small>
                )}
              </FloatingLabel>
              <FloatingLabel label="Travel Expense" className="label mb-3">
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Travel Expense"
                  className="input"
                  defaultValue={blog.expense}
                  {...register('expense', { required: true })}
                />
                {errors.expense && (
                  <small className="error">*Travel expense is required!</small>
                )}
              </FloatingLabel>
              <FloatingLabel label="Traveler Info" className="label mb-3">
                <Form.Control
                  type="text"
                  placeholder="Traveler Info"
                  className="input"
                  defaultValue={blog.info}
                  {...register('info', { required: true })}
                />
                {errors.info && (
                  <small className="error">*Traveler Info is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel label="Rating" className="label mb-3">
                <Form.Control
                  type="number"
                  min="0"
                  max="5"
                  step="any"
                  placeholder="Rating"
                  className="input"
                  defaultValue={blog.ratingsAverage}
                  {...register('ratingsAverage', { required: true })}
                />
                {errors.ratingsAverage && (
                  <small className="error">*Blog Rating is required!</small>
                )}
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={8} sm={10} className="mx-auto mt-3">
              <button
                type="submit"
                className="btn-style btn-style-primary w-100"
              >
                Update Blog
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default EditBlog;
