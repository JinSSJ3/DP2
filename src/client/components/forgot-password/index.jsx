import React, { Component } from 'react';
import loginBanner from '../../assets/images/login-banner.png';
import { Link } from 'react-router-dom';

class ForgotPassword  extends Component {  


	componentDidMount(){
		document.body.classList.add('account-page');
	}
	componentWillUnmount(){
		document.body.classList.remove('account-page');
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
											<h3>Forgot Password?</h3>
											<p className="small text-muted">Enter your email to get a password reset link</p>
										</div>
									
										<form action="/admin/login">
											<div className="form-group form-focus">
												<input type="email" className="form-control floating" />
												<label className="focus-label">Email</label>
											</div>
											<div className="text-right">
												<Link to="/login" className="forgot-link">Remember your password? </Link>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
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

export default ForgotPassword;