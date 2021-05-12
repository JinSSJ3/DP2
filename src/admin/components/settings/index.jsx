import React, { Component } from 'react';
import SidebarNav from "../sidebar";

class Settings extends Component{
    render(){
        return(
            <>
            <SidebarNav />
            <div className="page-wrapper">
            <div className="content container-fluid">
            
            
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">General Settings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                <li className="breadcrumb-item"><a href="#0">Settings</a></li>
                                <li className="breadcrumb-item active">General Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
           
                <div className="row">
                    
                    <div className="col-12">
                    
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">General</h4>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                
                                        <div className="form-group">
                                            <label>Website Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Website Logo</label>
                                            <input type="file" className="form-control" />
                                            <small className="text-secondary">Recommended image size is <b>150px x 150px</b></small>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label>Favicon</label>
                                            <input type="file" className="form-control" />
                                            <small className="text-secondary">Recommended image size is <b>16px x 16px</b> or
                                             <b>32px x 32px</b></small><br />
                                            <small className="text-secondary">Accepted formats : only png and ico</small>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                    
                            
                    </div>
                </div>
                
            </div>			
        </div>
        </>
        );
    }
}
export default Settings;