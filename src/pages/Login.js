import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import Header from '../components/Header';
import '../styles/Form.css'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated)
        return <Redirect to='/' />;
    
    return (
        <div className="">
          <Helmet>
            <title>Login</title>
              <meta
                name='description'
                content='login page'
            />
            </Helmet>

           <Header/>
            <div className=" text-center py-5">
              <Link to="/ListingsPage" className="nav-item">
                <img className="mb-4" src="https://purepng.com/public/uploads/large/purepng.com-big-househousebuildinghomewood-houseconcrete-house-1701528487039vdff6.png " alt="" width="72" height="57"/>
              </Link> 
              <h2 className="">Login</h2>
              <p className="par">Login into your Account</p>
            <form className="form text-center" onSubmit={e => onSubmit(e)}>
                <input   
                    className="form-control m-2"
                    type='email'
                    placeholder='Email'
                    name='email' value={email}
                    onChange={e => onChange(e)}
                    required
                />
                <input
                    className="form-control m-2"
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                />   
                <div className="container"> 
                  <button className="w-100 btn btn-md" type="submit">Login</button>
                </div>
            </form>
                <p className="par">
                  Dont have an account? sign up now!<Link className='nav-link' to='/SignUp'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);