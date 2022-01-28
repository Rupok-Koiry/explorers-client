import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  //Contact
  return (
    <div className={classes.contact} data-scroll-index="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div>
              <h2 className="section-heading">Get in touch</h2>
            </div>
          </div>
        </div>
        {/* Contact info */}
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className={classes['contact-info']}>
              <h3>For any queries and support</h3>
              <div className={classes['contact-info-item']}>
                <i className="fas fa-location-arrow"></i>
                <h4>Location</h4>
                <p>Modhubagh,Moghbazar, Dhaka-1217</p>
              </div>
              <div className={classes['contact-info-item']}>
                <i className="fas fa-envelope"></i>
                <h4>Write to us at</h4>
                <p>koiry.rupok@gmail.com</p>
              </div>
              <div className={classes['contact-info-item']}>
                <i className="fas fa-phone"></i>
                <h4>Call us on</h4>
                <p>01719032457</p>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="col-lg-8 col-md-7">
            <div className={classes['contact-form']}>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className={`form-group ${classes.inputContainer}`}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={`form-group ${classes.inputContainer}`}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`form-group ${classes.inputContainer}`}>
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`form-group ${classes.inputContainer}`}>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`form-group ${classes.inputContainer}`}>
                      <textarea
                        placeholder="Your Message"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className={`btn ${classes.contactBtn}`}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
