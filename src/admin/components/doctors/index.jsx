import React, { Component } from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
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
import IMG08 from "../../assets/images/doctors/doctor-thumb-04.jpg";

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: IMG01,
          Name: "Dr. Darren Elder",
          Speciality: "Urology",
          Members: "9 Nov 2019",
          Time: "11.00 AM",
          Amount: "$3200.00",
          status: false,
        },
        {
          id: 2,
          image: IMG02,
          Name: "Dr. John Gibbs",
          Speciality: "Cardiology",
          Members: "9 Nov 2019",
          Time: "02.00 AM",
          Amount: "$3200.00",
          status: true,
        },
        {
          id: 3,
          image: IMG03,
          Name: "Dr. Linda Tobin",
          Speciality: "Orthopaedics",
          Members: "9 Nov 2019",
          Time: "11.00 AM",
          Amount: "$3200.00",
          status: false,
        },
        {
          id: 4,
          image: IMG04,
          Name: "Dr. Sofia Brient",
          Speciality: "Orthopaedics",
          Members: "9 Nov 2019",
          Time: "06.00 AM",
          Amount: "$3200.00",
          status: true,
        },
        {
          id: 5,
          image: IMG05,
          Name: "Dr. Ruby Perrin",
          Speciality: "Dental",
          Members: "9 Nov 2019",
          Time: "10.00 AM",
          Amount: "$3200.00",
          status: false,
        },
        {
          id: 6,
          image: IMG06,
          Name: "Dr. Katharine Berthold",
          Speciality: "Neurology",
          Members: "9 Nov 2019",
          Time: "05.00 AM",
          Amount: "$3200.00",
          status: false,
        },
        {
          id: 7,
          image: IMG07,
          Name: "Dr. Ruby Perrin",
          Speciality: "Dental",
          Members: "9 Nov 2019",
          Time: "08.00 AM",
          Amount: "$3200.00",
          status: true,
        },
        {
          id: 8,
          image: IMG08,
          Name: "Dr. Deborah Angel",
          Speciality: "Dermatology",
          Members: "9 Nov 2019",
          Time: "09.00 AM",
          Amount: "$3200.00",
          status: false,
        },
      ],
    };
  }

  handlemenu = () => {};
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Doctor Name",
        dataIndex: "Name",
        render: (text, record) => (
          <h2 className="table-avatar">
            <Link to ="/admin/profile" className="avatar avatar-sm mr-2"
            >
              <img alt="" src={record.image} />
            </Link>
            <Link to ="/admin/profile">{text}</Link>
          </h2>
        ),
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
      },
      {
        title: "Speciality",
        dataIndex: "Speciality",
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
      },
      {
        title: "Member since",
        dataIndex: "Members",
        render: (text, record) => (
          <div className="sorting_1">
            {text}
            <span>
              <small>{record.Time}</small>
            </span>
          </div>
        ),
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
      },
      {
        title: "Earned",
        dataIndex: "Amount",
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
      },
      {
        title: "Account Status",
        dataIndex: "status",
        key: "status",
        render: (e) => (
          <Switch onChange={this.onChangeHandle} defaultChecked={e} />
        ),
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
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
                  <h3 className="page-title">List of Doctors</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                    <Link to="#0">Users</Link>
                    </li>
                    <li className="breadcrumb-item active">Doctor</li>
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
        </div>
      </>
    );
  }
}

export default Doctors;
