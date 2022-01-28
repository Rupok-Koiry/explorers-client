import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './store/auth-context';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
//Pages Import
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TourDetails from './pages/TourDetails/TourDetails';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import AdminRoute from './components/AdminRoute';
import AddBlog from './components/AddBlog/AddBlog';
import Contact from './pages/Contact/Contact';
import Compare from './pages/Compare/Compare';

const App = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  return (
    <>
      {/* If user on the dashboard page then header & footer will not appear */}
      {!location.pathname.includes('dashboard') && <Header />}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <AllBlogs />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <PrivateRoute path="/tours/:tourId">
            <TourDetails />
          </PrivateRoute>
          <PrivateRoute path="/add-experience">
            <div className="my-5">
              <AddBlog />
            </div>
          </PrivateRoute>
          <AdminRoute path="/dashboard">
            <Dashboard />
          </AdminRoute>
          {/* Redirect user if user already login */}
          <Route path="/login">
            {user.email ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user.email ? <Redirect to="/" /> : <Register />}
          </Route>
          {/* Not found page */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      {!location.pathname.includes('dashboard') && <Footer />}
    </>
  );
};

export default App;
