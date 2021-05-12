import React, { Component } from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";

class Sales extends Component{
    
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          invoicenumber: "20169998	",
          medicinename: "Ability",
          totalamount: "$150",
          date: "14-5-2020",
        },
        {
          id: 2,
          invoicenumber: "20169997",
          medicinename: "Abilify,Actamin",
          totalamount: "$100",
          date: "13-5-2020",
        },
        {
          id: 3,
          invoicenumber: "20170001",
          medicinename: "Abilify,Actamin,Actamin",
          totalamount: "$220",
          date: "12-5-2020",
        },
        {
          id: 4,
          invoicenumber: "20170001",
          medicinename: "Abilify,Actamin,Actamin",
          totalamount: "$220",
          date: "15-5-2020",
        }
      ],
    };
  }

  handlemenu = () => {};
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Invoice No",
        dataIndex: "invoicenumber",
        sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
      },
      {
        title: "Medicine Name",
        dataIndex: "medicinename",
        sorter: (a, b) => a.medicinename.length - b.medicinename.length,
      },
      {
        title: "Total Price",
        dataIndex: "totalamount",
        sorter: (a, b) => a.totalamount.length - b.totalamount.length,
      },
      {
        title: "Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Action",
        render: (text, record) => (
          <div>
            <a className="btn btn-sm bg-success-light m-l-5" data-toggle="modal" href="#edit_invoice_report">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-default-light" href="invoice.html">
                                <i className="fas fa-file-alt" /> Invoice
                              </a>
                              <a href="" className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
                                <i className="fe fe-trash" /> Delete
                              </a>
          </div>
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
              <div className="col-12">
                <h3 className="page-title">Sales</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/pharmacyadmin">Dashboard</a></li>
                  <li className="breadcrumb-item active">Sales</li>
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
                        className="datatable table table-hover table-center mb-0"
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
  
 export default Sales; 