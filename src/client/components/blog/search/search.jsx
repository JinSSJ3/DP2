import React, {Component} from 'react';

class BlogListSearch extends Component{
    render(){
        return(
            <div className="card search-widget">
            <div className="card-body">
                <form className="search-form">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}
export default BlogListSearch;