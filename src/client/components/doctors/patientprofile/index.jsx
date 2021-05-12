import React, { Component } from "react";
import PatientSidebar from "../patienttsidebar";
import { Link } from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
} from "./img";
class PatientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
  
    this.setState({ key });
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
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
                    <li className="breadcrumb-item">
                      <a href="/home">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Profile
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Profile</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                <PatientSidebar />
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                <div className="card">
                  <div className="card-body pt-0">
                    <Tabs
                      className="tab-view"
                      activeKey={this.state.key}
                      onSelect={this.handleSelect}
                      id="controlled-tab-example"
                    >
                      <Tab
                        className="nav-item"
                        eventKey={1}
                        title="Appointments"
                      >
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG05}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      9 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        7.00 PM
                                      </span>
                                    </td>
                                    <td>8 Nov 2019</td>
                                    <td>$75</td>
                                    <td>11 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG06}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                    <td>6 Nov 2019</td>
                                    <td>$175</td>
                                    <td>10 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-danger-light">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG07}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                    <td>6 Nov 2019</td>
                                    <td>$450</td>
                                    <td>10 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG08}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      7 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        9.00 PM
                                      </span>
                                    </td>
                                    <td>7 Nov 2019</td>
                                    <td>$275</td>
                                    <td>9 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG09}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      6 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        8.00 PM
                                      </span>
                                    </td>
                                    <td>4 Nov 2019</td>
                                    <td>$600</td>
                                    <td>8 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG10}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      5 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        5.00 PM
                                      </span>
                                    </td>
                                    <td>1 Nov 2019</td>
                                    <td>$100</td>
                                    <td>7 Nov 2019</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        className="nav-item"
                        eventKey={2}
                        title="Prescriptions"
                      >
                        <div className="text-right">
                          <Link to="/add-prescription" className="add-new-btn">
                            Add Prescription
                          </Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Name</th>
                                    <th>Created by </th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>14 Nov 2019</td>
                                    <td>Prescription 1</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG01}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>13 Nov 2019</td>
                                    <td>Prescription 2</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG02}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>12 Nov 2019</td>
                                    <td>Prescription 3</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG03}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>11 Nov 2019</td>
                                    <td>Prescription 4</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG04}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>10 Nov 2019</td>
                                    <td>Prescription 5</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG05}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Marvin Campbell{" "}
                                          <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>9 Nov 2019</td>
                                    <td>Prescription 6</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG06}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>8 Nov 2019</td>
                                    <td>Prescription 7</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG07}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>7 Nov 2019</td>
                                    <td>Prescription 8</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG08}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6 Nov 2019</td>
                                    <td>Prescription 9</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG09}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5 Nov 2019</td>
                                    <td>Prescription 10</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG10}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        className="nav-item"
                        eventKey={3}
                        title="Medical Records"
                      >
                        <div className="text-right">
                          <a
                            href="#0"
                            className="add-new-btn"
                            onClick={this.handleShow}
                            data-target="#add_medical_records"
                          >
                            Add Medical Records
                          </a>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Date </th>
                                  <th>Description</th>
                                  <th>Attachment</th>
                                  <th>Created</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#0">#MR-0010</a>
                                  </td>
                                  <td>14 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <a href="#0">dental-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG01}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#0">#MR-0009</a>
                                  </td>
                                  <td>13 Nov 2019</td>
                                  <td>Teeth Cleaning</td>
                                  <td>
                                    <a href="#0">dental-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#0">#MR-0008</a>
                                  </td>
                                  <td>12 Nov 2019</td>
                                  <td>General Checkup</td>
                                  <td>
                                    <a href="#0">cardio-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG03}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#0">#MR-0007</a>
                                  </td>
                                  <td>11 Nov 2019</td>
                                  <td>General Test</td>
                                  <td>
                                    <a href="#0">general-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG04}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Sofia Brient <span>Urology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>
                      <Tab className="nav-item" eventKey={4} title="Billing">
                        <div className="text-right">
                          <Link to="/add-billing" className="add-new-btn">
                            Add Billing
                          </Link>
                        </div>

                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Invoice No</th>
                                    <th>Doctor</th>
                                    <th>Amount</th>
                                    <th>Paid On</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="pages/invoice-view">#INV-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG01}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Ruby Perrin <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$450</td>
                                    <td>14 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0009</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG02}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$300</td>
                                    <td>13 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0008</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG03}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$150</td>
                                    <td>12 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0007</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG04}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$50</td>
                                    <td>11 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0006</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG05}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$600</td>
                                    <td>10 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0005</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG05}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$200</td>
                                    <td>9 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0004</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG07}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$100</td>
                                    <td>8 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0003</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG09}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$250</td>
                                    <td>7 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0002</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG09}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$175</td>
                                    <td>6 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/pages/invoice-view">#INV-0001</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="/patient/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={IMG10}
                                            alt="User "
                                          />
                                        </Link>
                                        <Link to="/patient/doctor-profile">
                                          Dr. Olga Barlow <span>#0010</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$550</td>
                                    <td>5 Nov 2019</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a
                                          href="/pages/invoice-view"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="#0"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Medical Records</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Date</label>
              <input
                type="text"
                className="form-control datetimepicker"
                value="31-10-2019"
              />
            </div>
            <div className="form-group">
              <label>Description ( Optional )</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Upload File</label>
              <input type="file" className="form-control" />
            </div>
            <div className="submit-section text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary submit-btn"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default PatientProfile;
