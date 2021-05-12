import React from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../../assets/images/patient.jpg';
export const DashboardSidebar = () => {
    return(
            	<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#0" className="booking-doc-img">
											<img src={IMG01} alt="User" />
										</a>
										<div className="profile-det-info">
											<h3>Richard Wilson</h3>
											<div className="patient-details">
												<h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
									<nav className="dashboard-menu">
										<ul>
											<li className="active">
												<Link to="/patient/dashboard">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</Link>
											</li>
											<li>
												<Link to="/patient/favourites">
													<i className="fas fa-bookmark"></i>
													<span>Favourites</span>
												</Link>
											</li>
											<li>
												<Link to="/doctor/chat-doctor">
													<i className="fas fa-comments"></i>
													<span>Message</span>
													<small className="unread-msg">23</small>
												</Link>
											</li>
											<li>
												<Link to="/patient/profile">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</Link>
											</li>
											<li>
												<Link to="/patient/change-password">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</Link>
											</li>
										</ul>
									</nav>
								</div>

							</div>
    );
}
export default DashboardSidebar;