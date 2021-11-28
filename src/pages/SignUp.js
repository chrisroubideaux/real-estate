import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../components/Alert';
import '../styles/Form.css'

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2)
            setAlert('Passwords do not match', 'error');
        else
            signup({ name, email, password, password2 });
    };

    if (isAuthenticated)
        return <Redirect to='/' />;
    
    return (
        <div>
          <Helmet>
            <title>Sign Up</title>
            <meta
              name='description'
              content='sign up page'
            />
            </Helmet>
            <Alert/>
          <div className=" text-center py-5"> 
            <Link to="/Listings" className="nav-item">
              <img className="mb-4" src="https://purepng.com/public/uploads/large/purepng.com-big-househousebuildinghomewood-houseconcrete-house-1701528487039vdff6.png " alt="" width="72" height="57"/>
            </Link>
            <h2 className="">Please Create an account</h2>
            <p className="par">Create your Account</p>
          <form className="form text-center" onSubmit={e => onSubmit(e)}>
               
            <input 
                className="form-control m-2"
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                required 
            />
            <input 
                className="form-control m-2"
                type='email'
                placeholder='Email'
                name='email'
                value={email}
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
            <input
                className="form-control m-2"
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
                minLength='6'
            />
              
            <div className="container"> 
              <button className="w-100 btn btn-md" type="submit">Sign up</button>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy; Real Estate demo Est, 2021</p>
            </form>
            <p className="par">
                Already have an account? <Link className='nav-link' to='/Login'>Login</Link>
            </p>
            </div>
        </div>
    );

};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, signup })(SignUp);