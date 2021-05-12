import React, { Component } from 'react';
import HomeClinic from './clinic';
import BookDoctor from './bookDoctor';
import HomeFeatures from './features';
import HomeBlog from './blog';
import Slider from "react-slick";

import { Slide1,Slide2,Doctor07,ImgPharmacy1,LabImage } from "./image.jsx";

class HomeSlider2 extends Component{
    render(){   
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
              
      return(
        <div className="main-wrapper">
             {/* Home Banner */}
      <div className="pharmacy-home-slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          <Slider {...settings}>
          <div className="swiper-slide">
              <img src={Slide1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={Slide2} alt="" />
            </div>
            </Slider>
            
          </div>
          {/* Add Arrows */}
          {/* <div className="swiper-button-next" />
          <div className="swiper-button-prev" /> */}
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Search Doctor, Make an Appointment</h1>
              <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form action="/patient/search-doctor">
                <div className="form-group search-location">
                  <input type="text" className="form-control" placeholder="Search Location" />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                  <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                </div>
                <button type="submit" className="btn btn-primary search-btn"><i className="fas fa-search" /> <span>Search</span></button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
      </div>
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
          {/* Clinic and Specialities */}  
              <HomeClinic />
          {/* Clinic and Specialities */}
          
          {/* Popular Section */}
          <BookDoctor/>
          {/* /Popular Section */}                
          <HomeFeatures />
          <HomeBlog/>
        </div>
      );
    }
}

export default HomeSlider2;