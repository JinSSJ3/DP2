import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//images
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07} from './img.jsx';
//components
import BlogListSearch from '../search/search.jsx';
import LastestBlog from '../lastestblog';
import CategoryWidget from '../categoryWidget';
import TagsWidget from '../tagswidget';
class BlogDetails extends Component{
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
							<h2 className="breadcrumb-title">Blog Details</h2>
						</div>
					</div>
				</div>
			</div>
            <div className="content">
              <div className="container">
            
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                    <div className="blog-view">
                    <div className="blog blog-single-post">
                        <div className="blog-image">
                            <Link to="#0"><img alt="" src={IMG01} className="img-fluid" /></Link>
                        </div>
                        <h3 className="blog-title">Doccure – Making your clinic painless visit?</h3>
                        <div className="blog-info clearfix">
                            <div className="post-left">
                                <ul>
                                    <li>
                                        <div className="post-author">
                                            <Link to="/patient/doctor-profile"><img src={IMG02} alt="Post Author" />
                                             <span>Dr. Darren Elder</span></Link>
                                        </div>
                                    </li>
                                    <li><i className="far fa-calendar"></i>4 Dec 2019</li>
                                    <li><i className="far fa-comments"></i>12 Comments</li>
                                    <li><i className="fa fa-tags"></i>Health Tips</li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                    </div>
                    
                    <div className="card blog-share clearfix">
                        <div className="card-header">
                            <h4 className="card-title">Share the post</h4>
                        </div>
                        <div className="card-body">
                            <ul className="social-share">
                                <li><Link to="#0" title="Facebook"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="#0" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#0" title="Linkedin"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link to="#0" title="Google Plus"><i className="fab fa-google-plus"></i></Link></li>
                                <li><Link to="#0" title="Youtube"><i className="fab fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card author-widget clearfix">
                    <div className="card-header">
                        <h4 className="card-title">About Author</h4>
                        </div>
                    <div className="card-body">
                        <div className="about-author">
                            <div className="about-author-img">
                                <div className="author-img-wrap">
                                    <Link to="/patient/doctor-profile"><img className="img-fluid rounded-circle" alt="" src={IMG03} /></Link>
                                </div>
                            </div>
                            <div className="author-details">
                            <Link to="/patient/doctor-profile" className="blog-author-name">Dr. Darren Elder</Link>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card blog-comments clearfix">
                        <div className="card-header">
                            <h4 className="card-title">Comments (12)</h4>
                        </div>
                        <div className="card-body pb-0">
                        <ul className="comments-list">
                            <li>
                                <div className="comment">
                                    <div className="comment-author">
                                        <img className="avatar" alt="" src={IMG04} />
                                    </div>
                                    <div className="comment-block">
                                        <span className="comment-by">
                                            <span className="blog-author-name">Michelle Fairfax</span>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p className="blog-date">Dec 6, 2017</p>
                                        <Link to="#0" className="comment-btn">
                                            <i className="fas fa-reply"></i> Reply
                                        </Link>
                                    </div>
                                </div>
                                <ul className="comments-list reply">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={IMG05} />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Gina Moore</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                <p className="blog-date">Dec 6, 2017</p>
                                        <Link to="#0" className="comment-btn">
                                            <i className="fas fa-reply"></i> Reply
                                        </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={IMG06} />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Carl Kelly</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                <p className="blog-date">December 7, 2017</p>
                                        <Link to="#0" className="comment-btn">
                                            <i className="fas fa-reply"></i> Reply
                                        </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="comment">
                                    <div className="comment-author">
                                        <img className="avatar" alt="" src={IMG06} />
                                    </div>
                                    <div className="comment-block">
                                        <span className="comment-by">
                                            <span className="blog-author-name">Elsie Gilley</span>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p className="blog-date">December 11, 2017</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="comment">
                                    <div className="comment-author">
                                        <img className="avatar" alt="" src={IMG07} />
                                    </div>
                                    <div className="comment-block">
                                        <span className="comment-by">
                                            <span className="blog-author-name">Joan Gardner</span>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p className="blog-date">December 13, 2017</p>
                                        <Link to="#0" className="comment-btn">
                                            <i className="fas fa-reply"></i> Reply
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                    <div className="card new-comment clearfix">
                        <div className="card-header">
                            <h4 className="card-title">Leave Comment</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Your Email Address <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Comments</label>
                                    <textarea rows="4" className="form-control"></textarea>
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
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
export default BlogDetails;