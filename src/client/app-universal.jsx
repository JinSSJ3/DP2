import React from 'react';


import {  Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from  './components/header.jsx';
import Footer from  './components/footer.jsx';

import LoginContainer from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import ForgotPassword from './components/forgot-password';
import Home from './components/home';
//blog
import BlogList from './components/blog/bloglist';
import BlogGrid from './components/blog/bloggrid';
import BlogDetails from './components/blog/blogdetails';
//pages
import VideoCall from './components/pages/videocall';
import VoiceCall from './components/pages/voicecall';
import SearchDoctor from './components/pages/searchdoctor';
import Calendar from './components/pages/calender';
import Invoice from './components/pages/invoices/invoices';
import InvoiceView from './components/pages/invoices/view';
import DoctorGrid from './components/patients/doctorgrid';
import DoctorList from './components/patients/doctorlist';
import DoctorProfile from './components/patients/doctorprofile';
import DoctorChat from './components/doctors/chat';
import PatientChat from './components/patients/chat';
import MyPatient from './components/doctors/mypatient';
import Booking from './components/patients/booking';
import Checkout from './components/patients/checkout';
import BookingSuccess from './components/patients/booking-success';
import Dashboard from './components/patients/dashboard';
import Favourties from './components/patients/dashboard/favourties';
import Profile from './components/patients/dashboard/profile';
import Password from './components/patients/dashboard/password';
import DoctorDashboard from './components/doctors/dashboard';
import SocialMedia from './components/doctors/socialmedia';
import ScheduleTiming from './components/doctors/scheduletimings';
import DoctorPassword from './components/doctors/password';
import Appointments from './components/doctors/appointments';
import PatientProfile from './components/doctors/patientprofile';
import AddPescription from './components/doctors/addpescription';
import AddBilling from './components/doctors/addbilling';
import ProfileSetting from './components/doctors/profilesetting';
import Review from './components/doctors/reviews';
import DoctorRegister from './components/doctors/register';
import Terms from './components/pages/terms';
import Policy from './components/pages/policy';
// admin
import SideMenu from './components/admin/menu/menu';
import Dropzone from './components/doctors/profilesetting/dropimage';

const ClientAppUniversal = function (props) {
    return (
			<Router>
				<div>
				<Route path="/join" exact component={Dropzone} />
				<Route path="/sider-menu" exact component={SideMenu} />
				<Route render={(props)=> <Header {...props}/>} />
				<Switch>
			
					<Route path="/patient/doctor-grid" exact component={DoctorGrid} />
					<Route path="/patient/doctor-list" exact component={DoctorList} />
					<Route path="/pages/video-call" exact component={VideoCall} />
					<Route path="/pages/voice-call" exact component={VoiceCall} />
					<Route path="/doctor/chat-doctor" exact component={DoctorChat} />

					<Route path="/login" exact component={LoginContainer} />
					<Route path="/register" exact component={Register} />
					<Route path="/forgot-password" exact component={ForgotPassword} />
					<Route path="/home" exact component={Home} />
					{/* blog */}
				    <Route path="/blog/blog-list" exact component={BlogList} />
					<Route path="/blog/blog-grid" exact component={BlogGrid} />
					<Route path="/blog/blog-details" exact component={BlogDetails} />
					{/* pages */}
					{/* <Route path="/video-call" exact component={VideoCall} />
					<Route path="/voice-call" exact component={VoiceCall} /> */}
					<Route path="/patient/search-doctor" exact component={SearchDoctor} />
					<Route path="/pages/calendar" exact component={Calendar} />
					<Route path="/doctor/invoice" exact component={Invoice} />
					<Route path="/doctor/invoice-view" exact component={InvoiceView} />
				
				    <Route path="/patient/doctor-profile" exact component={DoctorProfile} />
					<Route path="/doctor/my-patients" exact component={MyPatient} />
					<Route path="/patient/booking" exact component={Booking} />
					<Route path="/patient/patient-chat" exact component={PatientChat} />
					<Route path="/patient/checkout" exact component={Checkout} />
					<Route path="/patient/booking-success" exact component={BookingSuccess} />
					<Route path="/patient/dashboard" exact component={Dashboard} />
					<Route path="/patient/favourites" exact component={Favourties} />
					<Route path="/patient/profile" exact component={Profile} />
					<Route path="/patient/change-password" exact component={Password} />
					<Route path="/doctor/doctor-dashboard" exact component={DoctorDashboard} /> 
					<Route path="/social-media" exact component={SocialMedia} /> 
					<Route path="/doctor/schedule-timing" exact component={ScheduleTiming} />
					<Route path="/doctor-change-passwword" exact component={DoctorPassword} />
					{/* <Route path="/chat-doctor" exact component={DoctorChat} /> */}
					<Route path="/doctor/appointments" exact component={Appointments} />
					<Route path="/doctor/patient-profile" exact component={PatientProfile} />
					<Route path="/add-prescription" exact component={AddPescription} />
					<Route path="/add-billing" exact component={AddBilling} />
					<Route path="/doctor/profile-setting" exact component={ProfileSetting} />
					<Route path="/doctor/review" exact component={Review} />
					<Route path="/doctor/doctor-register" exact component={DoctorRegister} />
					<Route path="/terms" exact component={Terms} />
					<Route path="/privacy-policy" exact component={ Policy }  />
				</Switch>
				<Route render={(props) => <Footer {...props}/>}/>
				</div>
			
			</Router>
    );
}

export default ClientAppUniversal;

