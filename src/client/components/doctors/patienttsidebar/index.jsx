import React,{ Component } from 'react';
import IMG01 from '../../../assets/images/patient1.jpg';

import { Link } from 'react-router-dom';
class PatientSidebar extends Component{
    render(){
        return(
            
               	            <div className="card widget-profile pat-widget-profile">
								<div className="card-body">
									<div className="pro-widget-content">
										<div className="profile-info-widget">
											<Link to="#0" className="booking-doc-img">
												<img src={IMG01} alt="User" />
											</Link>
											<div className="profile-det-info">
												<h3>Richard Wilson</h3>
												
												<div className="patient-details">
													<h5><b>Patient ID :</b> PT0016</h5>
													<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
												</div>
											</div>
										</div>
									</div>
									<div className="patient-info">
										<ul>
											<li>Phone <span>+1 952 001 8563</span></li>
											<li>Age <span>38 Years, Male</span></li>
											<li>Blood Group <span>AB+</span></li>
										</ul>
									</div>
								</div>
							</div>
			
        );
    }
}
export default PatientSidebar;
   