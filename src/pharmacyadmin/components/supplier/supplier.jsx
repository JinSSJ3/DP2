import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';
import {Productss,Product1,Product2} from "./image"

class Supplier extends Component{
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
                <h3 className="page-title">Supplier</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Supplier</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a href="/pharmacyadmin/add-supplier" className="btn btn-primary float-right mt-2">Add New</a>
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
                          <th>ID</th>
                          <th>Product</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Company</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>25</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Productss} alt="product image" /></span>
                              Abilify
                            </h2>
                          </td>
                          <td>Discarsa</td>
                          <td>+51 1542565</td>
                          <td>Discarsa@gmail.com</td>
                          <td>Paseo Los Robles</td>
                          <td>Discarsa Nicaragua</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-supplier">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>33</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product1} alt="product image" /></span>
                              Actamin
                            </h2>
                          </td>
                          <td>Proveedor</td>
                          <td>+51 23687541</td>
                          <td>proveedor@gmail.com</td>
                          <td>Av circunvalación # 234	</td>
                          <td>mi farmacia</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-supplier">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>42</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product2} alt="product image" /></span>
                              Adderall 
                            </h2>
                          </td>
                          <td>Discarsa</td>
                          <td>+51 96588552</td>
                          <td>Discarsa@gmail.com</td>
                          <td>Paseo Los Robles</td>
                          <td>Discarsa Nicaragua</td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" href="/pharmacyadmin/edit-supplier">
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
  
 export default Supplier; 