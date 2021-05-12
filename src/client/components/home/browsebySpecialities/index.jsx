import React, { Component } from 'react';
import { CAT01,CAT02,CAT03,CAT04,CAT05 } from './img.jsx';

class BrowsebySpecialities extends Component{
    
    render(){
       
        return(
            <section className="section section-category">
          <div className="container">
            <div className="section-header text-center">
              <h2>Browse by Specialities</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>21 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT02} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Neurology</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Orthopedic</h4>
                    <span>17 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cardiologist</h4>
                    <span>12 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT05} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Dentist</h4>
                    <span>07 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>16 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cardiologist</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Neurology</h4>
                    <span>22 Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
}
export default BrowsebySpecialities;