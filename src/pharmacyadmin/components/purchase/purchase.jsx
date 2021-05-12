import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';
import {Productss,Product1,Product2} from "./image"


class Purchase extends Component{
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
                <h3 className="page-title">Purchase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Purchase</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a href="/pharmacyadmin/add-purchase" className="btn btn-primary float-right mt-2">Add New</a>
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
                          <th>Purchase Date</th>
                          <th>Medicine Name</th>
                          <th>Medicine Category</th>
                          <th>Purchase Price</th>
                          <th>Quantity</th>
                          <th>Supplier</th>
                          <th>Expire Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Productss} alt="product image" /></span>
                              Abilify
                            </h2>
                          </td>
                          <td>Aripiprazole</td>
                          <td>$220</td>
                          <td>60</td>
                          <td>Bradley</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>12-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product1} alt="product image" /></span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$30</td>
                          <td>20</td>
                          <td>Douglas</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>11-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product2} alt="product image" /></span>
                              Actamin
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$58</td>
                          <td>33</td>
                          <td>Douglas</td>
                          <td>20-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>10-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Productss} alt="product image" /></span>
                              Abilify
                            </h2>
                          </td>
                          <td>Aripiprazole</td>
                          <td>$336</td>
                          <td>50</td>
                          <td>Bradley</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>9-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product1} alt="product image" /></span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$10</td>
                          <td>605</td>
                          <td>Douglas</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>8-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product2} alt="product image" /></span>
                              Actamin
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$15</td>
                          <td>160</td>
                          <td>Douglas</td>
                          <td>20-06-20</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-purchase">
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
  
 export default Purchase; 