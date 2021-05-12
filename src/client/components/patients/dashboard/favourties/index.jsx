import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../sidebar/sidebar.jsx';
import StickyBox from "react-sticky-box";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG09} from './img';
class Favourites extends Component{
    render(){
        return(
            <div>
			 <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Favourites</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Favourites</h2>
						</div>
					</div>
				</div>
			</div>
            <div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<StickyBox offsetTop={20} offsetBottom={20}>
								<DashboardSidebar />
								</StickyBox>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row row-grid">
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG01} />
											</Link>
											<a  href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. Ruby Perrin</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<span className="d-inline-block average-rating">(17)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Florida, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
										<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG02} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. Darren Elder</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Newyork, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
													</div>
											 </div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
										<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG03} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. Deborah Angel</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(27)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
										<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG04} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. Sofia Brient</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(4)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Louisiana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>

											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
										<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG05} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. Marvin Campbell</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(66)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Michigan, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $50 - $700 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>

											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG06} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Katharine Berthold</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(52)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Texas, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $500 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="/patient/doctor-profile" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="/patient/booking" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG07} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Linda Tobin</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(43)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Kansas, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $1000 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="/patient/doctor-profile" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="/patient/booking" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG08} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Paul Richard</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(49)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> California, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $400 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG09} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. John Gibbs</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(112)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $500 - $2500 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG01}/>
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Olga Barlow</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(65)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Montana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $75 - $250 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG02} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Julia Washington</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DM - Endocrinology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $275 - $450 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/patient/doctor-profile">
												<img className="img-fluid" alt="User" src={IMG03} />
											</Link>
											<a href="#0" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<Link to="/patient/doctor-profile">Dr. Shaun Aponte</Link> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Indiana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $150 - $350 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
											<div className="col-6">
													<Link to="doctor-profile" className="btn view-btn">View Profile</Link>
												</div>
												<div className="col-6">
													<Link to="booking" className="btn book-btn">Book Now</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
				</div>

			</div>		
            </div>
        );
    }
}

export default Favourites;