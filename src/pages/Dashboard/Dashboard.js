import React, { useContext, useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import AllBlogs from '../../components/AllBlogs/AllBlogs';
import MakeAdmin from '../../components/MakeAdmin/MakeAdmin';
import AddBlog from '../../components/AddBlog/AddBlog';
import { AuthContext } from '../../store/auth-context';
import EditBlog from '../../components/EditBlog/EditBlog';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const { path, url } = useRouteMatch();
  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  const toggleStyle1 = toggle ? { marginLeft: '0' } : { marginLeft: '-17rem' };
  const toggleStyle2 = toggle
    ? { width: 'calc(100% - 17rem)', marginLeft: '17rem' }
    : { width: '100%', marginLeft: '0' };
  return (
    <>
      <div className="vertical-nav bg-white" id="sidebar" style={toggleStyle1}>
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              loading="lazy"
              src={user.photoURL}
              alt={user.displayName}
              width="80"
              height="80"
              className="me-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">{user.displayName}</h4>
            </div>
          </div>
        </div>

        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Dashboard
        </p>

        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link text-dark  dashlink"
              activeClassName="dashlink-active"
            >
              <i className="fas fa-home me-3 text-primary fa-fw"></i>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={`${url}/all-blogs`}
              className="nav-link text-dark dashlink"
              activeClassName="dashlink-active"
            >
              <i className="fas fa-tasks me-3 text-primary fa-fw"></i>
              All Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`${url}/add-blog`}
              className="nav-link text-dark dashlink"
              activeClassName="dashlink-active"
            >
              <i className="fas fa-plus  me-3 text-primary fa-fw"></i>
              Add A Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`${url}/make-admin`}
              className="nav-link text-dark dashlink"
              activeClassName="dashlink-active"
            >
              <i className="fas fa-user-plus  me-3 text-primary fa-fw"></i>
              Make Admin
            </NavLink>
          </li>

          <li className="nav-item">
            <span
              onClick={() => logout()}
              className="nav-link text-dark dashlink"
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-sign-out-alt me-3 text-primary fa-fw"></i>{' '}
              Logout
            </span>
          </li>
        </ul>
      </div>

      <div className="page-content p-5" id="content" style={toggleStyle2}>
        <button
          id="sidebarCollapse"
          type="button"
          className="btn-style btn-style-secondary shadow-sm px-4 mb-4"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars me-2"></i>
          <small className="text-uppercase font-weight-bold">Toggle</small>
        </button>
        <Switch>
          <Route exact path={`${path}/all-blogs`}>
            <AllBlogs />
          </Route>
          <Route exact path={`${path}/add-blog`}>
            <AddBlog />
          </Route>
          <Route exact path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>

          <Route exact path={`${path}/edit/:blogId`}>
            <EditBlog />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
