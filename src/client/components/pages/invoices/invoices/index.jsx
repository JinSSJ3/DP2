import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {IMG02, IMG03, IMG04, IMG05, IMG06 } from './img';
import InvoiceSidebar from '../sidebar.jsx';
class Invoices extends Component{
    render(){
        return(
            <div>

            
            <div>
                <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Invoices</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Invoices</h2>
						</div>
					</div>
				</div>
			</div>
         </div>
         <div className="content">
    <div className="container-fluid">

        <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            
               <InvoiceSidebar />
             
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card card-table">
                    <div className="card-body">
                    
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Invoice No</th>
                                        <th>Patient</th>
                                        <th>Amount</th>
                                        <th>Paid On</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/pages/invoice-view">#INV-0010</Link>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG02} alt="User" />
                                                </Link>
                                                <Link to="/doctor/patient-profile">Richard Wilson <span>#PT0016</span></Link>
                                            </h2>
                                        </td>
                                        <td>$450</td>
                                        <td>14 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                             <Link to="/pages/invoice-view" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </Link>
                                                <a href="#0" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/pages/invoice-view">#INV-0009</Link>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG03} alt="User" />
                                                </Link>
                                                <Link to="/doctor/patient-profile" >Charlene Reed <span>#PT0001</span></Link>
                                            </h2>
                                        </td>
                                        <td>$200</td>
                                        <td>13 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                                <Link to="/pages/invoice-view" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </Link>
                                                <a href="#0" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/pages/invoice-view">#INV-0008</Link>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link to="/doctor/patient-profile"  className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG04} alt="User" />
                                                </Link>
                                                <Link to="/doctor/patient-profile" >Travis Trimble <span>#PT0002</span></Link>
                                            </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>12 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <Link to="/pages/invoice-view" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </Link>
                                                <a href="#0" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/pages/invoice-view">#INV-0007</Link>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG05} alt="User" />
                                                </Link>
                                                <Link to="/doctor/patient-profile">Carl Kelly <span>#PT0003</span></Link>
                                            </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>11 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                                <Link to="/pages/invoice-view" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </Link>
                                                <a href="#0" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/pages/invoice-view">#INV-0006</Link>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG06} alt="User" />
                                                </Link>
                                                <Link to="/doctor/patient-profile">Michelle Fairfax <span>#PT0004</span></Link>
                                            </h2>
                                        </td>
                                        <td>$275</td>
                                        <td>10 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                                <Link to="/pages/invoice-view" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </Link>
                                                <a href="#0" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                  
                                 
                                
                                </tbody>
                            </table>
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
export default Invoices;