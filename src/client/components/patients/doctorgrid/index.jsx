import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG09, IMG10, IMG11, IMG12} from './img';
import Map from "./map";

const data = [{
    id:1,
      doc_name:"Ruby Perrin",
      "speciality":"Digital Marketer",
      "address":"Florida, USA",
      "next_available":"Available on Fri, 22 Mar",
      "amount":"$300 - $1000",
      lat:-33.847927,
      lng:150.6517938,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"17",
      "image":IMG01
    },
     {
          
      id:2,
      doc_name:"Darren Elder",
      "speciality":"Digital Marketer",
      "address":"Newyork, USA",
      "next_available":"Available on Fri, 23 Mar",
      "amount":"$50 - $300",
      lat:-37.9722342,
      lng:144.7729561,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"35",
      "image":IMG02
      }, {
      id:3,
      doc_name:"Deborah Angel",
      "speciality":"UNIX, Calculus, Trigonometry",
      "address":"Georgia, USA",
      "next_available":"Available on Fri, 24 Mar",
      "amount":"$100 - $400",
      lat:-31.9546904,
      lng:112.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"27",
      "image":IMG03
      }, {
      id:4,
      doc_name:"Sofia Brient",
      "speciality":"Computer Programming",
      "address":"Louisiana, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$150 - $250",
      lat:-32.9546904,
      lng:115.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"4",
      "image":IMG04
      }, {
      id:5,
      doc_name:"Marvin Campbell",
      "speciality":"ASP.NET,Computer Gaming",
      "address":"Michigan, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$50 - $700",
      lat:-34.9546904,
      lng:125.8650292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"66",
       "image":IMG05
      }, {
      id:6,
      doc_name:"Katharine Berthold",
      "speciality":"Digital Marketer",
      "address":"Texas, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$100 - $500",
      lat:-35.9546904,
      lng:153.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"52",
       "image":IMG06
      }, {
      id:7,
      doc_name:"Linda Tobin",
      "speciality":"UNIX, Calculus, Trigonometry",
      "address":"Kansas, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$100 - $1000",
      lat:-36.9548904,
      lng:105.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"43",
       "image":IMG07
      }, {
      id:8,
      doc_name:"Paul Richard",
      "speciality":"Computer Programming",
      "address":"California, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$100 - $400",
      lat:-38.9556904,
      lng:110.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"49",
      "image":IMG08
      }, {
      id:9,
      doc_name:"John Gibbs",
      "speciality":"ASP.NET,Computer Gaming",
      "address":"Oklahoma, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$500 - $2500",
      lat:-33.2191198,
      lng:120.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"112",
      "image":IMG09
      }, {
      id:10,
      doc_name:"Olga Barlow",
      "speciality":"Periodontology and Oral",
      "address":"Montana, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$75 - $250",
      lat:-37.1382198,
      lng:115.9359404,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"65",
      "image":IMG10
      }, {
      id:11,
      doc_name:"Julia Washington",
      "speciality":"Endocrinology",
      "address":"Oklahoma, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$275 - $450",
      lat:-31.1546904,
      lng:145.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"5",
      "image":IMG11
      }, {
      id:12,
      doc_name:"Shaun Aponte",
      "speciality":"Diploma in (DLO)",
      "address":"Indiana, USA",
      "next_available":"Available on Fri, 25 Mar",
      "amount":"$150 - $350",
      lat:-35.1586194,
      lng:155.8350292,
      "icons":"default",
      "profile_link":"profile.html",
      "total_review":"5",
      "image":IMG12
      }
  ];

class DoctorGrid extends Component{

    componentDidMount(){
        document.body.classList.add('map-page');
    }
    componentWillUnmount(){
        document.body.classList.remove('map-page');
    }
    render(){
        const options = [
			{ value: 'Select', label: 'Select' },
			{ value: 'Rating', label: 'Rating' },
			{ value: 'Popular', label: 'Popular' },
			{ value: 'Lastest', label: 'Lastest' },
			{ value: 'Free', label: 'Free' },
		] 
        return(
            <div className="content doctor-grid">
            <div className="container-fluid">
        
            <div className="row">
                <div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
            
                    <div className="row align-items-center mb-4">
                        <div className="col-md-6 col">
                            <h4>2245 Doctors found</h4>
                        </div>
        
                        <div className="col-md-6 col-auto">
                            <div className="view-icons ">
                                <Link to="/patient/doctor-grid" className="grid-view active"><i className="fas fa-th-large"></i></Link>
                                <Link to="/patient/doctor-list" className="list-view"><i className="fas fa-bars"></i></Link>
                            </div>
                            <div className="sort-by d-sm-block d-none">
                                <span className="sortby-fliter">
                                <Select options={options}/>   
                                </span>
                            </div>
                        </div>
                    </div>
        
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG01} />
                                        </Link>
                                        <a href="#0" className="fav-btn">
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
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG02} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG03} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG04} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG05} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User "  src={IMG06}/>
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG07} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG08} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG09} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG10}/>
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG11} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-md-4 col-xl-6">
                                <div className="profile-widget">
                                    <div className="doc-img">
                                        <Link to="/patient/doctor-profile">
                                            <img className="img-fluid" alt="User " src={IMG12} />
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
                                                <Link to="/patient/doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                <div className="load-more text-center">
                    <a className="btn btn-primary btn-sm" href="#0;">Load More</a>	
                </div>
            </div>
        
            <div className="col-xl-6 col-lg-12 map-right">
            <div id="map" className="map-listing">
            <div style={{ height: '100vh', width: '100%' }}>
            <Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
             </div>
             </div>
            </div>
        
          </div>
        
        
        </div>
        
     </div>
     	
        );
    }
}

export default DoctorGrid;