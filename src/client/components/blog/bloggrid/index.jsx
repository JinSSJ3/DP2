import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//images
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG_th01, IMG_th02, IMG_th03, IMG_th04, IMG_th05, IMG_th06} from './img.jsx';
//components
import BlogListSearch from '../search/search.jsx';
import LastestBlog from '../lastestblog';
import CategoryWidget from '../categoryWidget';
import TagsWidget from '../tagswidget';

class BlogGrid extends Component{
    render(){
        return(
            <div>
            <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Blog Grid</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
				<div className="container">
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                            <div className="row blog-grid-row">
								<div className="col-md-6 col-sm-12">
                                <div className="blog grid-blog">
                                        <div className="blog-image">
                                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG01} alt="Post" /></Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/doctor-profile"><img src={IMG_th01} alt="Post Author" /> 
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
                                <div className="col-md-6 col-sm-12">
                                <div className="blog grid-blog">
                                        <div className="blog-image">
                                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG02} alt="Post" /></Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/doctor-profile"><img  src={IMG_th02} alt="Post Author" /> 
                                                        <span>Dr. Darren Elder</span></Link>
                                                    </div>
                                                </li>
                                                <li><i className="far fa-clock"></i> 3 Dec 2019</li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blog/blog-details">What are the benefits of Online Doctor Booking?</Link></h3>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog/blog-details"><img className="img-fluid" src={IMG03} alt="Post" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="entry-meta meta-item">
                                            <li>
                                                <div className="post-author">
                                                    <Link to="/doctor-profile"><img  src={IMG_th03} alt="Post Author" />
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
                                 <div className="col-md-6 col-sm-12">
                                 <div className="blog grid-blog">
                                        <div className="blog-image">
                                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG04} alt="Post" /></Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/doctor-profile"><img  src={IMG_th04} alt="Post Author" />
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
                                <div className="col-md-6 col-sm-12">
                                    <div className="blog grid-blog">
                                            <div className="blog-image">
                                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG05} alt="Post" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                        <Link to="/doctor-profile"><img  src={IMG_th05} alt="Post Author" />
                                                         <span>Dr. Marvin Campbell</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><i className="far fa-clock"></i> 1 Dec 2019</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog/blog-details">
                                                    Online Doctor Appointment Scheduling</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                    <div className="blog grid-blog">
                                            <div className="blog-image">
                                            <Link to="/blog/blog-details"><img className="img-fluid" src={IMG06} alt="Post" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                        <Link to="/doctor-profile"><img  src={IMG_th06} alt="Post Author" />
                                                         <span>Dr. Marvin Campbell</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><i className="far fa-clock"></i>30 Nov 2019</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog/blog-details">Online Doctor Appointment Scheduling</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div> 
                        <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                            <BlogListSearch />
                            <LastestBlog />
                            <CategoryWidget />
                            <TagsWidget />
                        </div>
                    </div>
              </div>
         </div>
		</div>
        );
    }
}
export default BlogGrid;