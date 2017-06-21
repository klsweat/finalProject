import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Navbar = ({ children }) => (

  <div>
    
    <div className="">
      <div className="">
        <IndexLink to="/">React App</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="">
          <Link to="/courses">Courses</Link>
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>




);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
