import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import StickyBox from "react-sticky-box";
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG010, IMG011} from './img';
import DoctorSidebar from '../sidebar';
class Appointments extends Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
    }

    handleClose=()=>{
        this.setState({
            show:false
        });
    }

    handleShow=()=>{
        this.setState({
            show:true
        });
    }
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
                                <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Appointments</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <div className="appointments">
                            <StickyBox offsetTop={50} offsetBottom={20}>
                                  <DoctorSidebar />
                                  </StickyBox>
							</div>
                         </div>
                         <div className="col-md-7 col-lg-8 col-xl-9">
							<div className="appointments">
                                
            <div className="appointment-list">
                <div className="profile-info-widget">
                    <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG01} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Richard Wilson</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                            <h5><i className="fas fa-envelope"></i> richard@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 923 782 4575</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                    <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG02} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Charlene Reed </Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 12 Nov 2019, 5.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> North Carolina, United States</h5>
                            <h5><i className="fas fa-envelope"></i> charlenereed@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 828 632 9170</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
           
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG03} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Travis Trimble</Link></h3>
                        
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 11 Nov 2019, 8.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Maine, United States</h5>
                            <h5><i className="fas fa-envelope"></i> travistrimble@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 207 729 9974</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
          
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG05} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Carl Kelly</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 9 Nov 2019, 9.00 AM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                            <h5><i className="fas fa-envelope"></i> carlkelly@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 260 724 7769</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG04} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Michelle Fairfax</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 9 Nov 2019, 1.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Indiana, United States</h5>
                            <h5><i className="fas fa-envelope"></i> michellefairfax@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 504 368 6874</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG05} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Gina Moore</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 8 Nov 2019, 3.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Florida, United States</h5>
                            <h5><i className="fas fa-envelope"></i> ginamoore@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 954 820 7887</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG06} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Elsie Gilley</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
                            <h5><i className="fas fa-envelope"></i> elsiegilley@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 315 384 4562</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG07} alt="User"/>
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Joan Gardner</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 5 Nov 2019, 12.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> California, United States</h5>
                            <h5><i className="fas fa-envelope"></i> joangardner@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 707 2202 603</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG08} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Daniel Griffing</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 5 Nov 2019, 7.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> New Jersey, United States</h5>
                            <h5><i className="fas fa-envelope"></i> danielgriffing@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 973 773 9497</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG07} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Walter Roberson</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 4 Nov 2019, 10.00 AM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Florida, United States</h5>
                            <h5><i className="fas fa-envelope"></i> walterroberson@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 850 358 4445</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG010} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Robert Rhodes</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 4 Nov 2019, 11.00 AM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> California, United States</h5>
                            <h5><i className="fas fa-envelope"></i> robertrhodes@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 858 259 5285</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
           
            <div className="appointment-list">
                <div className="profile-info-widget">
                <Link to="/doctor/patient-profile" className="booking-doc-img">
                        <img src={IMG011} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">Harry Williams</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> 3 Nov 2019, 6.00 PM</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> Colorado, United States</h5>
                            <h5><i className="fas fa-envelope"></i> harrywilliams@example.com</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> +1 303 607 7075</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                <Link to="#0" className="btn btn-sm bg-info-light" onClick={this.handleShow}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                    </Link>
                </div>
            </div>
        
							</div>
                          </div>  
                    </div>
               </div> 
          </div>            
    
            {/*view modal*/}
            <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                        <h5 className="modal-title">Appointment Details</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <ul className="info-details">
							<li>
								<div className="details-header">
									<div className="row">
										<div className="col-md-6">
											<span className="title">#APT0001</span>
											<span className="text">21 Oct 2019 10:00 AM</span>
										</div>
										<div className="col-md-6">
											<div className="text-right">
												<button type="button" className="btn bg-success-light btn-sm" id="topup_status">Completed</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<span className="title">Status:</span>
								<span className="text">Completed</span>
							</li>
							<li>
								<span className="title">Confirm Date:</span>
								<span className="text">29 Jun 2019</span>
							</li>
							<li>
								<span className="title">Paid Amount</span>
								<span className="text">$450</span>
							</li>
						</ul>
                        </Modal.Body>
                    </Modal>
      
        </div>
        );
    }
}
export default Appointments;