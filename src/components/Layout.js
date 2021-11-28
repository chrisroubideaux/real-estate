import React from 'react';
import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import Footer from '../components/Footer';



const Layout = (props) => (
  
        <>
        <div className="layout">
          <Header/>
          <div className="container">
          {props.children}
          <SidePanel/>  
         <Footer/>
        </div>
        </div>
        </>
    )
    export default Layout;
