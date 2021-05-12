import React,{ Component } from 'react';

import { Link } from 'react-router-dom';
import {Modal } from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG09, IMG010, IMG011  } from './img';
class PatientChat extends Component{
    constructor(props) {
		super(props);
		this.state = {
			activeModal: null

		}
    }
	openModal= (id)=> {
        this.setState({activeModal: id}, () => {
            
            }); 
	  }
	  
      handleCloseModal = () => {
          this.setState({activeModal: false}, () => {
             
            }); 
		}

		componentDidMount(){
			document.body.classList.add('chat-page');
		}
		componentWillUnmount(){
			document.body.classList.remove('chat-page');
		}

    render(){
        return(
    <div>
        <div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="chat-window">
							
								
								<div className="chat-cont-left">
									<div className="chat-header">
										<span>Chats</span>
										<a href="#0" className="chat-compose">
											<i className="material-icons">control_point</i>
										</a>
									</div>
									<form className="chat-search">
										<div className="input-group">
											<div className="input-group-prepend">
												<i className="fas fa-search"></i>
											</div>
											<input type="text" className="form-control" placeholder="Search"/>
										</div>
									</form>
									<div className="chat-users-list">
										<div className="chat-scroll">
											<a href="#0" className="media">
												<div className="media-img-wrap">
													<div className="avatar avatar-away">
									<img src={IMG01} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Richard Wilson</div>
														<div className="user-last-chat">Hey, How are you?</div>
													</div>
													<div>
														<div className="last-chat-time block">2 min</div>
														<div className="badge badge-success badge-pill">15</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat active">
												<div className="media-img-wrap">
													<div className="avatar avatar-online">
								<img src={IMG02} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Charlene Reed</div>
														<div className="user-last-chat">I'll call you later </div>
													</div>
													<div>
														<div className="last-chat-time block">8:01 PM</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media">
												<div className="media-img-wrap">
													<div className="avatar avatar-away">
								<img src={IMG03} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Travis Trimble </div>
														<div className="user-last-chat">Give me a full explanation about our project</div>
													</div>
													<div>
														<div className="last-chat-time block">7:30 PM</div>
														<div className="badge badge-success badge-pill">3</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-online">
							<img src={IMG04} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Carl Kelly</div>
														<div className="user-last-chat">That's very good UI design</div>
													</div>
													<div>
														<div className="last-chat-time block">6:59 PM</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-offline">
									<img src={IMG04} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Michelle Fairfax</div>
														<div className="user-last-chat">Yesterday i completed the task</div>
													</div>
													<div>
														<div className="last-chat-time block">11:21 AM</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-online">
								<img src={IMG05} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Gina Moore</div>
														<div className="user-last-chat">What is the major functionality?</div>
													</div>
													<div>
														<div className="last-chat-time block">10:05 AM</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-away">
								<img src={IMG06} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Elsie Gilley</div>
														<div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
													</div>
													<div>
														<div className="last-chat-time block">Yesterday</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-offline">
									<img src={IMG07} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Joan Gardner</div>
														<div className="user-last-chat">Let's talk briefly in the evening. </div>
													</div>
													<div>
														<div className="last-chat-time block">Sunday</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-online">
									<img src={IMG08} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Daniel Griffing</div>
														<div className="user-last-chat">Do you have any collections? If so, what of?</div>
													</div>
													<div>
														<div className="last-chat-time block">Saturday</div>
													</div>
												</div>
											</a>
											<a href="#0" className="media read-chat">
												<div className="media-img-wrap">
													<div className="avatar avatar-away">
							<img src={IMG08} alt="User " className="avatar-img rounded-circle" />
													</div>
												</div>
												<div className="media-body">
													<div>
														<div className="user-name">Walter Roberson</div>
														<div className="user-last-chat">Connect the two modules with in 1 day.</div>
													</div>
													<div>
														<div className="last-chat-time block">Friday</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								
								<div className="chat-cont-right">
									<div className="chat-header">
										<a id="back_user_list" href="#0" className="back-user-list">
											<i className="material-icons">chevron_left</i>
										</a>
										<div className="media">
											<div className="media-img-wrap">
												<div className="avatar avatar-online">
								 <img src={IMG01} alt="User " className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body">
												<div className="user-name">Richard Wilson</div>
												<div className="user-status">online</div>
											</div>
										</div>
										<div className="chat-options">
											<a href="#0" data-toggle="modal" data-target="#voice_call" onClick={()=> this.openModal('voice')}>
												<i className="material-icons">local_phone</i> 
											</a>
											<a href="#0" data-toggle="modal" data-target="#video_call" onClick={()=> this.openModal('video')}>
												<i className="material-icons">videocam</i>
											</a>
											<a href="#0">
												<i className="material-icons">more_vert</i>
											</a>
										</div>
									</div>
									<div className="chat-body">
										<div className="chat-scroll">
											<ul className="list-unstyled">
												<li className="media sent">
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>Hello. What can I do for you?</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:30 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="media received">
													<div className="avatar">
							<img src={IMG02} alt="User " className="avatar-img rounded-circle" />
													</div>
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>I'm just looking around.</p>
																<p>Will you tell me something about yourself?</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:35 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="msg-box">
															<div>
																<p>Are you there? That time!</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:40 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="msg-box">
															<div>
																<div className="chat-msg-attachments">
																	<div className="chat-attachment">
																		<img src={IMG010} alt="Attachment" />
																		<div className="chat-attach-caption">placeholder.jpg</div>
																		<a href="#0" className="chat-attach-download">
																			<i className="fas fa-download"></i>
																		</a>
																	</div>
																	<div className="chat-attachment">
																		<img src={IMG09} alt="Attachment" />
																		<div className="chat-attach-caption">placeholder.jpg</div>
																		<a href="#0" className="chat-attach-download">
																			<i className="fas fa-download"></i>
																		</a>
																	</div>
																</div>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:41 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="media sent">
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>Where?</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:42 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="msg-box">
															<div>
																<p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:42 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="msg-box">
															<div>
																<div className="chat-msg-attachments">
																	<div className="chat-attachment">
																		<img src={IMG011} alt="Attachment" />
																		<div className="chat-attach-caption">placeholder.jpg</div>
																		<a href="#0" className="chat-attach-download">
																			<i className="fas fa-download"></i>
																		</a>
																	</div>
																</div>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:50 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="media received">
													<div className="avatar">
				                              <img src={IMG01} alt="User " className="avatar-img rounded-circle" />
													</div>
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>You wait for notice.</p>
																<p>Consectetuorem ipsum dolor sit?</p>
																<p>Ok?</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>8:55 PM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="chat-date">Today</li>
												<li className="media received">
													<div className="avatar">
					                          <img src={IMG02} alt="User " className="avatar-img rounded-circle" />
													</div>
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>10:17 AM</span>
																		</div>
																	</li>
																	<li><a href="#0">Edit</a></li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="media sent">
													<div className="media-body">
														<div className="msg-box">
															<div>
																<p>Lorem ipsum dollar sit</p>
																<div className="chat-msg-actions dropdown">
																	<a href="#0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																		<i className="fe fe-elipsis-v"></i>
																	</a>
																	<div className="dropdown-menu dropdown-menu-right">
																		<a className="dropdown-item" href="#0">Delete</a>
																	</div>
																</div>
																<ul className="chat-msg-info">
																	<li>
																		<div className="chat-time">
																			<span>10:19 AM</span>
																		</div>
																	</li>
																	<li><a href="#0">Edit</a></li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li className="media received">
													<div className="avatar">
						          	<img src={IMG01} alt="User " className="avatar-img rounded-circle" />
													</div>
													<div className="media-body">
														<div className="msg-box">
															<div>
																<div className="msg-typing">
																	<span></span>
																	<span></span>
																	<span></span>
																</div>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="chat-footer">
										<div className="input-group">
											<div className="input-group-prepend">
												<div className="btn-file btn">
													<i className="fa fa-paperclip"></i>
													<input type="file" />
												</div>
											</div>
											<input type="text" className="input-msg-send form-control" placeholder="Type something"/>
											<div className="input-group-append">
												<button type="button" className="btn msg-send-btn"><i className="fab fa-telegram-plane"></i></button>
											</div>
										</div>
									</div>
								</div>
							
								
							</div>
						</div>
					</div>
				
				</div>

			</div>		
							{/* modal for video*/}
                            <Modal show={this.state.activeModal === 'video'} onHide={this.handleCloseModal} centered>
					<Modal.Body>	
						<div className="call-box incoming-box">
							<div className="call-wrapper">
								<div className="call-inner">
									<div className="call-user">
										<img alt="User " src={IMG01} className="call-avatar" />
										<h4>Dr. Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div className="call-items">
										<a href="#0" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
										<Icon>call_end</Icon>
										</a>
										<Link to="/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
									</div>
								</div>
							</div>
						</div>
						</Modal.Body>
				</Modal>
				{/* modal for call*/}
				<Modal show={this.state.activeModal === 'voice'} onHide={this.handleCloseModal} centered>
					<Modal.Body>	
						<div className="call-box incoming-box">
							<div className="call-wrapper">
								<div className="call-inner">
									<div className="call-user">
										<img alt="User " src={IMG01} className="call-avatar" />
										<h4>Dr. Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div className="call-items">
										<a href="#0" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
										<Icon>call_end</Icon>
										</a>
										<Link to="/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
									</div>
								</div>
							</div>
						</div>
						</Modal.Body>
				</Modal>
			
		  </div>

        );
    }
}
export default PatientChat;      