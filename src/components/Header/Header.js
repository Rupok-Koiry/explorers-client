import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';
import classes from './Header.module.css';
import TourButton from '../TourButton/TourButton';

const Header = () => {
  const { user, logout, admin } = useContext(AuthContext);
  const history = useHistory();
  /* Navbar  */
  return (
    <header className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${classes.navbar} navbar-dark`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className={classes.logoContainer}>
            <img
              src="https://explorers-tours-and-travels.web.app/static/media/logo-white.6c89a3f0.png"
              className="d-inline-block align-top"
              alt="logo"
            />
            <span>Explorers</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`ms-auto ${classes.navLinkContainer} align-items-center`}
            >
              <Nav.Link
                eventKey="1"
                exact
                as={NavLink}
                to="/"
                activeClassName={classes.active}
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                exact
                as={NavLink}
                activeClassName={classes.active}
                to="/blogs"
              >
                Blogs
              </Nav.Link>

              {admin && (
                <Nav.Link
                  eventKey="3"
                  exact
                  as={NavLink}
                  to={`/dashboard/all-blogs`}
                >
                  Dashboard
                </Nav.Link>
              )}
              {/* If user logged in then this link will show */}
              {user.email && !admin && (
                <Nav.Link
                  eventKey="4"
                  exact
                  as={NavLink}
                  activeClassName={classes.active}
                  to="/add-experience"
                >
                  Add Experience
                </Nav.Link>
              )}
              <Nav.Link
                eventKey="2"
                exact
                as={NavLink}
                activeClassName={classes.active}
                to="/contact"
              >
                Contact
              </Nav.Link>
              {user.email ? (
                <React.Fragment>
                  <TourButton color="green" onClick={logout}>
                    {user.displayName} Logout
                  </TourButton>
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt={user.displayName.split(' ')[0]}
                      className={classes.userImg}
                    />
                  )}
                </React.Fragment>
              ) : (
                <TourButton
                  onClick={() => history.push('/login')}
                  color="green"
                >
                  Login
                </TourButton>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
