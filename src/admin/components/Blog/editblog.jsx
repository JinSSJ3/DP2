
import React, { Component } from 'react';
import { Avatar17 } from './image'
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';

class EditBlog extends Component {
   render() {
      return (       
        <>
        <SidebarNav />
        <div className="main-wrapper">
 {/* Page Wrapper */}
 <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Edit Blog</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="">Pages</a></li>
                  <li className="breadcrumb-item active">Edit Blog</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  <div className="row mb-5">
                    <div className="col">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <a className="nav-link" href="/admin/blog">Acitive Blog</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/admin/pending-blog">Pending Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <a className="btn btn-primary btn-sm" href="/admin/add-blog"><i className="fas fa-plus mr-1" /> Add Blog</a>
                    </div>
                  </div>
                  {/* Add Blog */}
                  <form method="post" encType="multipart/form-data" autoComplete="off" id="update_service" action="/admin/blog">
                    <input type="hidden" name="csrf_token_name" defaultValue="0146f123a4c7ae94253b39bca6bd5a5e" />
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Blog Title <span className="text-danger">*</span></label>
                            <input type="hidden" name="service_id" id="service_id" defaultValue={18} />
                            <input className="form-control" type="text" name="service_title" id="service_title" defaultValue="Doccure – Making your clinic painless visit?" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Category <span className="text-danger">*</span></label>
                            <select className="form-control" name="category" required> 
                              <option value={1}>Automobile</option>
                              <option value={2} defaultValue >Construction</option>
                              <option value={3}>Interior</option>
                              <option value={4}>Cleaning</option>
                              <option value={5}>Electrical</option>
                              <option value={6}>Carpentry</option>
                              <option value={7}>Computer</option>
                              <option value={8}>Painting</option>
                              <option value={9}>Car Wash</option>
                              <option value={10}>Category Test</option>
                              <option value={11}>dfdf</option>
                              <option value={12}>Equipment</option>
                              <option value={13}>Test category1</option>
                              <option value={14}>Farming</option>
                              <option value={15}>Test Category02</option>
                              <option value={16}>Laundry</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Sub Category <span className="text-danger">*</span></label>
                            <select className="form-control" name="subcategory"> 
                              <option value={5}>Others</option>
                              <option value={6}>Others</option>
                              <option value={7}>Others</option>
                              <option value={8}>House cleaning</option>
                              <option value={9}>Others</option>
                              <option value={10}>Others</option>
                              <option value={11}>Others</option>
                              <option value={12}>Others</option>
                              <option value={13}>Full Car Wash</option>
                              <option value={14} defaultValue >Testing category</option>
                              <option value={15}>Test Sub category</option>
                              <option value={16}>Harvesting pine</option>
                              <option value={17}>Test Sub category name</option>
                              <option value={18}>Test Sub category name</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Descriptions <span className="text-danger">*</span></label>
                            <textarea id="about" className="form-control service-desc" name="about" defaultValue={"note."} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="service-upload">
                            <i className="fas fa-cloud-upload-alt" />
                            <span>Upload Blog Images *</span>
                            <input type="file" name="images[]" id="images" multiple accept="image/jpeg, image/png, image/gif," />
                          </div>	
                          <div id="uploadPreview">
                            <ul className="upload-wrap">
                              <li>
                                <div className=" upload-images">
                                  <img alt="Blog Image" src={Avatar17} />
                                </div>
                              </li>
                              <li>
                                <div className=" upload-images">
                                  <img alt="Blog Image" src={Avatar17} />
                                </div>
                              </li>
                              <li>
                                <div className=" upload-images">
                                  <img alt="Blog Image" src={Avatar17} />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Video id <span className="text-danger">*</span></label>
                            <input type="hidden" name="video_id" id="video_id" defaultValue={18} />
                            <input className="form-control" type="text" name="video_id" id="video_id" defaultValue="Rf34rhkWW1" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn" type="submit" name="form_submit" value="submit">Submit</button>
                    </div>
                  </form>
                  {/* /Add Blog */}
                </div>
              </div>
            </div>			
          </div>
        </div>			
      </div>
      {/* /Page Wrapper */}
          </div>
          </>
      );
   }
}

export default EditBlog;
