import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
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

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "#PT001",
          image: IMG01,
          Name: "Charlene Reed",
          age: "32",
          address: "4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
          Phone: "899235672",
          Visit: "11.00 AM",
          Paid: "$3200.00",
        },
        {
          id: "#PT002",
          image: IMG02,
          Name: "Carl Kelly",
          age: "43",
          address: "4026 Fantages Way, Brunswick, Maine, 04011",
          Phone: "2077299974",
          Visit: "02.00 AM",
          Paid: "$3200.00",
          status: true,
        },
        {
          id: "#PT003",
          image: IMG03,
          Name: "Michelle Fairfaxn",
          age: "24",
          address: "2037 Pearcy Avenue, Decatur, Indiana, 46733",
          Phone: "899235675",
          Visit: "11.00 AM",
          Paid: "$3200.00",
        },
        {
          id: "#PT004",
          image: IMG04,
          Name: "Joan Gardner",
          age: "25",
          address: "2037 Pearcy Avenue, Decatur, Indiana, 46733",
          Phone: "5043686874",
          Visit: "06.00 AM",
          Paid: "$3200.00",
          status: true,
        },
        {
          id: "#PT005",
          image: IMG05,
          Name: "Daniel Griffing",
          age: "35",
          address: "888 Everette Alley, Hialeah, Florida, 33012",
          Phone: "899235679",
          Visit: "10.00 AM",
          Paid: "$3200.00",
        },
        {
          id: "#PT006",
          image: IMG06,
          Name: "Walter Roberson",
          age: "29",
          address: "644 Coffman Alley, Bowling Green, Kentucky, 42101",
          Phone: "9548207887",
          Visit: "05.00 AM",
          Paid: "$3200.00",
        },
        {
          id: "#PT007",
          image: IMG07,
          Name: "Travis Trimble ",
          age: "30",
          address: "2399 Hillview Drive, San Francisco, California, 94103",
          Phone: "899235671",
          Visit: "08.00 AM",
          Paid: "$3200.00",
          status: true,
        },
        {
          id: "#PT008",
          image: IMG08,
          Name: "Charlene Reed ",
          age: "22",
          address: "4914 Hilltop Haven Drive, Passaic, New Jersey, 07055",
          Phone: "3153844562",
          Visit: "09.00 AM",
          Paid: "$3200.00",
        },
      ],
    };
  }
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Patient Id",
        dataIndex: "id",
        sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: "Patient Name",
        dataIndex: "Name",
        render: (text, record) => (
          <h2 className="table-avatar">
            <Link to="/admin/profile" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </Link>
            <Link to="/admin/profile">{text}</Link>
          </h2>
        ),
        sorter: (a, b) => a.Name.length - b.Name.length,
      },
      {
        title: "Age",
        dataIndex: "age",
        sorter: (a, b) => a.age.length - b.age.length,
      },

      {
        title: "address",
        dataIndex: "address",
      },
      {
        title: "Phone",
        dataIndex: "Phone",
        sorter: (a, b) => a.Phone.length - b.Phone.length,
      },
      {
        title: "Last Visit",
        dataIndex: "Visit",
        sorter: (a, b) => a.Visit.length - b.Visit.length,
      },
      {
        title: "Paid",
        dataIndex: "Paid",
        sorter: (a, b) => a.Paid.length - b.Paid.length,
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
                  <h3 className="page-title">List of Patient</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#0">Users</Link>
                    </li>
                    <li className="breadcrumb-item active">Patient</li>
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

export default Patients;
