import React from 'react';
import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import Listings from '../pages/Listings'
import Footer from '../components/Footer';


const ListingsPage = (props) => (
  
        <>
        <div className="layout">
          <Header/>
          {props.children}
          <SidePanel/>
          <div className="container">
          <Listings/>  
         <Footer/>
         </div>
        </div>
        </>
    )
    export default ListingsPage;