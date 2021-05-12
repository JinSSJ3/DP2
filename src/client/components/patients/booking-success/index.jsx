import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class BookingSuccess extends Component{
    render(){
        return(
              
<div className="content success-page-cont">
    <div className="container-fluid">
    
        <div className="row justify-content-center">
            <div className="col-lg-6">
            
              
                <div className="card success-card">
                    <div className="card-body">
                        <div className="success-cont">
                            <i className="fas fa-check"></i>
                            <h3>Appointment booked Successfully!</h3>
                            <p>Appointment booked with <strong>Dr. Darren Elder</strong><br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
                            <Link to="/pages/invoice-view" className="btn btn-primary view-inv-btn">View Invoice</Link>
                        </div>
                    </div>
                </div>
            
                
            </div>
        </div>
        
    </div>
</div>
        )
    }
}

export default BookingSuccess;