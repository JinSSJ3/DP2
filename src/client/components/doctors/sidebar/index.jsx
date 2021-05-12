import React,{ Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';
class DoctorSidebar extends Component{
    render(){
        return(
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                            <img src={IMG01} alt="User" />
                        </Link>
                        <div className="profile-det-info">
                            <h3>Dr. Darren Elder</h3>
                            
                            <div className="patient-details">
                                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                   
                        
                    <Nav className="dashboard-menu">

                        <Nav.Item> 
                             <NavLink to="/doctor/doctor-dashboard"> 
                                <i className="fas fa-columns"></i>
                                    <span>Dashboard</span>
                             </NavLink>
                         </Nav.Item>
                         
                         <Nav.Item> 
                            <NavLink to="/doctor/appointments"  activeClassName="active">
                             <i className="fas fa-calendar-check"></i>
                                    <span>Appointments</span> 
                            </NavLink>
                        </Nav.Item> 

                            <Nav.Item> 
                              <NavLink to="/doctor/my-patients">
                                <i className="fas fa-user-injured"></i>
                                        <span>My Patients</span>
                                </NavLink>
                            </Nav.Item> 
                            <Nav.Item> 
                                <NavLink to="/doctor/schedule-timing">
                                <i className="fas fa-hourglass-start"></i>
                                        <span>Schedule Timings</span>
                                </NavLink>
                              </Nav.Item> 
                              <Nav.Item> 
                                <NavLink to="/doctor/invoice">
                                        <i className="fas fa-file-invoice"></i>
                                        <span>Invoices</span>
                                </NavLink>
                               </Nav.Item> 
                               <Nav.Item> 
                                <NavLink to="/doctor/review">
                                    <i className="fas fa-star"></i>
                                    <span>Reviews</span>
                                </NavLink>
                                </Nav.Item> 
                                <Nav.Item> 
                            <NavLink to="/doctor/chat-doctor">
                                <i className="fas fa-comments"></i>
                                        <span>Message</span>
                                        <small className="unread-msg">23</small>
                            </NavLink>
                            </Nav.Item>  
                            <Nav.Item> 
                            <NavLink to="/doctor/profile-setting">
                                <i className="fas fa-user-cog"></i>
                                    <span>Profile Settings</span>
                            </NavLink> 
                            </Nav.Item> 
                            <Nav.Item> 
                            <NavLink to="/social-media">
                               <i className="fas fa-share-alt"></i>
                                    <span>Social Media</span>
                            </NavLink>   
                            </Nav.Item> 
                            <Nav.Item> 
                            <NavLink to="/doctor-change-passwword">
                                   <i className="fas fa-lock"></i>
                                    <span>Change Password</span>
                            </NavLink>
                            </Nav.Item> 
                            <Nav.Item> 
                              <NavLink to="/home" activeClassName="active">
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Logout</span>
                              </NavLink>
                              </Nav.Item> 
                              </Nav> 
                  
                </div>
            </div>
        );
    }
}
export default DoctorSidebar;
   