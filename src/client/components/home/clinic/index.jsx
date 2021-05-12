import React, { Component } from 'react';
import { IMG01, IMG02, IMG03, IMG04, IMG05 } from './img.jsx';
//slider
import Slider from "react-slick";

class HomeClinic extends Component{
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
            <>
            <section className="section section-specialities">
    <div className="container-fluid">
        <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-9">
         
                <div className="specialities-slider slider">
                <Slider {...settings}>
            <div>
            <div className="speicality-item text-center">
                        <div className="speicality-img">
                            <img src={IMG01} className="img-fluid" alt="Speciality" />
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                        </div>
                        <p>Urology</p>
                    </div>	
            </div>
            <div>
            <div className="speicality-item text-center">
                        <div className="speicality-img">
                            <img src={IMG02} className="img-fluid" alt="Speciality" />
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                        </div>
                        <p>Neurology</p>	
                    </div>	
            </div>
            <div>
            <div className="speicality-item text-center">
                        <div className="speicality-img">
                            <img src={IMG03} className="img-fluid" alt="Speciality" />
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                        </div>	
                        <p>Orthopedic</p>	
                    </div>	
            </div>
            <div>
            <div className="speicality-item text-center">
                        <div className="speicality-img">
                            <img src={IMG04} className="img-fluid" alt="Speciality" />
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                        </div>	
                        <p>Cardiologist</p>	
                    </div>			
            </div>
            <div>
            <div className="speicality-item text-center">
                        <div className="speicality-img">
                            <img src={IMG05} className="img-fluid" alt="Speciality" />
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                        </div>	
                        <p>Dentist</p>
                    </div>	
            </div>
            <div>
                <div className="speicality-item text-center">
                            <div className="speicality-img">
                                <img src={IMG01} className="img-fluid" alt="Speciality" />
                                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Urology</p>
                        </div>	
           
            </div>
          </Slider>
                </div>    
            </div>
        </div>
    </div>   
</section>
</>	 
        );
    }
}

export default HomeClinic;