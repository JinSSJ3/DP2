import React, { Component } from 'react';
import { IMG01, IMG02, IMG03, IMG04, IMG_th01, IMG_th02, IMG_th03, IMG_th04} from './img.jsx';
import { Link } from 'react-router-dom';

class HomeBlog extends Component{
    
    render(){
        return(
            <section className="section section-blogs">
            <div className="container-fluid">
            
              
                <div className="section-header text-center">
                    <h2>Blogs and News</h2>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
          
                
                <div className="row blog-grid-row">
                    <div className="col-md-6 col-lg-3 col-sm-12">
                    
                    
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <Link to="/blog/blog-details"><img className="img-fluid" src={IMG01} alt="Post" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <Link to="/patient/doctor-profile"><img src={IMG_th01} alt="Post Author" />
                                             <span>Dr. Ruby Perrin</span></Link>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 4 Dec 2019</li>
                                </ul>
                                <h3 className="blog-title">
                                    <Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12">
                    
                     
                        <div className="blog grid-blog">
                            <div className="blog-image">
                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG02} alt="Post" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <Link to="/patient/doctor-profile"><img src={IMG_th02} alt="Post Author" />
                                             <span>Dr. Darren Elder</span></Link>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 3 Dec 2019</li>
                                </ul>
                                <h3 className="blog-title"><Link to="/blog/blog-details">What are the benefits of Online Doctor Booking?</Link></h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                   
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12">
                    
                     
                        <div className="blog grid-blog">
                            <div className="blog-image">
                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG03} alt="Post" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <Link to="/patient/doctor-profile"><img src={IMG_th03} alt="Post Author" /> 
                                            <span>Dr. Deborah Angel</span></Link>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 3 Dec 2019</li>
                                </ul>
                                <h3 className="blog-title"><Link to="/blog/blog-details">Benefits of consulting with an Online Doctor</Link></h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                      
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12">
                    
                      
                        <div className="blog grid-blog">
                            <div className="blog-image">
                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG04} alt="Post" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <Link to="/patient/doctor-profile"><img src={IMG_th04} alt="Post Author" /> 
                                            <span>Dr. Sofia Brient</span></Link>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 2 Dec 2019</li>
                                </ul>
                                <h3 className="blog-title"><Link to="/blog/blog-details">5 Great reasons to use an Online Doctor</Link></h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
                <div className="view-all text-center"> 
                    <a href="#0" className="btn btn-primary">View All</a>
                </div>
            </div>
        </section>
        );
    }
}
export default HomeBlog;