import React, { Component } from 'react';
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import Slider from "react-slick";

import { Slider1,Slider2,Slider3 } from "./image.jsx";
import $ from 'jquery';

class HomeSlider1 extends Component{
  
    render(){   
      const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
     
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  
                }
            }
        ]
      };    
      return(
        <div className="main-wrapper">
            {/* Home Banner */}
      <section id="home" className="divider">
        <div className="container-fluid p-0">
          {/*- slider --*/}
          
           <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval={2500}> 
            <div className="carousel-inner"> 
            {/* <OwlCarousel className="owl-theme" items={1} loop={true} autoplay={true} > */}
            <Slider {...settings}>
             {/* <Carousel showArrows={false} showStatus={false} showIndicators={false} 
                showThumbs={false} autoPlay={true} infiniteLoop={true}> */}
              <div className="item">
                <img className="d-block w-100" src={Slider1} alt="First slide" />
                <div className="carousel-caption d-md-block">
                  <span>We Provide Solution</span>
                  <h2>To stressless Life</h2>
                  <p>People who are more perfectionist are most likely to be depressed,<br />Because they stress themselves out so much.</p>
                </div>
              </div>
              <div className="item">
                <img className="d-block w-100" src={Slider2} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <span>We Provide Solution</span>
                  <h2>Health Care Solution</h2>
                  <p>Every day we bring hope to millions of children in the world's<br />  hardest places as a sign of God's unconditional love.</p>
                </div>
              </div>
              <div className="item">
                <img className="d-block w-100" src={Slider3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <span>We Provide total</span>
                  <h2>Personalised care</h2>
                  <p>People who are more perfectionist are most likely to be depressed,<br />Because they stress themselves out so much.</p>
                </div>
              </div>           
              {/* </OwlCarousel>                */}
              </Slider>
               </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a> */}
          </div>
          {/*- /slider --*/}
          {/* Search */}
          <div className="banner-wrapper">
            <div className="search-box search-box-3">
              <form action="/patient/search-doctor">
                <div className="form-group search-location">
                  <input type="text" className="form-control" placeholder="Search Location" />
                </div>
                <div className="form-group search-info">
                  <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                </div>
                <button type="submit" className="btn btn-primary search-btn btn-search mt-0"><i className="fas fa-search" />  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
          {/* /Search */}
        </div>
      </section>
      {/* /Home Banner */}
          {/* Clinic and Specialities */}  
              <HomeClinic />
          {/* Clinic and Specialities */}
          {/* Category Section */}
          <BrowsebySpecialities/>
          {/* Category Section */}
          {/* Popular Section */}
          <BookourBestDoctor/>
          {/* /Popular Section */}                
          <HomeFeatures />
          <HomeBlog/>
        </div>
      );
    }
}

export default HomeSlider1;