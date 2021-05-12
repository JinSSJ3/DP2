import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import IMG01 from '../../../assets/images/doctors/doctor-thumb-01.jpg';
import IMG02 from '../../../assets/images/doctors/doctor-thumb-02.jpg';
import IMG03 from '../../../assets/images/doctors/doctor-thumb-03.jpg';



class TableDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,image:IMG01,Name:"Dr. Ruby Perrin",Speciality:"Dental",Earned:"$3200.00"},
                {id:2,image:IMG02,Name:"Dr. Darren Elde",Speciality:"Dental",Earned:"$3100.00"},
                {id:3,image:IMG03,Name:"Dr. Deborah Angel",Speciality:"Cardiology",Earned:"$4000.00"},
               
                
            ]
        }
    }
  render() {
      const { data } = this.state

      const columns = [
          {
            title: 'Doctor Name',
            dataIndex: 'Name',
            render: (text, record) => (            
                <h2 className="table-avatar">
                  <a href="/admin/profile" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
                  <a href="/admin/profile">{text}</a>
                </h2>
              ), 
          },
          {
            title: 'Speciality',
            dataIndex: 'Speciality'
          },
          {
            title: 'Earned',
            dataIndex: 'Earned',
          },
          {
            title: 'Reviews',
            render: () => (
                  <> 
                <i className="fe fe-star text-warning"></i>
              <i className="fe fe-star text-warning"></i>
              <i className="fe fe-star text-warning"></i>
              <i className="fe fe-star text-warning"></i>
              <i className="fe fe-star-o text-secondary"></i>
                </>
             ),
          },
      ]
    return (
       <div>
            <Table className="table-striped"
                  style = {{overflowX : 'auto'}}
                  columns={columns}                 
                  // bordered
                  dataSource={data}
                  rowKey={record => record.id}
                  pagination={false} 
                />
       </div>
      
    )
  }
};

export default TableDoctor;