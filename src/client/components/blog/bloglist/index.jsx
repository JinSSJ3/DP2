import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//images
import { IMG01, IMG02, IMG_th01, IMG_th02, IMG_th03} from './img.jsx';
//components
import BlogListSearch from '../search/search.jsx';
import LastestBlog from '../lastestblog';
import CategoryWidget from '../categoryWidget';
import TagsWidget from '../tagswidget';

class BlogList extends Component{
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
							<h2 className="breadcrumb-title">Blog List</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container">
             
					<div className="row">
					
						<div className="col-lg-8 col-md-12">
							<div className="blog">
								<div className="blog-image">
									<Link to="blog-details"><img className="img-fluid" src={IMG01} alt="Post" /></Link>
								</div>
								<h3 className="blog-title"><Link to="blog-details">Doccure – Making your clinic painless visit?</Link></h3>
								<div className="blog-info clearfix">
									<div className="post-left">
										<ul>
											<li>
												<div className="post-author">
													<Link to="/patient/doctor-profile"><img src={IMG_th01} alt="Post Author" /> 
													<span>Dr. Ruby Perrin</span></Link>
												</div>
											</li>
											<li><i className="far fa-clock"></i>4 Dec 2019</li>
											<li><i className="far fa-comments"></i>12 Comments</li>
											<li><i className="fa fa-tags"></i>Health Tips</li>
										</ul>
									</div>
								</div>
								<div className="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link to="/blog/blog-details" className="read-more">Read More</Link>
								</div>
							</div>
							<div className="blog">
								<div className="blog-image">
									<Link to="/blog/blog-details"><img className="img-fluid" src={IMG02} alt="" /></Link>
								</div>
								<h3 className="blog-title"><Link to="/blog/blog-details">What are the benefits of Online Doctor Booking?</Link></h3>
								<div className="blog-info clearfix">
									<div className="post-left">
										<ul>
											<li>
												<div className="post-author">
													<Link to="/doctor-profile"><img src={IMG_th02} alt="Post Author" /> 
													<span>Dr. Darren Elder</span></Link>
												</div>
											</li>
											<li><i className="far fa-clock"></i>3 Dec 2019</li>
											<li><i className="far fa-comments"></i>7 Comments</li>
											<li><i className="fa fa-tags"></i>Cardiology</li>
										</ul>
									</div>
								</div>
								<div className="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link to="/blog/blog-details" className="read-more">Read More</Link>
								</div>
							</div>
							<div className="blog">
								<div className="blog-image">
									<div className="video">
									
										<iframe src="https://www.youtube.com/embed/nuVqJ_OriR8?rel=0&amp;controls=0&amp;showinfo=0" 
										width="940" allowFullScreen ></iframe> 
									</div>
								</div>
								<h3 className="blog-title"><Link to="/blog/blog-details">Benefits of consulting with an Online Doctor</Link></h3>
								<div className="blog-info clearfix">
									<div className="post-left">
										<ul>
											<li>
												<div className="post-author">
													<Link to="/doctor-profile"><img src={IMG_th02} alt="Post Author" />
													 <span>Dr. Deborah Angel</span></Link>
												</div>
											</li>
											<li><i className="far fa-clock"></i>3 Dec 2019</li>
											<li><i className="far fa-comments"></i>2 Comments</li>
											<li><i className="fa fa-tags"></i>Health Care</li>
										</ul>
									</div>
								</div>
								<div className="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link to="/blog/blog-details" className="read-more">Read More</Link>
								</div>
							</div>
							<div className="blog">
								<div className="blog-image">
									<div className="video">
										<iframe src="https://player.vimeo.com/video/133170635" width="940"  allowFullScreen></iframe>
									</div>
								</div>
								<h3 className="blog-title"><Link to="/blog/blog-details">5 Great reasons to use an Online Doctor</Link></h3>
								<div className="blog-info clearfix">
									<div className="post-left">
										<ul>
											<li>
												<div className="post-author">
													<Link to="/doctor-profile"><img src={IMG_th03} alt="Post Author" /> 
													<span>Dr. Sofia Brient</span></Link>
												</div>
											</li>
											<li><i className="far fa-clock"></i>2 Dec 2019</li>
											<li><i className="far fa-comments"></i>41 Comments</li>
											<li><i className="fa fa-tags"></i>Health Tips</li>
										</ul>
									</div>
								</div>
								<div className="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link to="/blog/blog-details" className="read-more">Read More</Link>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="blog-pagination">
										<nav>
											<ul className="pagination justify-content-center">
												<li className="page-item disabled">
													<Link to="#0" className="page-link" tabIndex="-1">
														<i className="fas fa-angle-double-left"></i></Link>
												</li>
												<li className="page-item">
													<a href="#0" className="page-link">1</a>
												</li>
												<li className="page-item active">
													<a className="page-link" href="#0">2 <span className="sr-only">(current)</span></a>
												</li>
												<li className="page-item">
													<a className="page-link" href="#0">3</a>
												</li>
												<li className="page-item">
												<Link to="#0" className="page-link" href="#0"><i className="fas fa-angle-double-right"></i></Link>
												</li>
											</ul>
										</nav>
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
export default BlogList;