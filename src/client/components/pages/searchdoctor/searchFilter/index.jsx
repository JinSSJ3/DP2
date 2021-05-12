import React, {Component} from 'react';
import DatePicker from "react-datepicker";
class SearchFilter extends Component{
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };  
    render(){
        return(
                 <div className="card search-filter">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Search Filter</h4>
                            </div>
                            <div className="card-body">
                            <div className="filter-widget">
                                <div className="cal-icon">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control datetimepicker"
                                />
                                </div>			
                            </div>
                            <div className="filter-widget">
                                <h4>Gender</h4>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="gender_type" defaultChecked />
                                        <span className="checkmark"></span> Male Doctor
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="gender_type" />
                                        <span className="checkmark"></span> Female Doctor
                                    </label>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h4>Select Specialist</h4>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" defaultChecked />
                                        <span className="checkmark"></span> Urology
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" defaultChecked />
                                        <span className="checkmark"></span> Neurology
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Dentist
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Orthopedic
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                            </div>
                                <div className="btn-search">
                                    <button type="button" className="btn btn-block">Search</button>
                                </div>	
                            </div>
                        </div>
        );
    }
}

export default SearchFilter;