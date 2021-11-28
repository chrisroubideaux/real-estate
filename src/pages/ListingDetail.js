import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListingDetail = (props) => {
    const [listing, setListing] = useState({});
    const [realtor, setRealtor] = useState({});
    const [price, setPrice] = useState(0);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    
    useEffect(() => {
        const slug = props.match.params.id;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        axios.get(`${process.env.REACT_APP_API_URL}/api/listings/${slug}`, config)
        .then(res => {
            setListing(res.data);
            setPrice(numberWithCommas(res.data.price));
        })
        .catch(err => {

        });
    }, [props.match.params.id]);

    useEffect(() => {
        const id = listing.realtor;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        if (id) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/${id}`, config)
            .then(res => {
                setRealtor(res.data);
            })
            .catch(err => {

            });
        }
    }, [listing.realtor]);

    const displayInteriorImages = () => {
        let images = [];

        images.push(
            <div key={1} className='row'>
              <div className="col-lg-4">
                {
                listing.photo_1 ? ( 
               <div className="card">
                 <img className='img' src={listing.photo_1} alt='' />
               </div>
                 ) : null
                }
              </div> 
              <div className="col-lg-4">
               {
                listing.photo_2 ? (
                <div className="card">
                  <img className='img' src={listing.photo_2} alt='' /> 
                </div>  
                    ) : null
                  }
              </div>
              <div className="col-lg-4">
               {
                listing.photo_3 ? ( 
                <div className="card">
                    <img className='img' src={listing.photo_3} alt='' />
                </div> 
                     ) : null
                    } 
              </div>
            </div>
          );
          images.push(
           <div key={2} className='row'>
            <div className="col-lg-4">
              {
              listing.photo_4 ? ( 
             <div className="card">
               <img className='listingdetail__display__image' src={listing.photo_4} alt='' />
             </div>
               ) : null
              }
            </div> 
            <div className="col-lg-4">
             {
              listing.photo_5 ? (
              <div className="card">
                <img className='listingdetail__display__image' src={listing.photo_5} alt='' /> 
              </div>  
                  ) : null
                }
            </div>
            <div className="col-lg-4">
             {
              listing.photo_6 ? ( 
              <div className="card">
                  <img className='listingdetail__display__image' src={listing.photo_6} alt='' />
              </div> 
                   ) : null
                  } 
            </div>
          </div>
        ); 
        images.push(
          <div key={3} className='row'>
            <div className="col-lg-4">
              {
              listing.photo_7 ? ( 
             <div className="card">
               <img className='listingdetail__display__image' src={listing.photo_7} alt='' />
             </div>
               ) : null
              }
            </div> 
            <div className="col-lg-4">
             {
              listing.photo_8 ? (
              <div className="card">
                <img className='listingdetail__display__image' src={listing.photo_8} alt='' /> 
              </div>  
                  ) : null
                }
            </div>
            <div className="col-lg-4">
             {
              listing.photo_9 ? ( 
              <div className="card">
                  <img className='listingdetail__display__image' src={listing.photo_9} alt='' />
              </div> 
                   ) : null
                  } 
            </div>
          </div>
        ); 
        images.push(
           <div key={4} className='row'>
            <div className="col-lg-4">
              {
              listing.photo_10 ? ( 
             <div className="card">
               <img className='listingdetail__display__image' src={listing.photo_10} alt='' />
             </div>
               ) : null
              }
            </div> 
            <div className="col-lg-4">
             {
              listing.photo_11 ? (
              <div className="card">
                <img className='listingdetail__display__image' src={listing.photo_11} alt='' /> 
              </div>  
                  ) : null
                }
            </div>
            <div className="col-lg-4">
             {
              listing.photo_12 ? ( 
              <div className="card">
                  <img className='listingdetail__display__image' src={listing.photo_12} alt='' />
              </div> 
                   ) : null
                  } 
            </div>
          </div>
        ); 
        images.push(
           <div key={5} className='row'>
            <div className="col-lg-4">
              {
              listing.photo_13 ? ( 
             <div className="card">
               <img className='listingdetail__display__image' src={listing.photo_13} alt='' />
             </div>
               ) : null
              }
            </div> 
            <div className="col-lg-4">
             {
              listing.photo_14 ? (
              <div className="card">
                <img className='listingdetail__display__image' src={listing.photo_14} alt='' /> 
              </div>  
                  ) : null
                }
            </div>
            <div className="col-lg-4">
             {
              listing.photo_15 ? ( 
              <div className="card">
                  <img className='listingdetail__display__image' src={listing.photo_15} alt='' />
              </div> 
                   ) : null
                  } 
            </div>
          </div>
            );
            images.push(
                <div key={6} className='row'>
                <div className="col-lg-4">
                  {
                  listing.photo_16 ? ( 
                 <div className="card">
                   <img className='listingdetail__display__image' src={listing.photo_16} alt='' />
                 </div>
                   ) : null
                  }
                </div> 
                <div className="col-lg-4">
                 {
                  listing.photo_17 ? (
                  <div className="card">
                    <img className='listingdetail__display__image' src={listing.photo_17} alt='' /> 
                  </div>  
                      ) : null
                    }
                </div>
                <div className="col-lg-4">
                 {
                  listing.photo_18 ? ( 
                  <div className="card">
                      <img className='listingdetail__display__image' src={listing.photo_18} alt='' />
                  </div> 
                       ) : null
                      } 
                </div>
              </div>
            )
            images.push(
                <div key={6} className='row'>
                <div className="col-lg-4">
                  {
                  listing.photo_16 ? ( 
                 <div className="card">
                   <img className='listingdetail__display__image' src={listing.photo_16} alt='' />
                 </div>
                   ) : null
                  }
                </div> 
                <div className="col-lg-4">
                 {
                  listing.photo_17 ? (
                  <div className="card">
                    <img className='listingdetail__display__image' src={listing.photo_17} alt='' /> 
                  </div>  
                      ) : null
                    }
                </div>
                <div className="col-lg-4">
                 {
                  listing.photo_18 ? ( 
                  <div className="card">
                      <img className='listingdetail__display__image' src={listing.photo_18} alt='' />
                  </div> 
                       ) : null
                      } 
                </div>
              </div>  
             );

             return images;
         };    
            
    return (
        <>
         <Helmet>
            <title>Realest Estate - Listing | {`${listing.title}`}</title>
              <meta
                name='description'
                content='Listing detail'
                />
            </Helmet>

        <div className="row">

          <div className="col-lg-4">
            <h1 className="">{listing.title}</h1>
            <p className="">{listing.city}, {listing.state}, {listing.zipcode}</p>
           </div>
           <div className="col-lg-4">
           <Link className='' to='/'>Home</Link> / {listing.title}
           </div>
           <div className="col-lg-4">
             <img className='listingdetail__display__image' src={listing.photo_main} alt='' />
           </div>
           <div className="col-lg-4">
             <h3 className='listingdetail__realtor'>{realtor.name}</h3>
                <p className="">{realtor.phone}</p>
                <p className="">{realtor.email}</p>
                <p className="">{realtor.description}</p> 
           </div>
            <div className="col-lg-4">
                <li className="">Home Type: {listing.home_type}</li>
                <li className="">Price: ${price}</li>
                <li className="">Bedrooms: {listing.bedrooms}</li>
                <li className="">Bathrooms: {listing.bathrooms}</li>
                <li className="">Square Feet: {listing.sqft}</li>
           </div>
           <div className="col-lg-4">
           <li className='listingdetail__list__item'>Sale Type: {listing.sale_type}</li>
              <li className='listingdetail__list__item'>Address: {listing.address}</li>
              <li className='listingdetail__list__item'>City: {listing.city}</li>
              <li className='listingdetail__list__item'>State: {listing.state}</li>
              <li className='listingdetail__list__item'>Zipcode: {listing.zipcode}</li>
           </div>
           <p className='listingdetail__description'>{listing.description}</p>
           {displayInteriorImages()}
        </div>
            
        </>
    );
};

export default ListingDetail
