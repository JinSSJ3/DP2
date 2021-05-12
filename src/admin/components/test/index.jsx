import React, { Component } from "react";

class Test extends Component{
    render(){
        return(
        <>        
      
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title"> 
                            <span>Main</span>
                        </li>
                        <li className="active"> 
                            <a href="/admin"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                        </li>
                        <li> 
                            <a href="appointment-list.html"><i className="fe fe-layout"></i> <span>Appointments</span></a>
                        </li>
                        <li> 
                            <a href="specialities.html"><i className="fe fe-users"></i> <span>Specialities</span></a>
                        </li>
                        <li> 
                            <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Doctors</span></a>
                        </li>
                        <li> 
                            <a href="patient-list.html"><i className="fe fe-user"></i> <span>Patients</span></a>
                        </li>
                        <li> 
                            <a href="reviews.html"><i className="fe fe-star-o"></i> <span>Reviews</span></a>
                        </li>
                        <li> 
                            <a href="transactions-list.html"><i className="fe fe-activity"></i> <span>Transactions</span></a>
                        </li>
                        <li> 
                            <a href="settings.html"><i className="fe fe-vector"></i> <span>Settings</span></a>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-document"></i> <span> Reports</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><a href="invoice-report.html">Invoice Reports</a></li>
                            </ul>
                        </li>
                        <li className="menu-title"> 
                            <span>Pages</span>
                        </li>
                        <li> 
                            <a href="profile.html"><i className="fe fe-user-plus"></i> <span>Profile</span></a>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-document"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><a href="login.html"> Login </a></li>
                                <li><a href="register.html"> Register </a></li>
                                <li><a href="forgot-password.html"> Forgot Password </a></li>
                                <li><a href="lock-screen.html"> Lock Screen </a></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-warning"></i> <span> Error Pages </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><a href="error-404.html">404 Error </a></li>
                                <li><a href="error-500.html">500 Error </a></li>
                            </ul>
                        </li>
                        <li> 
                            <a href="blank-page.html"><i className="fe fe-file"></i> <span>Blank Page</span></a>
                        </li>
                        <li className="menu-title"> 
                            <span>UI Interface</span>
                        </li>
                        <li> 
                            <a href="components.html"><i className="fe fe-vector"></i> <span>Components</span></a>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-layout"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                                <li><a href="form-input-groups.html">Input Groups </a></li>
                                <li><a href="form-horizontal.html">Horizontal Form </a></li>
                                <li><a href="form-vertical.html"> Vertical Form </a></li>
                                <li><a href="form-mask.html"> Form Mask </a></li>
                                <li><a href="form-validation.html"> Form Validation </a></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li><a href="tables-basic.html">Basic Tables </a></li>
                                <li><a href="data-tables.html">Data Table </a></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#0"><i className="fe fe-code"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li className="submenu">
                                    <a href="#0"> <span>Level 1</span> <span className="menu-arrow"></span></a>
                                    <ul >
                                        <li><a href="#0"><span>Level 2</span></a></li>
                                        <li className="submenu">
                                            <a href="#0"> <span> Level 2</span> <span className="menu-arrow"></span></a>
                                            <ul >
                                                <li><a href="#0">Level 3</a></li>
                                                <li><a href="#0">Level 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#0"> <span>Level 2</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#0"> <span>Level 1</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
       
    </>

        );
    }
}

export default Test;
		
