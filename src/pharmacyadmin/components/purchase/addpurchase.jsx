import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import {Product1} from "./image"

class AddPurchase extends Component{
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
                <h3 className="page-title">Add Purchase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Add Purchase</li>
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
                  <form method="post" action="/pharmacyadmin/purchase">
                    <input type="hidden" name="csrf_token_name" defaultValue="0146f123a4c7ae94253b39bca6bd5a5e" />
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Medicine Name<span className="text-danger">*</span></label>
                            <input type="hidden" name="brand_name" id="brand_name" defaultValue={18} />
                            <input className="form-control" type="text" name="brand_name" id="brand_name" defaultValue required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Category <span className="text-danger">*</span></label>
                            <select className="form-control select" name="category" required> 
                              <option value={1}>Phytopathology</option>
                              <option value={2} selected="selected">Injuries</option>
                              <option value={3}>Cancer</option>
                              <option value={4}>Animal diseases</option>
                              <option value={5}>Growth disorders</option>
                              <option value={6}>Rare diseases</option>
                              <option value={7}>Neoplasms</option>
                              <option value={8}>Inflammations</option>
                              <option value={9}>Sleep disorders</option>
                              <option value={10}>Infectious diseases</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Price<span className="text-danger">*</span></label>
                            <input type="hidden" name="Price" id="Price" defaultValue={18} />
                            <input className="form-control" type="text" name="Price" id="Price" defaultValue="$" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Quantity<span className="text-danger">*</span></label>
                            <input type="hidden" name="quantity" id="quantity" defaultValue={18} />
                            <input className="form-control" type="text" name="quantity" id="quantity" defaultValue required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Expire Date<span className="text-danger">*</span></label>
                            <input className="form-control datetimepicker" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="service-upload">
                            <i className="fas fa-cloud-upload-alt" />
                            <span>Upload Product Images *</span>
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
  
 export default AddPurchase; 