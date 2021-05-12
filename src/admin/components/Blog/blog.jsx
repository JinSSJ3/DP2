
import React, { Component } from 'react';
import {IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09,IMG10,
  DoctorThumb01,DoctorThumb02,DoctorThumb03,DoctorThumb04,DoctorThumb05,DoctorThumb06,
  DoctorThumb07,DoctorThumb08,DoctorThumb09,DoctorThumb10} from './image'
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: null
    }
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
      return ( 
        <>
        <SidebarNav />
        <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Blog</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="">Pages</a></li>
                    <li className="breadcrumb-item active">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row mb-5">
                  <div className="col">
                    <ul className="nav nav-tabs nav-tabs-solid">
                      <li className="nav-item">
                        <a className="nav-link active" href="/admin/blog">Acitive Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/admin/pending-blog">Pending Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <a className="btn btn-primary btn-sm" href="/admin/add-blog"><i className="fas fa-plus mr-1" /> Add Blog</a>
                  </div>
                </div>
                {/* Blog */}
                <div className="row blog-grid-row">
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG01} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb01} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 4 Dec 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Doccure – Making your clinic painless visit?</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG02} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb02} alt="Post Author" /> <span>Dr. Darren Elder</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 3 Dec 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">What are the benefits of Online Doctor Booking?</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')} ><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG03} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb03} alt="Post Author" /> <span>Dr. Deborah Angel</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 3 Dec 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Benefits of consulting with an Online Doctor</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG04} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb04} alt="Post Author" /> <span>Dr. Sofia Brient</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 2 Dec 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">5 Great reasons to use an Online Doctor</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG05} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb05} alt="Post Author" /> <span>Dr. Marvin Campbell</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 1 Dec 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Online Doctor Appointment Scheduling</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG06} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb06} alt="Post Author" /> <span>Dr. Katharine Berthold</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 30 Nov 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Simple steps to make your doctor visits exceptional!</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG07} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb07} alt="Post Author" /> <span>Dr. Linda Tobin</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 28 Nov 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Choose your own Online Doctor Appointment</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG08} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb08} alt="Post Author" /> <span>Dr. Paul Richard </span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 25 Nov 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Simple steps to visit your doctor today</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG09} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb09} alt="Post Author" /> <span>Dr. John Gibbs</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 24 Nov 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">5 Great reasons to use an Online Doctor</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="#"><img className="img-fluid" src={IMG10} alt="Post Image" /></a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="/admin/profile"><img src={DoctorThumb10} alt="Post Author" /> <span>Dr. Olga Barlow</span></a>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 23 Nov 2019</li>
                        </ul>
                        <h3 className="blog-title"><a href="#">Online Doctoral Programs</a></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="row pt-3">
                        <div className="col"><a href="/admin/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</a></div>
                        <div className="col text-right" onClick={()=>this.handleShow('add')}><a href="" className="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i className="far fa-trash-alt" /> Inactive</a></div>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                </div>
                {/* Blog Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="blog-pagination">
                      <nav>
                        <ul className="pagination justify-content-center">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* /Blog Pagination */}
                {/* /Blog */}
              </div>			
            </div>
          </div>			
        </div>
        {/* /Page Wrapper */}
        <Modal show={this.state.show === 'add'} onHide={this.handleClose} centered>
            <Modal.Header><h5 className="modal-title">Inactive Service?</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button></Modal.Header>
            <Modal.Body><p id="acc_msg">Service is Booked and Inprogress..</p>
              <Modal.Footer>
                  <button type="button" className="btn btn-danger si_accept_cancel"
                        data-dismiss="modal">OK</button>
              </Modal.Footer>
            </Modal.Body>
            </Modal>
      </div>
      </>
      );
   }
}

export default Blog;
