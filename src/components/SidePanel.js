import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/SidePanel.css'


function SidePanel (){
    return (
      <>
      <div className="container-fluid">

        <div className="row g-0 mt-n3">

          <aside className="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">

           <div className="position-sticky">
            <div className="offcanvas-header d-flex d-lg-none align-items-center">
              <h2 className="h5 mb-0">Filters</h2>
              <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
            </div>  
            <div className="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0">
              <ul className="nav nav-tabs mb-0">
                <li className="nav-item"><Link className="nav-link" to="/"><i className="social-icon fas fa-building me-2"></i>For rent</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/"><i className="social-icon fas fa-home me-2"></i>For sale</Link></li>
              </ul>
            </div>
            <div className="offcanvas-body py-lg-4">
              <div className="pb-4 mb-2">
              <h3 className="">Property type</h3>
                  <select className="form-select mb-2">
                    <option className="option"  value="Apartments">Apartments</option>
                    <option className="option" value="Apartments">1bed, 1bath</option>
                    <option className="option" value="Apartments">2bed, 1bath</option>
                    <option className="option" value="Apartments">2bed, 2bath</option>
                    <option className="option" value="Apartments">3bed, 2bath</option>
                  </select>
              </div>
              <div className="pb-4 mb-2">
              <h3 className="">Property type</h3>
                  <select className="form-select mb-2">
                    <option className="option" value="Condos">Condos</option>
                    <option className="option" value="Condos">1bed, 1bath</option>
                    <option className="option" value="Condos">2bed, 1bath</option>
                    <option className="option" value="Condos">2bed, 2bath</option>
                    <option className="option" value="Condos">3bed, 2bath</option>
                  </select>
              </div>
              <div className="pb-4 mb-2">
              <h3 className="">Property type</h3>
                  <select className="form-select mb-2">
                    <option className="option" value="Homes">Homes</option>
                    <option className="option" value="Homes">2bed, 2bath</option>
                    <option className="option" value="Homes">2bed, 2bath</option>
                    <option className="option" value="Homes">3bed, 2bath</option>
                    <option className="option" value="Homes">3bed, 2bath</option>
                  </select>
              </div>
              </div> 
              <div className="pb-4 mb-2">
                  <h3 className="h6">Price per month</h3>
                  <div className="range-slider" data-start-min="1100" data-start-max="3000" data-min="200" data-max="5000" data-step="100">
                    <div className="range-slider-ui"></div>
                    <div className="d-flex align-items-center">
                      <div className="w-50 pe-2">
                        <div className="input-group"><span className="input-group-text fs-base">$</span>
                          <input className="form-control range-slider-value-min" type="text"/>
                        </div>
                      </div>
                      <div className="text-muted">&mdash;</div>
                      <div className="w-50 ps-2">
                        <div className="input-group"><span className="input-group-text fs-base">$</span>
                          <input className="form-control range-slider-value-max" type="text"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="pb-4 mb-2">
                  <h3 className="h6 pt-1">Square metres</h3>
                  <div className="d-flex align-items-center">
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Min"/>
                    <div className="mx-2">&mdash;</div>
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Max"/>
                  </div>
                </div>
                <hr/>
                <div className="pb-4 mb-2">
                  <h3 className="">Amenities</h3>
                  <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{height: '11rem'}}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="air-condition" checked/>
                      <label className="form-check-label fs-sm" for="air-condition">Air conditioning</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="balcony"/>
                      <label className="form-check-label fs-sm" for="balcony">Balcony</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="garage" checked/>
                      <label className="form-check-label fs-sm" for="garage">Garage</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gym"/>
                      <label className="form-check-label fs-sm" for="gym">Gym</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="parking"/>
                      <label className="form-check-label fs-sm" for="parking">Parking</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="pool"/>
                      <label className="form-check-label fs-sm" for="pool">Pool</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="camera"/>
                      <label className="form-check-label fs-sm" for="camera">Security cameras</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="wifi" checked/>
                      <label className="form-check-label fs-sm" for="wifi">WiFi</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="laundry"/>
                      <label className="form-check-label fs-sm" for="laundry">Laundry</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="dishwasher"/>
                      <label className="form-check-label fs-sm" for="dishwasher">Dishwasher</label>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="pb-4 mb-2">
                  <h3 className="h6">Pets</h3>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="allow-cats"/>
                    <label className="form-check-label fs-sm" for="allow-cats">Cats allowed</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="allow-dogs"/>
                    <label className="form-check-label fs-sm" for="allow-dogs">Dogs allowed</label>
                  </div>
                </div>
                <hr/>
                <div className="pb-4 mb-2">
                  <h3 className="h6">Additional options</h3>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="verified"/>
                    <label className="form-check-label fs-sm" for="verified">Verified</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="featured"/>
                    <label className="form-check-label fs-sm" for="featured">Featured</label>
                  </div>
                </div>
                <div className="border-top py-4">
                  <button className="btn btn-md" type="button"><i class="fi-rotate-right me-2"></i>Reset filters</button>
                </div>
              </div>
          






           

            </aside>
          </div>
        </div>
      </>
    )
}

export default SidePanel