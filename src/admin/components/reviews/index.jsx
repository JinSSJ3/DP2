import React, { Component } from "react";
import { Table } from "antd";
import { Modal } from "react-bootstrap";

import SidebarNav from "../sidebar";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import IMG01 from "../../assets/images/patient1.jpg";
import IMG02 from "../../assets/images/patient2.jpg";
import IMG03 from "../../assets/images/patient3.jpg";
import IMG04 from "../../assets/images/patient4.jpg";
import IMG05 from "../../assets/images/patient5.jpg";
import IMG06 from "../../assets/images/patient6.jpg";
import IMG07 from "../../assets/images/patient7.jpg";
import IMG011 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG012 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG013 from "../../assets/images/doctors/doctor-thumb-03.jpg";
import IMG014 from "../../assets/images/doctors/doctor-thumb-04.jpg";
import IMG015 from "../../assets/images/doctors/doctor-thumb-05.jpg";
import IMG016 from "../../assets/images/doctors/doctor-thumb-06.jpg";
import IMG017 from "../../assets/images/doctors/doctor-thumb-07.jpg";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          image: IMG01,
          Name: "Michelle Fairfax",
          doctorname: "Dr. Sofia Brient",
          doctorimage: IMG011,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "27 Sep 2019",
          time: "04.00 PM",
        },
        {
          id: 2,
          image: IMG02,
          Name: "Carl Kelly",
          doctorname: "Dr. Deborah Angel",
          doctorimage: IMG012,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "1 Jan 2019",
          time: "06.00 PM",
        },
        {
          id: 3,
          image: IMG03,
          Name: "Daniel Griffing",
          doctorname: "Dr. Paul Richard",
          doctorimage: IMG013,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "13 Aug 2019",
          time: "07.40 PM",
        },
        {
          id: 4,
          image: IMG04,
          Name: "Elsie Gilley",
          doctorname: "Dr. Olga Barlow",
          doctorimage: IMG014,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "25 Jun 2019",
          time: "01.00 PM",
        },
        {
          id: 5,
          image: IMG05,
          Name: "Travis Trimble ",
          doctorname: "Dr. John Gibbs",
          doctorimage: IMG015,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "30 Sep 2019",
          time: "02.40 PM",
        },
        {
          id: 6,
          image: IMG06,
          Name: "Elsie Gilley",
          doctorname: "Dr. Olga Barlow",
          doctorimage: IMG016,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "25 Jun 2019",
          time: "01.00 PM",
        },
        {
          id: 7,
          image: IMG07,
          Name: "Daniel Griffing",
          doctorname: "Dr. Paul Richard",
          doctorimage: IMG017,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "13 Aug 2019",
          time: "07.40 PM",
        },
      ],
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Patient Name",
        dataIndex: "Name",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            <a href="#0">{text}</a>
          </h2>
        ),
        sorter: (a, b) => a.Name.length - b.Name.length,
      },
      {
        title: "Doctor Name",
        dataIndex: "doctorname",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.doctorimage} />
            </a>
            <a href="#0">{text}</a>
          </h2>
        ),
        sorter: (a, b) => a.doctorname.length - b.doctorname.length,
      },
      {
        title: "Reviews",
        render: () => (
          <>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star-o text-secondary"></i>
          </>
        ),
      },
      {
        title: "Description",
        dataIndex: "Description",
        sorter: (a, b) => a.Description.length - b.Description.length,
      },

      {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => (
          <>
            {record.date}
            <br />
            <small>{record.time}</small>
          </>
        ),
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Action",
        render: (text, record) => (
          <a href="#0"
            className="btn btn-sm bg-danger-light"
            onClick={() => this.handleShow("delete")}
          >
            <i className="fe fe-trash"></i> Delete
          </a>
        ),
      },
    ];

    return (
      <>
        <SidebarNav />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Reviews</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/admin">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Reviews</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
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
          {/* Delete Modal */}
          <Modal
            show={this.state.show === "delete"}
            onHide={this.handleClose}
            centered
          >
            <Modal.Body className="text-center">
              <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-primary">
                  Save{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/* Delete Modal */}
        </div>
      </>
    );
  }
}
export default Reviews;
