import React, {Component} from 'react';

class Experience extends Component{
  constructor(props){
      super(props);

      this.state={
          users:[{name:"", from:"", to: "", designation: "" }]
      }

  }

  removeClick=(e, i)=>{
    e.preventDefault();
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
 }

 addClick(){
    this.setState(prevState => ({ 
       users: [...prevState.users, {name:"", from:"", to: "", designation: "" }]
    }))
  }
  
createUI(){
    return    this.state.users.map((el, i) => 
                                <div className="row form-row" key={i}>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Hospital Name</label>
                                        <input type="text" className="form-control" />
                                    </div> 
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <label>From</label>
                                        <input type="text" className="form-control" />
                                    </div> 
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>To</label>
                                        <input type="text" className="form-control" />
                                    </div> 
                                </div>
                                {  parseInt(i) !== 0 ? 
                                        <div className="col-12 col-md-6 col-lg-1">
                                            <div className="delete-icon">
                                                <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                                                <a href="#0" className="btn btn-danger trash" onClick={e => this.removeClick(e, i)}>
                                                    <i className="far fa-trash-alt"></i></a>
                                            </div>  
                                            </div>: ''
                                    }
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Designation</label>
                                        <input type="text" className="form-control" />
                                    </div> 
                                </div>
                               
                            </div>
    )
}

    render(){
        return(
            <div className="card">
            <div className="card-body">
                <h4 className="card-title">Experience</h4>
                <div className="experience-info">
                    <div className="row form-row experience-cont">
                        <div className="col-12 col-md-10 col-lg-11">
                                {this.createUI()}
                        </div>
                    </div>
                </div>
                <div className="add-more">
                    <a href="#0" className="add-experience" onClick={this.addClick.bind(this)}><i className="fa fa-plus-circle"></i> Add More</a>
                </div>
            </div>
        </div>
        );
    }
}

export default Experience;