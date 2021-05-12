import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';
import {Productss,Product1,Product2,Product10,Product11,Product12,Product13,Product14} from "./image"

class Product extends Component{
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
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Products</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a href="/pharmacyadmin/add-product" className="btn btn-primary float-right mt-2">Add New</a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Recent Orders */}
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Discount</th>
                          <th>Expire</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>8</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product10} alt="product image" /></span>
                              Lysofranil Dorzostin
                            </h2>
                          </td>
                          <td>Hair care</td>
                          <td>$10</td>
                          <td>22</td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product2} alt="product image" /></span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$10</td>
                          <td>22</td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product11} alt="product image" /></span>
                              Ergorinex Caffeigestin
                            </h2>
                          </td>
                          <td>Hair care</td>
                          <td>$15</td>
                          <td>22</td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product12} alt="product image" /></span>
                              Acetrace Amionel
                            </h2>
                          </td>
                          <td>Body care</td>
                          <td>$10</td>
                          <td>22</td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" onClick={()=>this.handleShow('delete')} /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product1} alt="product image" /></span>
                              Actamin
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$22</td>
                          <td><span className="btn btn-sm bg-danger-light">THERE ONLY 5</span></td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product13} alt="product image" /></span>
                              Rapalac Neuronium
                            </h2>
                          </td>
                          <td>Skin care</td>
                          <td>$16</td>
                          <td>213</td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Productss} alt="product image" /></span>
                              Abilify
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$22</td>
                          <td><span className="btn btn-sm bg-danger-light">THERE ONLY 2</span></td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product14} alt="product image" /></span>
                              Cordacriptine Mardipine
                            </h2>
                          </td>
                          <td>Skin care</td>
                          <td>$22</td>
                          <td><span className="btn btn-sm bg-danger-light">THERE ONLY 2</span></td>
                          <td>0%</td>
                          <td><span className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-product">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
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
              {/* /Recent Orders */}
            </div>
          </div>
        </div>			
      </div>
      {/* /Page Wrapper */}
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
             </>         
        )
     }
  }
  
 export default Product; 