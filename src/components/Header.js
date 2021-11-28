import React, { Fragment } from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';


const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Link className='nav-link' onClick={logout} to='#!'>Logout</Link>
);

const guestLinks = (
  <Fragment>
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <Link className='nav-link' to='/Login'>Login</Link>
        <Link className='nav-link' to='/SignUp'>Sign Up</Link>
     </ul>
  </Fragment>
);

  return ( 
    <>
  
    <nav className="navbar navbar-expand-lg ">
     <div className="container-fluid"> 
        <Link className="nav-link active" to="/">
          <h4 className="pt-3">Demo</h4>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"><i className="social-icon fas fa-align-right"></i></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link pt-3" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link pt-3" to="/About">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link">
            { !loading && (<Fragment>{ isAuthenticated ? authLinks :guestLinks }</Fragment>) }
          </Link>
        </li>
        <form className="m-4">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </ul>
      
    </div>
  </div>  
</nav>
<Alert />            

  </>
  );
};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
