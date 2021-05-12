
import React, { Component } from 'react';
import HomeClinic from '../home/clinic';
import BookDoctor from '../home/bookDoctor';
import HomeFeatures from '../home/features';
import Slider from "react-slick";
import { Docslide1,Doctor07,ImgPharmacy1,LabImage } from "../home/image.jsx";

class Pharmacyindex extends Component {
   render() { 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 3500,
      cssEase: "linear"
    };   
      return ( 
        <div className="main-wrapper">
            {/* Slider */}
      <section className="section full-slide-home">
        <div>
          <div className="slick-wrapper">
            <div className="slider-1">
              {/*slide*/}
          <Slider {...settings}>
              <div className="col-12 d-flex">
                <div className="slide-image col-12 col-lg-6">
                  <span className="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
                  <h2 className="mb-3">Hassle-free appoinments <br /> with Prime Doctors</h2>
                  <ul className="list-inline slide-ul">
                    <li className="list-inline-item">Reasonable wait time</li>
                    <li className="list-inline-item">Fixed Consultation Fee</li>
                    <li className="list-inline-item">Consulation with the preferred doctor</li>
                  </ul>
                  <div className="d-inline-block">
                    <a href="/patient/booking" className="btn book-btn1" tabIndex={0}>Book Now</a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <img src={Docslide1} alt="" />
                </div>
              </div>
              {/*/slide*/}
              {/*slide*/}
              <div className="col-12 d-flex">
                <div className="slide-image col-12 col-lg-6">
                  <span className="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
                  <h2 className="mb-3">Hassle-free appoinments <br /> with Prime Doctors</h2>
                  <ul className="list-inline slide-ul">
                    <li className="list-inline-item">Reasonable wait time</li>
                    <li className="list-inline-item">Fixed Consultation Fee</li>
                    <li className="list-inline-item">Consulation with the preferred doctor</li>
                  </ul>
                  <div className="d-inline-block">
                    <a href="/patient/booking" className="btn book-btn1" tabIndex={0}>Book Now</a>
                  </div>
                </div>
                <div className="col-6 col-12 col-lg-6 d-flex justify-content-center">
                  <img src={Docslide1} alt="" />
                </div>
              </div>
              </Slider>
              {/*/slide*/}
            </div>
          </div>
        </div>	
      </section>	 
      {/* Slider */}
             {/* Home Banner */}
            <section className="section-search-pharmacy">
                <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                    <div className="banner-wrapper2">
                        {/* Search */}
                        <div className="search-box1">
                        <form action="/Pharmacy/pharmacy-search">
                            <p className="mb-0 mr-3">Find a Pharmacy</p>
                            <div className="form-group search-location1 postion-relative">
                            <input type="text" className="form-control" placeholder="Enter your location / Pincode" style={{paddingLeft: '15px'}} />
                            <span className="search-detect">Detect</span>
                            </div>
                            <button type="submit" className="btn btn-primary search-btn"><i className="fas fa-search" /> <span>Search</span></button>
                        </form>
                        </div>
                        {/* /Search */}
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* /Home Banner */}
            <section className="section home-tile-section">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-9 m-auto">
                <div className="section-header text-center">
                    <h2>What are you looking for?</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                        <img src={Doctor07} alt="" className="img-fluid" />
                        <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                            <h3 className="card-title mb-0">Visit a Doctor</h3>
                            <a href="/patient/search-doctor" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Book Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                        <img src={ImgPharmacy1} alt="" className="img-fluid" />
                        <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                            <h3 className="card-title mb-0">Find a Pharmacy</h3>
                            <a href="/Pharmacy/pharmacy-search" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Find Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                        <img src={LabImage} alt="" className="img-fluid" />
                        <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                            <h3 className="card-title mb-0">Find a Lab</h3>
                            <a href="" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Coming Soon</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </section>
            <HomeClinic/>
            <BookDoctor/>
            <HomeFeatures/>
        </div>
      );
   }
}

export default Pharmacyindex;