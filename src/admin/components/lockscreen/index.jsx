import React, { Component } from 'react';
import IMG01 from '../../assets/images/logo.png'; 
import IMG02 from '../../assets/images/patient.jpg'; 
import { Link } from 'react-router-dom';

class Lockscreen extends Component{
    render(){
        return(
            <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left">
						     <img className="img-fluid" src={IMG01} alt="Logo" />
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<div className="lock-user">
								<img className="rounded-circle" src={IMG02} alt="User" />
									<h4>John Doe</h4>
								</div>
								
								
								<form action="/admin/">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password" />
									</div>
									<div className="form-group mb-0">
										<button className="btn btn-primary btn-block" type="submit">Enter</button>
									</div>
								</form>
							
								
								<div className="text-center dont-have">Sign in as a different user? <Link to="/admin/login">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Lockscreen;       