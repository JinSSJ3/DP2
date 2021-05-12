import React from 'react';
import { Link } from 'react-router-dom';
const Terms = () => {
    return(
           <>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Terms and Conditions</h2>
						</div>
					</div>
				</div>
			</div>
		
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="terms-content">
								<div className="terms-text">
									<h3>Etiam blandit   lacus</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
									<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
								<div className="terms-text">
									<h4>Etiam sed fermentum lectus. Quisque vitae ipsum libero</h4>
									<p>Phasellus sit amet vehicula arcu. Etiam pulvinar dui libero, vitae fringilla nulla convallis in. Fusce sagittis cursus nisl, at consectetur elit vestibulum vestibulum:</p>
									<ul>
										<li>Nunc pulvinar efficitur interdum.</li>
										<li>Donec feugiat feugiat pulvinar.</li>
										<li>Suspendisse eu risus feugiat, pellentesque arcu eu, molestie lorem. </li>
										<li>Duis non leo commodo, euismod ipsum a, feugiat libero.</li>
									</ul>
								</div>
								<div className="terms-text">
									<h3>Etiam blandit   lacus</h3>
									<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
								<div className="terms-text">
									<h3>Maecenas sit amet</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>		
		</>
    );
}

export default Terms;