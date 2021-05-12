import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';

class Orders extends Component{
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
              <div className="col-12">
                <h3 className="page-title">Order</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Order</li>
                </ul>
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
                          <th>Supplier ID</th>
                          <th>Supplier Name</th>
                          <th>Order by</th>
                          <th>Add order</th>
                          <th>Order list</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>256</td>
                          <td>Douglas Meyer</td>
                          <td>Trinity General Hospital</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  3</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20</td>
                          <td>Tyler Robinson</td>
                          <td>Grand Valley Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  50<br />
                            Dolofin Antigripal(Dolo)  4</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>15</td>
                          <td>Mary Dixon</td>
                          <td>Grand Plains Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolo 650(CIpla)  0</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>156</td>
                          <td>Kurt Wooten</td>
                          <td>Mercy Vale Clinic</td>
                          <td>10-5-2020</td>
                          <td>Tektonik(None)  2</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>23</td>
                          <td>Vickie Pritchett</td>
                          <td>Kindred Soul Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  4</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>35</td>
                          <td>Joanne Fry</td>
                          <td>Hope Haven Hospital</td>
                          <td>10-5-2020</td>
                          <td>Dolo 650(CIpla)  0</td>
                          <td>
                            <div className="actions">
                              <a href="" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>205</td>
                          <td>Christopher Johnson</td>
                          <td>Hill Crest Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  50<br />
                            Dolofin Antigripal(Dolo)  4</td>
                          <td>
                            <div className="actions">
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
  
 export default Orders; 