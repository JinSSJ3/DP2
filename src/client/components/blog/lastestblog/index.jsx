import React, {Component} from 'react';
import {IMG_blog_th01, IMG_blog_th02, IMG_blog_th03, IMG_blog_th04, IMG_blog_th05} from '.././bloglist/img.jsx';
//link
import { Link } from 'react-router-dom';
class LastestBlog extends Component{
    render(){
        return(
            <div className="card post-widget">
								<div className="card-header">
									<h4 className="card-title">Latest Posts</h4>
								</div>
								<div className="card-body">
									<ul className="latest-posts">
										<li>
											<div className="post-thumb">
												<Link to="/blog/blog-details">
													<img className="img-fluid" src={IMG_blog_th01} alt="" />
												</Link>
											</div>
											<div className="post-info">
												<h4>
                                                <Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link>
												</h4>
												<p>4 Dec 2019</p>
											</div>
										</li>
										<li>
											<div className="post-thumb">
                                            <Link to="/blog/blog-details">
													<img className="img-fluid" src={IMG_blog_th02} alt="" />
                                                    </Link>
											</div>
											<div className="post-info">
												<h4>
                                                <Link to="/blog/blog-details">What are the benefits of Online Doctor Booking? </Link>
												</h4>
												<p>3 Dec 2019</p>
											</div>
										</li>
										<li>
											<div className="post-thumb">
                                            <Link to="/blog/blog-details">
													<img className="img-fluid" src={IMG_blog_th03} alt="" />
                                            </Link>
											</div>
											<div className="post-info">
												<h4>
                                                <Link to="/blog/blog-details">Benefits of consulting with an Online Doctor  </Link>
												</h4>
												<p>3 Dec 2019</p>
											</div>
										</li>
										<li>
											<div className="post-thumb">
                                            <Link to="/blog/blog-details">
													<img className="img-fluid" src={IMG_blog_th04} alt="" />
                                                    </Link>
											</div>
											<div className="post-info">
												<h4>
                                                <Link to="/blog/blog-details">5 Great reasons to use an Online Doctor </Link>
												</h4>
												<p>2 Dec 2019</p>
											</div>
										</li>
										<li>
											<div className="post-thumb">
                                            <Link to="/blog/blog-details">
													<img className="img-fluid" src={IMG_blog_th05} alt="" />
                                                    </Link>
											</div>
											<div className="post-info">
												<h4>
                                                <Link to="/blog/blog-details">Online Doctor Appointment Scheduling</Link>
												</h4>
												<p>1 Dec 2019</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
        );
    }
}

export default LastestBlog;