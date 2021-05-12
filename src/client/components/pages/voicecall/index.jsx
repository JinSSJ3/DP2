import React, {Component} from 'react';
import {IMG01, IMG02,} from './img';

import {Tooltip, OverlayTrigger}from 'react-bootstrap';
class VoiceCall extends Component{
   
    render(){

        return(
            <div className="content">
            <div className="container">
            
                <div className="call-wrapper">
                    <div className="call-main-row">
                        <div className="call-main-wrapper">
                            <div className="call-view">
                                <div className="call-window">
                                
                                    <div className="fixed-header">
                                        <div className="navbar">
                                            <div className="user-details mr-auto">
                                                <div className="float-left user-img">
                                                    <a className="avatar avatar-sm mr-2" href="/doctor/patient-profile" title="Charlene Reed">
                                                        <img src={IMG01} alt="User " className="rounded-circle" />
                                                        <span className="status online"></span>
                                                    </a>
                                                </div>
                                                <div className="user-info float-left">
                                                    <a href="/doctor/patient-profile"><span>Charlene Reed</span></a>
                                                    <span className="last-seen">Online</span>
                                                </div>
                                            </div>
                                            <ul className="nav float-right custom-menu">
                                                <li className="nav-item dropdown dropdown-action">
                                                    <a href="#0" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#0" className="dropdown-item">Settings</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                 
                                    <div className="call-contents">
                                        <div className="call-content-wrap">
                                            <div className="voice-call-avatar">
                                                <img src={IMG02} alt="User " className="call-avatar" />
                                                <span className="username">Dr. Darren Elder</span>
                                                <span className="call-timing-count">00:59</span>
                                            </div>
                                            <div className="call-users">
                                                <ul>
                                                    <li>
                                                        <a href="#0">
                                                            <img src={IMG01} className="img-fluid" alt="User " />
                                                            <span className="call-mute"><i className="fa fa-microphone-slash"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                           
                                    <div className="call-footer">
                                        <div className="call-icons">
                                         <ul className="call-items"> 
                                                <li className="call-item">
 
                                                <OverlayTrigger overlay={<Tooltip id="tooltip1">Enable video</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <a href="/"> <i className="fas fa-video camera"></i></a>
                                                        </span>
                                                </OverlayTrigger>
                                                          
                                                </li>
                                                <li className="call-item">
                                                <OverlayTrigger overlay={<Tooltip id="tooltip2">Mute</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <a href="/"> <i className="fa fa-microphone microphone"></i></a>
                                                        </span>
                                                </OverlayTrigger>
                                                </li>
                                                <li className="call-item">
                                                <OverlayTrigger overlay={<Tooltip id="tooltip2">Add User</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <a href="/"> <i className="fa fa-user-plus"></i></a>
                                                        </span>
                                                </OverlayTrigger>
                                               
                                                </li>
                                            </ul>
                                            <div className="end-call">
                                                <a href="#0">
                                                <i className="fas fa-phone-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                                
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

export default VoiceCall;