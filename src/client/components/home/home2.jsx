import React, { Component } from 'react';
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';

import { banner1 } from "./image.jsx";

class Home2 extends Component{
    render(){        
      return(
        <div className="main-wrapper">
          {/* Home Banner */}
            <section className="section section-search-2">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={banner1} className="img-fluid search-img" alt="" />
                    </div>
                    <div className="col-md-6 search-doctor">
                    <div className="search-area bg-white">
                        <h2 className="text-center">Search Doctor, Make an Appointment</h2>
                        <form className="search-input">
                        <div className="row">
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" defaultValue />
                            </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control">
                                <option>Male</option>
                                <option>Fe Male</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Department</label>
                                <select className="form-control">
                                <option>Surgen</option>
                                <option>Cardiologist</option>
                                <option>Gynacologist</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="btn btn-primary search-btn submit-btn">Search</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
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

export default Home2;