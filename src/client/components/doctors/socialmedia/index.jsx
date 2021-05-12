import React, { Component } from "react";
import DoctorSidebar from "../sidebar";
class SocialMedia extends Component {
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
                      Social Media
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Social Media</h2>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DoctorSidebar />
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Facebook URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Twitter URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Instagram URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Pinterest URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Linkedin URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Youtube URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialMedia;
