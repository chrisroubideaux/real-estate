import React from 'react'
import '../styles/ToolBar.css'
import { Link } from 'react-router-dom'

function ToolBar(){
    return (
        <>
        <div className="toolbar mb-4">
          
           <ul className="nav nav-fill">
           
            <Link className="nav-link tab" to="/Rentals">   
              <li className="nav-item"> 
                <i className="tab-icon fas fa-home"></i>
              </li>
            rentals
            </Link>
            <Link className="nav-link tab" to="/Sales">   
              <li className="nav-item">
                <i className="tab-icon fas fa-sign"></i>
              </li>
              For sale
            </Link>
            <Link className="nav-link tab">   
              <li className="nav-item">
                <i className="tab-icon fas fa-money-bill"></i>
              </li>
              Pricing
            </Link>
            <Link className="nav-link tab">   
              <li className="nav-item">
                <i className="tab-icon fas fa-map"></i>
              </li>
              Maps
            </Link>  
           </ul>
           </div>
       
        </>
    )
}

export default ToolBar