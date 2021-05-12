import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import StatusChart from './status';
import RevenueChart from './revenue';
import TableDoctor from './tableDoctor';
import TablePatientsList from './tablePatientList';
import TableAppointmentList from './appointment';

class Dashboard extends Component{
    render(){
        return(
            <>
             <SidebarNav />
            <div className="page-wrapper">
			    <div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Welcome Admin!</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item active">Dashboard</li>
								</ul>
							</div>
						</div>
					</div>
             
                   {/* breadcrumb */}

                 <div className="row">
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-primary border-primary">
											<i className="fe fe-users"></i>
										</span>
										<div className="dash-count">
											<h3>$50.00</h3>
										</div>
									</div>
									<div className="dash-widget-info">
										<h6 className="text-muted">Sales Today</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-primary w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-success">
											<i className="fe fe-credit-card"></i>
										</span>
										<div className="dash-count">
											<h3>$5.22</h3>
										</div>
									</div>
									<div className="dash-widget-info">
										
										<h6 className="text-muted">Expense Today</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-success w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-danger border-danger">
											<i className="fe fe-money"></i>
										</span>
										<div className="dash-count">
											<h3>485</h3>
										</div>
									</div>
									<div className="dash-widget-info">
										
										<h6 className="text-muted">Medicine</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-danger w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-warning border-warning">
											<i className="fe fe-folder"></i>
										</span>
										<div className="dash-count">
											<h3>50</h3>
										</div>
									</div>
									<div className="dash-widget-info">
										
										<h6 className="text-muted">Staff</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-warning w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-6">
							 {/* Sales Chart */}
							 <div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">Revenue</h4>
								</div>
								<div className="card-body">
									<RevenueChart />
								</div>
							</div>
						   {/* /Sales Chart */}
						</div>
						<div className="col-md-12 col-lg-6">
							 {/* Sales Chart */}
							 <div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">Status</h4>
								</div>
								<div className="card-body">
									<StatusChart />
								</div>
							</div>
						   {/* /Sales Chart */}
						</div>
						</div>
						<div className="row">
        <div className="col-md-12">
          {/* Latest Customers */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Latest Customers</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Telephone</th>
                      <th>Email</th>
                      <th className="text-right">Date added</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <h2 className="table-avatar">
                          Ruby Perrin
                        </h2>
                      </td>
                      <td>takrakka</td>
                      <td>
                        <h2 className="table-avatar">
                          +54 1245463984
                        </h2>
                      </td>
                      <td>Rubyperring@yahoo.mail</td>
                      <td className="text-right">April 14, 2020</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>
                        <h2 className="table-avatar">
                          Darren Elder
                        </h2>
                      </td>
                      <td>339, Terromont Street</td>
                      <td>
                        <h2 className="table-avatar">
                          +54 874654536
                        </h2>
                      </td>
                      <td>darrenelder@gmail.com</td>
                      <td className="text-right">April 15, 2020</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>
                        <h2 className="table-avatar">
                          Deborah Angel
                        </h2>
                      </td>
                      <td>takrakka</td>
                      <td>
                        <h2 className="table-avatar">
                          +54 3647787889
                        </h2>
                      </td>
                      <td>deborahangel@yahoo.com</td>
                      <td className="text-right">April 16, 2020</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>
                        <h2 className="table-avatar">
                          Ruby Perrin
                        </h2>
                      </td>
                      <td>2061 Angus Road</td>
                      <td>
                        <h2 className="table-avatar">
                          +54 1245463984
                        </h2>
                      </td>
                      <td>Rubyperring@yahoo.mail</td>
                      <td className="text-right">April 17, 2020</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>
                        <h2 className="table-avatar">
                          Krystyna Rodriquez
                        </h2>
                      </td>
                      <td>takrakka</td>
                      <td>
                        <h2 className="table-avatar">
                          +54 8965722222
                        </h2>
                      </td>
                      <td>krystynarodriquez@gmail.com</td>
                      <td className="text-right">April 18, 2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Latest Customers */}
        </div>
      </div>	
			     </div> 
             </div>
             </>         
        )
     }
  }
  
 export default Dashboard; 