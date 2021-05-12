import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import { Modal } from 'react-bootstrap';
import SidebarNav from "../sidebar";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG03 from "../../assets/images/doctors/doctor-thumb-03.jpg";
import IMG04 from "../../assets/images/doctors/doctor-thumb-04.jpg";
import IMG05 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG06 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG07 from "../../assets/images/doctors/doctor-thumb-03.jpg";


class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: null,
      data: [
        {
          id: "#IN001",
          patientid: "#PT001",
          patientName: "Dr. Ruby Perrin",
          patientimg: IMG01,
          Amount: "$5000.00",
          date: "9 Sep 2019",
          status: "paid",
        },
        {
          id: "#IN002",
          patientid: "#PT002",
          patientName: "Travis Trimble",
          patientimg: IMG02,
          Amount: "$2000.00",
          date: "15 Dec 2019",
          status: "paid",
        },
        {
          id: "#IN003",
          patientid: "#PT003",
          patientName: "Carl Kelly",
          patientimg: IMG03,
          Amount: "$2500.00",
          date: "20 Aug 2019",
          status: "paid",
        },
        {
          id: "#IN004",
          patientid: "#PT004",
          patientName: "Gina Moore",
          patientimg: IMG04,
          Amount: "$4000.00",
          date: "10 Feb 2019",
          status: "paid",
        },
        {
          id: "#IN005",
          patientid: "#PT005",
          patientName: "Walter Roberson",
          patientimg: IMG05,
          Amount: "$5000.00",
          date: "15 Jun 2019",
          status: "paid",
        },
        {
          id: "#IN006",
          patientid: "#PT006",
          patientName: "Robert Rhodes ",
          patientimg: IMG06,
          Amount: "$2000.00",
          date: "20 Jul 2019",
          status: "paid",
        },
        {
            id: "#IN007",
            patientid: "#PT007",
            patientName: "Robert Rhodes ",
            patientimg: IMG07,
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
        
              <Link to="/admin/invoice" className="invoice-link">{text}</Link>
            
          ),
        sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: "Patient Id",
        dataIndex: "patientid",
        sorter: (a, b) => a.patientid.length - b.patientid.length,
      },
      {
        title: "Patient Name",
        dataIndex: "patientName",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a
              href="/admin/profile"
              className="avatar avatar-sm mr-2"
            >
              <img alt="" src={record.patientimg} />
            </a>
            <a href="/admin/profile">{text}</a>
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
        title: "Status",
        dataIndex: "status",
        render: (text, record)=>(
        <span className="badge badge-pill bg-success inv-badge">{record.status}</span>
        ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
    {
        title: 'Actions',
        render: (text, record) => (
            <div className="actions">
              
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
                  <h3 className="page-title">Transactions</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/admin">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Transactions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="row">
                          <div className="col-sm-12">
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
            </div>
          </div>
         
				   {/* Delete Modal */}
				 <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal Header</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
					
							<div className="form-content p-2">
								<h4 className="modal-title">Delete</h4>
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

export default Transaction;
