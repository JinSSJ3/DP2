import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import { Modal } from 'react-bootstrap';
import SidebarNav from "../sidebar";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import {Productss,Product1,Product3,Product4,Product5,Product6} from "./image"

class InvoiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: null,
      data: [
        {
          id: "#IN001",
          patientid: "#PT001",
          patientName: "Abilify,Actamin",
          patientimg: Productss,
          Amount: "$5000.00",
          date: "9 Sep 2019",
          status: "paid",
        },
        {
          id: "#IN002",
          patientid: "#PT002",
          patientName: "Abilify,Actamin",
          patientimg: Productss,
          Amount: "$2000.00",
          date: "15 Dec 2019",
          status: "paid",
        },
        {
          id: "#IN003",
          patientid: "#PT003",
          patientName: "Abilify,Actamin",
          patientimg: Productss,
          Amount: "$2500.00",
          date: "20 Aug 2019",
          status: "paid",
        },
        {
          id: "#IN004",
          patientid: "#PT004",
          patientName: "Abilify,Actamin",
          patientimg: Productss,
          Amount: "$4000.00",
          date: "10 Feb 2019",
          status: "paid",
        },
        {
          id: "#IN005",
          patientid: "#PT005",
          patientName: "Abilify,Actamin,Actamin",
          patientimg: Productss,
          Amount: "$5000.00",
          date: "15 Jun 2019",
          status: "paid",
        },
        {
          id: "#IN006",
          patientid: "#PT006",
          patientName: "Abilify,Actamin",
          patientimg: Productss,
          Amount: "$2000.00",
          date: "20 Jul 2019",
          status: "paid",
        },
        {
            id: "#IN007",
            patientid: "#PT007",
            patientName: "Abilify,Actamin",
            patientimg: Productss,
            Amount: "$1000.00",
            date: "22 Aug 2019",
            status: "paid",
          },
      ],
    };
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
    const { data } = this.state;

    const columns = [
      {
        title: "Invoice Number",
        dataIndex: "id",
        render: (text, record) => (        
            <a href="/pharmacyadmin/invoice" className="invoice-link">{text}</a>            
        ),
        sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: "Medicine Name",
        dataIndex: "patientName",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="" className="avatar avatar-sm mr-2"><img alt="" src={record.patientimg} /></a>
            <a href="">{text}</a>
          </h2>
        ),
        sorter: (a, b) => a.patientName.length - b.patientName.length,
      },
      {
        title: "Total Amount",
        dataIndex: "Amount",
        sorter: (a, b) => a.Amount.length - b.Amount.length,
      },
      {
        title: "Created Date",
        dataIndex: "date",      
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Status",
        dataIndex: "status",
        render:(record)=>(
        <span className="badge badge-pill bg-success inv-badge">{record}</span>
        ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
    {
        title: 'Actions',
        render: (text, record) => (
            <div className="actions">
                <a href="#0" className="btn btn-sm bg-success-light m-l-5" onClick={()=>this.handleShow('edit')}><i className="fe fe-pencil"></i> Edit</a>
                <a href="#0"className="btn btn-sm bg-danger-light" onClick={()=>this.handleShow('delete')}><i className="fe fe-trash"></i> Delete</a>
            </div>
        ),
       
      }
    ];

    return (
      <>
        <SidebarNav />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Invoice Report</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Invoice Report</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <Table
                        className="table-striped"
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        // bordered
                        dataSource={data}
                        rowKey={(record) => record.id}
                        showSizeChanger={true}
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          	 {/* Edit Modal */}
				 <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title><h4 className="modal-title">Edit Invoice Report</h4></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="modal-body">
							<form>
								<div className="row form-row">
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Invoice Number</label>
											<input type="text" className="form-control" value="#INV-0001" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient ID</label>
											<input type="text" className="form-control" value="	#PT002" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient Name</label>
											<input type="text" className="form-control" value="R Amer" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient Image</label>
											<input type="file"  className="form-control" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Total Amount</label>
											<input type="text"  className="form-control" value="$200.00" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Created Date</label>
											<input type="text"  className="form-control" value="29th Oct 2019" />
										</div>
									</div>
									
								</div>
								<button type="submit" className="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
                        </Modal.Body>
                    </Modal>
				  {/* Edit Modal */}
				   {/* Delete Modal */}
				 <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                        <h4 className="modal-title">Delete</h4>
                        </Modal.Header>
                        <Modal.Body className="text-center">
					
							<div className="form-content p-2">
								
								<p className="mb-4">Are you sure want to delete?</p>
								<button type="button" className="btn btn-primary">Save </button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
					
                        </Modal.Body>
                    </Modal>
				  {/* Delete Modal */}
        </div>
      </>
    );
  }
}

export default InvoiceList;
