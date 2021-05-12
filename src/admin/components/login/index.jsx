import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-white.png';

class Login extends Component{
    render(){
        return(
            <div>
                  <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left">
							<img className="img-fluid" src={Logo} alt="Logo"/>
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<h1>Login</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								 
								<form action="/admin/">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email" />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password" />
									</div>
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Login</button>
									</div>
								</form>
							 
								
								<div className="text-center forgotpass"><Link to="/admin/forgotPassword">Forgot Password?</Link></div>
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								  
							 
								<div className="social-login">
									<span>Login with</span>
									<a href="#0" className="facebook"><i className="fab fa-facebook-f"></i></a>
									<a href="#0" className="google"><i className="fab fa-google"></i></a>
								</div>
								 
								
								<div className="text-center dont-have">Don’t have an account? <Link to="/admin/register">Register</Link></div>
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

export default Login;