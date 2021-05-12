
import React, { Component } from 'react';
import {IMG01} from "./image"
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null
        }
    }		

    handleClose=()=>{
        this.setState({
            show:false
        });
    }

    handleShow=(id)=>{
        this.setState({
            show:id
        });
    }
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
                <div className="col-sm-7 col-auto">
                  <h3 className="page-title">Product List</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                    <li className="breadcrumb-item active">Product List</li>
                  </ul>
                </div>
                <div className="col-sm-5 col">
                  <a href="#Add_Specialities_details" data-toggle="modal" onClick={()=>this.handleShow('add')} className="btn btn-primary float-right mt-2">Add</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#SP001</td>
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="product image" />
                                </a>
                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 200 ml</a>
                              </h2>
                            </td>
                            <td>$500</td>
                            <td>12-05-2020</td>
                            <td className="text-right">
                              <div className="actions">
                                <a className="btn btn-sm bg-success-light" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                  <i className="fe fe-pencil" /> Edit
                                </a>
                                <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                  <i className="fe fe-trash" /> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP002</td>
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="product image" />
                                </a>
                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 100 ml</a>
                              </h2>
                            </td>
                            <td>$100</td>
                            <td>12-05-2020</td>
                            <td className="text-right">
                              <div className="actions">
                                <a className="btn btn-sm bg-success-light" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                  <i className="fe fe-pencil" /> Edit
                                </a>
                                <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                  <i className="fe fe-trash" /> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP003</td>
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="product image" />
                                </a>
                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 50 ml</a>
                              </h2>
                            </td>
                            <td>$600</td>
                            <td>12-05-2020</td>
                            <td className="text-right">
                              <div className="actions">
                                <a className="btn btn-sm bg-success-light" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                  <i className="fe fe-pencil" /> Edit
                                </a>
                                <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                  <i className="fe fe-trash" /> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP004</td>
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="product image" />
                                </a>
                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 200 ml</a>
                              </h2>
                            </td>
                            <td>$700</td>
                            <td>12-05-2020</td>
                            <td className="text-right">
                              <div className="actions">
                                <a className="btn btn-sm bg-success-light" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                  <i className="fe fe-pencil" /> Edit
                                </a>
                                <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                  <i className="fe fe-trash" /> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP005</td>
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="product image" />
                                </a>
                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 200 ml</a>
                              </h2>
                            </td>
                            <td>$1200</td>
                            <td>12-05-2020</td>
                            <td className="text-right">
                              <div className="actions">
                                <a className="btn btn-sm bg-success-light" data-toggle="modal" onClick={()=>this.handleShow('edit')} href="#edit_specialities_details">
                                  <i className="fe fe-pencil" /> Edit
                                </a>
                                <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                  <i className="fe fe-trash" /> Delete
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
        {/* /Page Wrapper */}
        
        {/* Add Modal */}        
        <Modal show={this.state.show === 'add'} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title><h5 className="modal-title">Add Product</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                  <div className="row form-row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                </form>
            </Modal.Body>
        </Modal>
        {/* /ADD Modal */}
        {/* Edit Modal */}
        <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title><h5 className="modal-title">Edit Product</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                  <div className="row form-row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                </form>
            </Modal.Body>
        </Modal>
            {/* Edit Modal */}
            {/* Delete Modal */}
            <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>
                <Modal.Body className="text-center">            
                    <div className="form-content p-2">
                        <h4 className="modal-title">Delete</h4>
                        <p className="mb-4">Are you sure want to delete?</p>
                        <button type="button" className="btn btn-primary">Save </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
            
                </Modal.Body>
            </Modal>
      </div>
      </>
      );
   }
}

export default ProductList;