import React, { useState } from 'react';
import { useContext } from 'react';
import {
  Alert,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { AuthContext } from '../../store/auth-context';
const AddNewBlog = () => {
  const [success, setSuccess] = useState(false);

  const { user, admin } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Form submit handler
  const onSubmit = async (data) => {
    const allFormData = { ...data };
    allFormData.date = new Date();
    allFormData.approve = admin;
    const response = await fetch(
      'https://frozen-citadel-34677.herokuapp.com/blog',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allFormData),
      }
    );
    await response.json();
    if (admin) {
      history.push('/dashboard/all-blogs');
    } else {
      setSuccess(true);
    }
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
                  defaultValue={user.displayName}
                  {...register('author', { required: true })}
                />
                {errors.author && (
                  <small className="error">*Author is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel label="Travel Location" className="label mb-3">
                <Form.Control
                  placeholder="Travel Location"
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
              <button type="submit" className="btn formSubmitBtn">
                Add Blog
              </button>
            </Col>
          </Row>
          {success && (
            <Alert
              variant="info"
              onClose={() => setSuccess(false)}
              dismissible
              className="w-50 mx-auto my-3"
            >
              <p className="m-0">Your blog is pending for admin approval!</p>
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
};

export default AddNewBlog;
