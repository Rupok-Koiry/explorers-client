import React from 'react';
import classes from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  //Footer Section
  return (
    <footer className={classes.footer}>
      <div className="container text-center">
        <div className={classes['footer-logo']}>
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
          <h3>Explorers</h3>
        </div>
        <ul className={classes['quick-links']}>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> Tours</a>
          </li>
          <li>
            <a href="/"> Privacy Policy</a>
          </li>
          <li>
            <a href="/"> Terms & Conditions</a>
          </li>
        </ul>
        <ul className={classes['social-icons']}>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <p className={classes.copyright}>
        Copyright © 2022 All rights reserved | Created by Rupok Koiry 💖
      </p>
    </footer>
  );
};

export default Footer;
