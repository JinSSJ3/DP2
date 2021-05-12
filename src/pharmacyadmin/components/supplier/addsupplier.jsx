import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import {Product1} from "./image"

class AddSupplier extends Component{
    render(){
        return(
            <>
             <SidebarNav />
              {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Add Supplier</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Add Supplier</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  {/* Add Medicine */}
                  <form method="post" encType="multipart/form-data" autoComplete="off" id="update_service" action="/pharmacyadmin/supplier">
                    <input type="hidden" name="csrf_token_name" defaultValue="0146f123a4c7ae94253b39bca6bd5a5e" />
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Name<span className="text-danger">*</span></label>
                            <input type="hidden" name="name" id="name" defaultValue={18} />
                            <input className="form-control" type="text" name="name" id="name" defaultValue required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label>Email<span className="text-danger">*</span></label>
                          <input type="hidden" name="email" id="email" defaultValue={18} />
                          <input className="form-control" type="text" name="email" id="email" defaultValue required />
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Phone<span className="text-danger">*</span></label>
                            <input type="hidden" name="phone" id="phone" defaultValue={18} />
                            <input className="form-control" type="text" name="phone" id="phone" defaultValue required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label>Company<span className="text-danger">*</span></label>
                          <input type="hidden" name="company" id="company" defaultValue={18} />
                          <input className="form-control" type="text" name="company" id="company" defaultValue required />
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Address <span className="text-danger">*</span></label>
                            <textarea id="address" className="form-control service-desc" name="address" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </div>			
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="service-upload">
                            <i className="fas fa-cloud-upload-alt" />
                            <span>Upload Supplier Image *</span>
                            <input type="file" name="images[]" id="images" multiple accept="image/jpeg, image/png, image/gif," />
                          </div>	
                          <div id="uploadPreview">
                            <ul className="upload-wrap">
                              <li>
                                <div className=" upload-images">
                                  <img alt="Blog Image" src={Product1} />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn" type="submit" name="form_submit" value="submit">Submit</button>
                    </div>
                  </form>
                  {/* /Add Medicine */}
                </div>
              </div>
            </div>			
          </div>
        </div>			
      </div>
      {/* /Page Wrapper */}
             </>         
        )
     }
  }
  
 export default AddSupplier; 