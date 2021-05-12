import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { Tabs, Tab } from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';

import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from './img';

import img1 from "../../../assets/images/feature-01.jpg";
import img2 from "../../../assets/images/feature-02.jpg";
import img3 from "../../../assets/images/feature-03.jpg";
import img4 from "../../../assets/images/feature-04.jpg";

const images = [img1, img2, img3, img4];
class DoctorProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoIndex: 0,
            isOpen: false,
			key: 1,
			activeModal: null

		}
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(key) {

		this.setState({ key })
	}

	openModal= (id)=> {
	  this.setState({activeModal: id}, () => {
	
		  }); 
	}
	handleCloseModal = () => {
		this.setState({activeModal: false}, () => {
		
		  }); 
	  };
	render() {
		const { photoIndex, isOpen } = this.state;
		return (

			<div>

				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Doctor Profile</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Doctor Profile</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="content">
					<div className="container">


						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<img src={IMG01} className="img-fluid" alt="User" />
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name">Dr. Darren Elder</h4>
											<p className="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
											<p className="doc-department"><img src={IMG02} className="img-fluid" alt="Speciality" />Dentist</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location">
													<i className="fas fa-map-marker-alt"></i> Newyork, USA - <a href="#0">
														Get Directions</a></p>
														<div>
       
												{isOpen && (
													<Lightbox
													enableZoom={false}
													mainSrc={images[photoIndex]}
													nextSrc={images[(photoIndex + 1) % images.length]}
													prevSrc={images[(photoIndex + images.length - 1) % images.length]}
													imageTitle={photoIndex + 1 + "/" + images.length}
													
													onCloseRequest={() => this.setState({ isOpen: false })}
													onMovePrevRequest={() =>
														this.setState({
														photoIndex: (photoIndex + images.length - 1) % images.length
														})
													}
													onMoveNextRequest={() =>
														this.setState({
														photoIndex: (photoIndex + 1) % images.length
														})
													}
													/>
													)}
												</div> 
												<ul className="clinic-gallery">
													<li>
													<a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
															<img src={IMG03} alt="Feature" />
														</a>
													</li>
													<li>
													<a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
															<img src={IMG04} alt="Feature" />
														</a>
													</li>
													<li>
													<a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
															<img src={IMG05} alt="Feature" />
														</a>
													</li>
													<li>
													<a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
															<img src={IMG06} alt="Feature" />
														</a>
													</li>
												</ul>
											</div>
											<div className="clinic-services">
												<span>Dental Fillings</span>
												<span>Teeth Whitneing</span>
											</div>
										</div>
									</div>
									<div className="doc-info-right">
										<div className="clini-infos">
											<ul>
												<li><i className="far fa-thumbs-up"></i> 99%</li>
												<li><i className="far fa-comment"></i> 35 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $100 per hour </li>
											</ul>
										</div>
										<div className="doctor-action">
											<a href="#0" className="btn btn-white fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
											<Link to="/doctor/chat-doctor" className="btn btn-white msg-btn">
												<i className="far fa-comment-alt"></i>
											</Link>
											<a href="#0"
											className="btn btn-white call-btn"
											 data-toggle="modal"
											 onClick={()=>this.openModal('voice')}
											>
												<i className="fas fa-phone"></i>    
											</a>
											<a href="#0"
											 className="btn btn-white call-btn"
											  data-toggle="modal"
											   
											   onClick={()=>this.openModal('video')}
											   >
												<i className="fas fa-video"></i>
											</a>
										</div>
										<div className="clinic-booking">
											<Link to="/patient/booking" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-body pt-0">
								<Tabs
									className="tab-view"
									activeKey={this.state.key}
									onSelect={this.handleSelect}
									id="controlled-tab-example"
								>
									<Tab className="nav-item" eventKey={1} title="Overview">
										<div className="row">
											<div className="col-md-12 col-lg-9">


												<div className="widget about-widget">
													<h4 className="widget-title">About Me</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>

												<div className="widget education-widget">
													<h4 className="widget-title">Education</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<a href="#/" className="name">American Dental Medical University</a>
																		<div>BDS</div>
																		<span className="time">1998 - 2003</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<a href="#/" className="name">American Dental Medical University</a>
																		<div>MDS</div>
																		<span className="time">2003 - 2005</span>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>

												<div className="widget experience-widget">
													<h4 className="widget-title">Work & Experience</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<a href="#/" className="name">Glowing Smiles Family Dental Clinic</a>
																		<span className="time">2010 - Present (5 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<a href="#/" className="name">Comfort Care Dental Clinic</a>
																		<span className="time">2007 - 2010 (3 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<a href="#/" className="name">Dream Smile Dental Practice</a>
																		<span className="time">2005 - 2007 (2 years)</span>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>

												<div className="widget awards-widget">
													<h4 className="widget-title">Awards</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">July 2019</p>
																		<h4 className="exp-title">Humanitarian Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">March 2011</p>
																		<h4 className="exp-title">Certificate For International Volunteer Service</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">May 2008</p>
																		<h4 className="exp-title">The Dental Professional of The Year Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>

												<div className="service-list">
													<h4>Services</h4>
													<ul className="clearfix">
														<li>Tooth cleaning </li>
														<li>Root Canal Therapy</li>
														<li>Implants</li>
														<li>Composite Bonding</li>
														<li>Fissure Sealants</li>
														<li>Surgical Extractions</li>
													</ul>
												</div>

												<div className="service-list">
													<h4>Specializations</h4>
													<ul className="clearfix">
														<li>Children Care</li>
														<li>Dental Care</li>
														<li>Oral and Maxillofacial Surgery </li>
														<li>Orthodontist</li>
														<li>Periodontist</li>
														<li>Prosthodontics</li>
													</ul>
												</div>


											</div>
										</div>
									</Tab>
									<Tab className="nav-item" eventKey={2} title="Locations">
										<div>
											<div className="location-list">
												<div className="row">


													<div className="col-md-6">
														<div className="clinic-content">
															<h4 className="clinic-name"><a href="#0">Smile Cute Dental Care Center</a></h4>
															<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
															<div className="rating">
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star"></i>
																<span className="d-inline-block average-rating">(4)</span>
															</div>
															<div className="clinic-details mb-0">
																<h5 className="clinic-direction">
																	<i className="fas fa-map-marker-alt"></i> 2286  Sundown Lane, Austin, Texas 78749,
                                                        USA <a href="#0">Get Directions</a></h5>
														<div>
       
	   {isOpen && (
		   <Lightbox
		   enableZoom={false}
		   mainSrc={images[photoIndex]}
		   nextSrc={images[(photoIndex + 1) % images.length]}
		   prevSrc={images[(photoIndex + images.length - 1) % images.length]}
		   imageTitle={photoIndex + 1 + "/" + images.length}
		   
		   onCloseRequest={() => this.setState({ isOpen: false })}
		   onMovePrevRequest={() =>
			   this.setState({
			   photoIndex: (photoIndex + images.length - 1) % images.length
			   })
		   }
		   onMoveNextRequest={() =>
			   this.setState({
			   photoIndex: (photoIndex + 1) % images.length
			   })
		   }
		   />
		   )}
	   </div> 
	   <ul className="clinic-gallery">
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
				   <img src={IMG03} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
				   <img src={IMG04} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0"onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
				   <img src={IMG05} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
				   <img src={IMG06} alt="Feature" />
			   </a>
		   </li>
	   </ul>
															</div>
														</div>
													</div>

													<div className="col-md-4">
														<div className="clinic-timing">
															<div>
																<p className="timings-days">
																	<span> Mon - Sat </span>
																</p>
																<p className="timings-times">
																	<span>10:00 AM - 2:00 PM</span>
																	<span>4:00 PM - 9:00 PM</span>
																</p>
															</div>
															<div>
																<p className="timings-days">
																	<span>Sun</span>
																</p>
																<p className="timings-times">
																	<span>10:00 AM - 2:00 PM</span>
																</p>
															</div>
														</div>
													</div>

													<div className="col-md-2">
														<div className="consult-price">
															$250
												</div>
													</div>
												</div>
											</div>

											<div className="location-list">
												<div className="row">

													<div className="col-md-6">
														<div className="clinic-content">
															<h4 className="clinic-name"><a href="#0">The Family Dentistry Clinic</a></h4>
															<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
															<div className="rating">
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star"></i>
																<span className="d-inline-block average-rating">(4)</span>
															</div>
															<div className="clinic-details mb-0">
																<p className="clinic-direction"> <i className="fas fa-map-marker-alt"></i>
                                                         2883  University Street, Seattle, Texas Washington, 98155<a href="#0">Get Directions</a></p>
														 <div>
       
	   {isOpen && (
		   <Lightbox
		   enableZoom={false}
		   mainSrc={images[photoIndex]}
		   nextSrc={images[(photoIndex + 1) % images.length]}
		   prevSrc={images[(photoIndex + images.length - 1) % images.length]}
		   imageTitle={photoIndex + 1 + "/" + images.length}
		   
		   onCloseRequest={() => this.setState({ isOpen: false })}
		   onMovePrevRequest={() =>
			   this.setState({
			   photoIndex: (photoIndex + images.length - 1) % images.length
			   })
		   }
		   onMoveNextRequest={() =>
			   this.setState({
			   photoIndex: (photoIndex + 1) % images.length
			   })
		   }
		   />
		   )}
	   </div> 
	   <ul className="clinic-gallery">
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
				   <img src={IMG03} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
				   <img src={IMG04} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
				   <img src={IMG05} alt="Feature" />
			   </a>
		   </li>
		   <li>
		   <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
				   <img src={IMG06} alt="Feature" />
			   </a>
		   </li>
	   </ul>
															</div>

														</div>
													</div>

													<div className="col-md-4">
														<div className="clinic-timing">
															<div>
																<p className="timings-days">
																	<span> Tue - Fri </span>
																</p>
																<p className="timings-times">
																	<span>11:00 AM - 1:00 PM</span>
																	<span>6:00 PM - 11:00 PM</span>
																</p>
															</div>
															<div>
																<p className="timings-days">
																	<span>Sat - Sun</span>
																</p>
																<p className="timings-times">
																	<span>8:00 AM - 10:00 AM</span>
																	<span>3:00 PM - 7:00 PM</span>
																</p>
															</div>
														</div>
													</div>


													<div className="col-md-2">
														<div className="consult-price">
															$350
												</div>
													</div>
												</div>
											</div>

										</div>

									</Tab>
									<Tab className="nav-item" eventKey={3} title="Reviews">
										<div>
											<div className="widget review-listing">
												<ul className="comments-list">

													<li>
														<div className="comment">
															<img className="avatar avatar-sm rounded-circle" alt="User" src={IMG07} />
															<div className="comment-body">
																<div className="meta-data">
																	<span className="comment-author">Richard Wilson</span>
																	<span className="comment-date">Reviewed 2 Days ago</span>
																	<div className="review-count rating">
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star"></i>
																	</div>
																</div>
																<p className="recommended"><i className="far fa-thumbs-up"></i> I recommend the doctor</p>
																<p className="comment-content">
																	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																	Ut enim ad minim veniam, quis nostrud exercitation.
																	Curabitur non nulla sit amet nisl tempus
														</p>
																<div className="comment-reply">
																	<a className="comment-btn" href="#0">
																		<i className="fas fa-reply"></i> Reply
															</a>
																	<p className="recommend-btn">
																		<span>Recommend?</span>
																		<a href="#0" className="like-btn">
																			<i className="far fa-thumbs-up"></i> Yes
															</a>
																		<a href="#0" className="dislike-btn">
																			<i className="far fa-thumbs-down"></i> No
															</a>
																	</p>
																</div>
															</div>
														</div>


														<ul className="comments-reply">
															<li>
																<div className="comment">
																	<img className="avatar avatar-sm rounded-circle" alt="User" src={IMG08} />
																	<div className="comment-body">
																		<div className="meta-data">
																			<span className="comment-author">Charlene Reed</span>
																			<span className="comment-date">Reviewed 3 Days ago</span>
																			<div className="review-count rating">
																				<i className="fas fa-star filled"></i>
																				<i className="fas fa-star filled"></i>
																				<i className="fas fa-star filled"></i>
																				<i className="fas fa-star filled"></i>
																				<i className="fas fa-star"></i>
																			</div>
																		</div>
																		<p className="comment-content">
																			Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																			Ut enim ad minim veniam.
																			Curabitur non nulla sit amet nisl tempus
																</p>
																		<div className="comment-reply">
																			<a className="comment-btn" href="#0">
																				<i className="fas fa-reply"></i> Reply
																	</a>
																			<p className="recommend-btn">
																				<span>Recommend?</span>
																				<a href="#0" className="like-btn">
																					<i className="far fa-thumbs-up"></i> Yes
																		</a>
																				<a href="#0" className="dislike-btn">
																					<i className="far fa-thumbs-down"></i> No
																		</a>
																			</p>
																		</div>
																	</div>
																</div>
															</li>
														</ul>


													</li>

													<li>
														<div className="comment">
															<img className="avatar avatar-sm rounded-circle" alt="User" src={IMG07} />
															<div className="comment-body">
																<div className="meta-data">
																	<span className="comment-author">Travis Trimble</span>
																	<span className="comment-date">Reviewed 4 Days ago</span>
																	<div className="review-count rating">
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star filled"></i>
																		<i className="fas fa-star"></i>
																	</div>
																</div>
																<p className="comment-content">
																	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																	Ut enim ad minim veniam, quis nostrud exercitation.
																	Curabitur non nulla sit amet nisl tempus
														</p>
																<div className="comment-reply">
																	<a className="comment-btn" href="#0">
																		<i className="fas fa-reply"></i> Reply
															</a>
																	<p className="recommend-btn">
																		<span>Recommend?</span>
																		<a href="#0" className="like-btn">
																			<i className="far fa-thumbs-up"></i> Yes
																</a>
																		<a href="#0" className="dislike-btn">
																			<i className="far fa-thumbs-down"></i> No
																</a>
																	</p>
																</div>
															</div>
														</div>
													</li>


												</ul>

												<div className="all-feedback text-center">
													<a href="#0" className="btn btn-primary btn-sm">
														Show all feedback <strong>(167)</strong>
													</a>
												</div>


											</div>

											<div className="write-review">
												<h4>Write a review <strong>Dr. Darren Elder</strong></h4>

												<form>
													<div className="form-group">
														<label>Review</label>
														<div className="star-rating">
															<input id="star-5" type="radio" name="rating" value="star-5" />
															<label htmlFor="star-5" title="5 stars">
																<i className="active fa fa-star"></i>
															</label>
															<input id="star-4" type="radio" name="rating" value="star-4" />
															<label htmlFor="star-4" title="4 stars">
																<i className="active fa fa-star"></i>
															</label>
															<input id="star-3" type="radio" name="rating" value="star-3" />
															<label htmlFor="star-3" title="3 stars">
																<i className="active fa fa-star"></i>
															</label>
															<input id="star-2" type="radio" name="rating" value="star-2" />
															<label htmlFor="star-2" title="2 stars">
																<i className="active fa fa-star"></i>
															</label>
															<input id="star-1" type="radio" name="rating" value="star-1" />
															<label htmlFor="star-1" title="1 star">
																<i className="active fa fa-star"></i>
															</label>
														</div>
													</div>
													<div className="form-group">
														<label>Title of your review</label>
														<input className="form-control" type="text"
															placeholder="If you could say it in one sentence, what would you say?" />
													</div>
													<div className="form-group">
														<label>Your review</label>
														<textarea id="review_desc" maxLength="100" className="form-control"></textarea>

														<div className="d-flex justify-content-between mt-3">
															<small className="text-muted"><span id="chars">100</span> characters remaining</small></div>
													</div>

													<div className="form-group">
														<div className="terms-accept">
															<div className="custom-checkbox">
																<input type="checkbox" id="terms_accept" />
																<label htmlFor="terms_accept">I have read and accept
                                                        <a href="#0">Terms &amp; Conditions</a></label>
															</div>
														</div>
													</div>
													<div className="submit-section">
														<button type="submit" className="btn btn-primary submit-btn">Add Review</button>
													</div>
												</form>

											</div>
										</div>
									</Tab>
									<Tab className="nav-item" eventKey={4} title="Business Hours">
										<div className="row">
											<div className="col-md-6 offset-md-3">

												<div className="widget business-widget">
													<div className="widget-content">
														<div className="listing-hours">
															<div className="listing-day current">
																<div className="day">Today <span>5 Nov 2019</span></div>
																<div className="time-items">
																	<span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Monday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Tuesday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Wednesday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thursday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Friday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Saturday</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day closed">
																<div className="day">Sunday</div>
																<div className="time-items">
																	<span className="time"><span className="badge bg-danger-light">Closed</span></span>
																</div>
															</div>
														</div>
													</div>
												</div>


											</div>
										</div>
									</Tab>
								</Tabs>

							</div>
						</div>

					</div>
				</div>
				{/* modal hmlFor video*/}
					<Modal show={this.state.activeModal === 'video'} onHide={this.handleCloseModal} centered>
					<Modal.Body>	
						<div className="call-box incoming-box">
							<div className="call-wrapper">
								<div className="call-inner">
									<div className="call-user">
										<img alt="User" src={IMG01} className="call-avatar" />
										<h4>Dr. Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div className="call-items">
										<a href="#0" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
										<Icon>call_end</Icon>
										</a>
										<Link to="/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
									</div>
								</div>
							</div>
						</div>
						</Modal.Body>
				</Modal>
				{/* modal hmlFor call*/}
				<Modal show={this.state.activeModal === 'voice'} onHide={this.handleCloseModal} centered>
					<Modal.Body>	
						<div className="call-box incoming-box">
							<div className="call-wrapper">
								<div className="call-inner">
									<div className="call-user">
										<img alt="User" src={IMG01} className="call-avatar" />
										<h4>Dr. Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div className="call-items">
										<a href="#0" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
										<Icon>call_end</Icon>
										</a>
										<Link to="/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
									</div>
								</div>
							</div>
						</div>
						</Modal.Body>
				</Modal>
					
			</div>

		);

	}
}

export default DoctorProfile;