import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


function Footer() {
    return (
        <>
        <div className="footer py-5">
          <div className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
             <div className="col-12 col-md">
               <div className="p mb-3">&copy; 2021 Demo</div>
             </div>
             <div className="col-6 col-md">
               <h5>Features</h5>
               <ul className="list-unstyled text-small">
                 <li><Link className="nav-link" to="/">Open house</Link></li>
                 <li><Link className="nav-link" to="/">Join the team</Link></li>
                 <li><Link className="nav-link" to="/">Community</Link></li>
               </ul>  
             </div>     
             <div className="col-6 col-md">
               <h5>Features</h5>
               <ul className="list-unstyled text-small">
                <li><i className="social-icon  fab fa-facebook-f"></i></li>
                <li><i className="social-icon  fab fa-instagram"></i></li>
                <li><i className="social-icon fab fa-twitter"></i></li>
               </ul>  
             </div>     
             <div className="col-6 col-md">
               <h5>Features</h5>
               <ul className="list-unstyled text-small">
                 <li><Link className="nav-link" to="/">Team</Link></li>
                 <li><Link className="nav-link" to="/">Locations</Link></li>
                 <li><Link className="nav-link" to="/">Privacy</Link></li>
                 <li><Link className="nav-link" to="/">Terms</Link></li>
               </ul>  
             </div>     
            </div>
         </div>  
        </div>
        </>
    )
}

export default Footer
