import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return(
        <div className="main-wrapper">
			
			<div className="error-box">
				<h1>500</h1>
				<h3 className="h2 mb-3"><i className="fa fa-warning"></i> Oops! Something went wrong</h3>
				<p className="h4 font-weight-normal">The page you requested was not found.</p>
				<Link to="/admin" className="btn btn-primary">Back to Home</Link>
			</div>
		
        </div>
    );
}
export default ErrorPage;
