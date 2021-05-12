import React, { Component } from 'react';
import loginBanner from '../../../assets/images/login-banner.png';
import { Link } from 'react-router-dom';

class DoctorRegister extends Component {
    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'account-page';
    }
    
    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
    }
    render(){
        return(
                	<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8 offset-md-2">
						
						
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										<img src={loginBanner} className="img-fluid" alt="Login Banner" />	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Doctor Register <Link to="/register">Not a Doctor?</Link></h3>
										</div>
										
									
										<form action="/doctor/doctor-dashboard">
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" />
												<label className="focus-label">Name</label>
											</div>
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" />
												<label className="focus-label">Mobile Number</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" />
												<label className="focus-label">Create Password</label>
											</div>
											<div className="text-right">
												<Link to="/login" className="forgot-link">Already have an account?</Link>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">or</span>
											</div>
											<div className="row form-row social-login">
												<div className="col-6">
													<a href="#0" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Login</a>
												</div>
												<div className="col-6">
													<a href="#0" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
												</div>
											</div>
										</form>
									
										
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

export default DoctorRegister;