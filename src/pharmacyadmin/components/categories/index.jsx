import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';

class Categories extends Component{
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
                <h3 className="page-title">Categories</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Categories</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a href="#Add_Specialities_details" onClick={()=>this.handleShow('add')} data-toggle="modal" className="btn btn-primary float-right mt-2">Add</a>
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
                          <th>Name</th>
                          <th>Created date</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>
                            <h2 className="table-avatar">	
                              Phytopathology‎
                            </h2>
                          </td>
                          <td>01-May-2020-12:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>
                            <h2 className="table-avatar">	
                              Family care
                            </h2>
                          </td>
                          <td>03-May-2020-08:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>
                            <h2 className="table-avatar">	
                              Cancer
                            </h2>
                          </td>
                          <td>05-May-2020-06:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td>
                            <h2 className="table-avatar">	
                              Hair care
                            </h2>
                          </td>
                          <td>06-May-2020-01:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td>
                            <h2 className="table-avatar">	
                              Skin care	
                            </h2>
                          </td>
                          <td>05-May-2020-02:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>06</td>
                          <td>
                            <h2 className="table-avatar">	
                              Rare diseases‎	
                            </h2>
                          </td>
                          <td>06-May-2020-06:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>07</td>
                          <td>
                            <h2 className="table-avatar">	
                              Baby care
                            </h2>
                          </td>
                          <td>07-May-2020-12:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>08</td>
                          <td>
                            <h2 className="table-avatar">	
                              Inflammations	
                            </h2>
                          </td>
                          <td>07-May-2020-05:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>09</td>
                          <td>
                            <h2 className="table-avatar">	
                              Sleep disorders‎
                            </h2>
                          </td>
                          <td>07-May-2020-08:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-toggle="modal" href="#delete_modal" onClick={()=>this.handleShow('delete')} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <h2 className="table-avatar">	
                              Infectious diseases‎	
                            </h2>
                          </td>
                          <td>08-May-2020-02:00</td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')} data-toggle="modal" href="#edit_specialities_details">
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
                <Modal.Title><h5 className="modal-title">Add Category</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                  <div className="row form-row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" />
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
                <Modal.Title><h5 className="modal-title">Edit Category</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                  <div className="row form-row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" defaultValue="Cardiology" />
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
             </>         
        )
     }
  }
  
 export default Categories; 