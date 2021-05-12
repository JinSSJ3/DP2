import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class TagsWidget extends Component{
    render(){
        return(
            <div className="card tags-widget">
                <div className="card-header">
                    <h4 className="card-title">Tags</h4>
                </div>
                <div className="card-body">
                    <ul className="tags">
                        <li><Link to="#" className="tag">Children</Link></li>
                        <li><Link to="#" className="tag">Disease</Link></li>
                        <li><Link to="#" className="tag">Appointment</Link></li>
                        <li><Link to="#" className="tag">Booking</Link></li>
                        <li><Link to="#" className="tag">Kids</Link></li>
                        <li><Link to="#" className="tag">Health</Link></li>
                        <li><Link to="#" className="tag">Family</Link></li>
                        <li><Link to="#" className="tag">Tips</Link></li>
                        <li><Link to="#" className="tag">Shedule</Link></li>
                        <li><Link to="#" className="tag">Treatment</Link></li>
                        <li><Link to="#" className="tag">Dr</Link></li>
                        <li><Link to="#" className="tag">Clinic</Link></li>
                        <li><Link to="#" className="tag">Online</Link></li>
                        <li><Link to="#" className="tag">Health Care</Link></li>
                        <li><Link to="#" className="tag">Consulting</Link></li>
                        <li><Link to="#" className="tag">Doctors</Link></li>
                        <li><Link to="#" className="tag">Neurology</Link></li>
                        <li><Link to="#" className="tag">Dentists</Link></li>
                        <li><Link to="#" className="tag">Specialist</Link></li>
                        <li><Link to="#" className="tag">Doccure</Link></li>
                    </ul>
                </div>
        </div>
        );
    }
}
export default TagsWidget;