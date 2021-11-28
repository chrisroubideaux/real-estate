import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export default function Home() {
    return (
     <> 

      <Helmet>
        <title>Real estate</title>
          <meta
            name='description'
            content='/'/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet"></link>
      </Helmet>

      <div className="home">
        <div className="container text-center py-5"> 
          <h1 className="py-5">Real Estate</h1>
          <img className="img" src="http://pngimg.com/uploads/house/small/house_PNG10.png" alt=""/>
          <p className="par m-3">Real-estate app built with react.js python and django.</p>
          <Link className="btn btn-md" to="/ListingsPage">Explore</Link>
          </div>  
        <div className=" text-center pt-5">
          <i className="social-icon bi bi-github"></i>
          <p className="par">© Copyright 2021 Horizion Properties</p>
        </div>
      </div>
    </>
  )
}
