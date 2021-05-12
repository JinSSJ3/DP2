import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoicon from "../../assets/images/logo-small.png";
import avatar from "../../assets/images/avatar-01.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG03 from "../../assets/images/doctors/doctor-thumb-03.jpg";


class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount(){

    var Sidemenu = function() {
      this.$menuItem = $('#sidebar-menu a');
    };


    if(this.props.location.pathname.split("/")[1] === 'admin') {
      require('../../assets/plugins/bootstrap-rtl/css/bootstrap.min.css')
      require('../..//assets/css/feathericon.min.css')
      require('../../assets/js/app.js');
      require('../../assets/js/jquery-3.2.1.min.js');
      require('../../assets/js/jquery.slimscroll.min.js');
      require('../../assets/plugins/fontawesome/css/fontawesome.min.css')
      require('../../assets/plugins/fontawesome/css/all.min.css')
      require('../../assets/css/font-awesome.min.css')
      require('../../assets/css/style.css')
    }
    
  }

  handlesidebar=()=>{

    document.body.classList.toggle('mini-sidebar');
  }

  render() {
    const exclusionArray = [
      "/admin/login",
      "/admin/register",
      "/admin/forgotPassword",
      "/admin/lockscreen",
      "/admin/404",
      "/admin/500",
    ];
    if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
      return "";
    }
    return (
        <div className="header">
          {/* Logo */}
          <div className="header-left">
            <a href="/admin" className="logo">
              <img src={logo} alt="Logo" />
            </a>
            <a href="/admin" className="logo logo-small">
              <img src={logoicon} alt="Logo" width="30" height="30" />
            </a>
          </div>
          {/* /Logo */}
          <a href="#0" id="toggle_btn" onClick={this.handlesidebar}>
            <i className="fe fe-text-align-left" />
          </a>
          <div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder="Search here" />
              <button className="btn" type="submit"><i className="fa fa-search" /></button>
            </form>
          </div>
          {/* Mobile Menu Toggle */}
          <a href="#0" className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars" />
          </a>
          {/* /Mobile Menu Toggle */}

          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <Dropdown className="notify">
                <Dropdown.Toggle
                  className="dropdown-toggle nav-link"
                  id="dropdown-basic"
                >
                  <i className="fe fe-bell"></i>{" "}
                  <span className="badge badge-pill">3</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="notification-list">
                  <Dropdown.Item
                    href="#/action-1"
                    className="notification-message"
                  >
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User"
                          src={IMG01}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                          Schedule{" "}
                          <span className="noti-title">her appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User"
                          src={IMG02}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Charlene Reed</span> has
                          booked her appointment to{" "}
                          <span className="noti-title">Dr. Ruby Perrin</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User"
                          src={IMG03}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Travis Trimble</span>{" "}
                          sent a amount of $210 for his{" "}
                          <span className="noti-title">appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    className="notification-message text-center"
                  >
                    <span className="text-center">View all</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item dropdown has-arrow">
              <Dropdown className="user-dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={avatar}
                      width="31"
                      alt="Ryan Taylor"
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="no-padding">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src={avatar}
                          alt="User"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Ryan Taylor</h6>
                        <p className="text-muted mb-0">Administrator</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="/admin/profile"> My Profile</Dropdown.Item>
                  <Dropdown.Item href="/admin/settings">Settings</Dropdown.Item>
                  <Dropdown.Item href="/admin">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> 
          </ul>
        </div>
      );
  }
}

export default Header;
