import React, { Component } from 'react';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [{Registrations: "", Year: ""}]
        };
        this.removeClick = this.removeClick.bind(this);
    }

      removeClick=(e, i)=>{
        e.preventDefault();
        let users = [...this.state.users];
        users.splice(i, 1);
        this.setState({ users });
     }
     addClick(){
        this.setState(prevState => ({ 
           users: [...prevState.users, {Registrations: "", Year: ""}]
        }))
      }
    createUI(){

        return this.state.users.map((el, i) => (
         
        <div className="row form-row" key={i}>
                 <div className="col-12 col-md-5">
                    <div className="form-group">
                        <label>Awards</label>
                        <input type="text" className="form-control" />
                        </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" className="form-control" />
                    </div> 
                </div>
            {  parseInt(i) !== 0 ? 
              <div className="col-12 col-md-2">
                <div className="delete-icon">
                    <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                    <a href="#0" className="btn btn-danger trash" onClick={e => this.removeClick(e, i)}>
                        <i className="far fa-trash-alt"></i></a>
                </div>  
                </div>: ''
               }
               </div> 
          
       ))
    }
    render(){
        return(
         <div className="card">
            <div className="card-body">
                <h4 className="card-title">Registrations</h4>
                <div className="education-info">
                    <div className="row form-row education-cont">

                        <div className="col-12 col-md-10 col-lg-11">
                                {this.createUI()}
                         </div>
                       </div>
                </div>
                <div className="add-more">
                    <a href="#0" className="add-education" onClick={this.addClick.bind(this)}>
                   <i className="fa fa-plus-circle"></i> Add More</a>
                </div>
            </div>
        </div>
      
        );
    }
}
export default Registration;