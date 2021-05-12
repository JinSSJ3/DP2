import React, { Component } from 'react';
import DoctorSidebar from '../sidebar';
import Slot from './slot';
import { Link } from 'react-router-dom';

import {Tab, Tabs, Modal } from 'react-bootstrap';
class ScheduleTiming extends Component {
    constructor(props){
        super(props);
        this.state={
            key: 1,
            activeModal: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
 handleSelect (key) {
       
        this.setState({key})
    }
    openModal= (id)=> {
        this.setState({activeModal: id}, () => {
           
            }); 
      }
      handleCloseModal = () => {
          this.setState({activeModal: false}, () => {
             
            }); 
        };
    render() {
        return (
            <div>
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Schedule Timings</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <DoctorSidebar />
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Schedule Timings</h4>
                                                <div className="profile-box">
                                                    <div className="row">

                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Timing Slot Duration</label>
                                                                <select className="select form-control">
                                                                    <option>-</option>
                                                                    <option>15 mins</option>
                                                                    <option defaultValue="selected">30 mins</option>
                                                                    <option>45 mins</option>
                                                                    <option>1 Hour</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="card schedule-widget mb-0">
                                                                <div className="schedule-header">
                                                                    < div className="schedule-nav">
                                                                        <Tabs
                                                                            className="tab-view"
                                                                            activeKey={this.state.key}
                                                                            onSelect={this.handleSelect}
                                                                            id="controlled-tab-example"
                                                                        >

                                                            <Tab className="nav-item" eventKey={1} title="Sunday">
                                                            <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
                                                                        <a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}>
                                                                        <i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>      
                                                             </Tab>
                                                        <Tab className="nav-item" eventKey={2} title="Monday">
                                                        <h4 className="card-title d-flex justify-content-between">
															  <span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#edit_time_slot" onClick={()=>this.openModal('edit')}><i className="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	
																
																	<div className="doc-times">
																		<div className="doc-slot-list">
																			8:00 pm - 11:30 pm
																			<a href="#0" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			11:30 pm - 1:30 pm
																			<a href="#0" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			3:00 pm - 5:00 pm
																			<a href="#0" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			6:00 pm - 11:00 pm
																			<a href="#0"  className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																	</div>
																
                                                        </Tab>
                                                        <Tab className="nav-item" eventKey={3} title="Tuesday"> 
                                                        <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
                                                        </Tab>
                                                       <Tab className="nav-item" eventKey={4} title="Wednesday"> 
                                                             <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
                                                       </Tab>
                                                         <Tab className="nav-item" eventKey={5} title="Thurday"> 
                                                         <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
                                                           </Tab>
                                                             <Tab className="nav-item" eventKey={6} title="Friday">
                                                             <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
                                                            </Tab>
                                                                    <Tab className="nav-item" eventKey={7} title="Saturday">
                                                                            <h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
                                                             </Tab>
                                                                        </Tabs>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal for add slot*/}
				<Modal show={this.state.activeModal === 'add'} onHide={this.handleCloseModal} centered>
                    <Modal.Header>
                        <h5 className="modal-title">Add Time Slots</h5>
                    </Modal.Header>
                    <Modal.Body>	
                    <form>
				         <Slot />
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
                    </Modal.Body>
                 </Modal>  
                 {/* modal for edit slot*/}
				<Modal show={this.state.activeModal === 'edit'} onHide={this.handleCloseModal} centered>
                    <Modal.Header>
                      <h5 className="modal-title">Edit Time Slots</h5>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
					      <Slot />
							
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
                    </Modal.Body>
                </Modal>	 	
            </div>
        );
    }
}

export default ScheduleTiming;