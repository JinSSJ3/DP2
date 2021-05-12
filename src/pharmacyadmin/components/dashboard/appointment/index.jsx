import React, { Component } from 'react';
import { Table, Switch } from 'antd';

import IMG01 from '../../../assets/images/doctors/doctor-thumb-01.jpg';
import IMG02 from '../../../assets/images/doctors/doctor-thumb-02.jpg';
import IMG03 from '../../../assets/images/doctors/doctor-thumb-03.jpg';
import IMG04 from '../../../assets/images/doctors/doctor-thumb-04.jpg';
import IMG05 from '../../../assets/images/doctors/doctor-thumb-01.jpg';
import IMG06 from '../../../assets/images/doctors/doctor-thumb-02.jpg';
import IMG07 from '../../../assets/images/doctors/doctor-thumb-03.jpg';
import IMG08 from '../../../assets/images/doctors/doctor-thumb-04.jpg';

class TableAppointmentList extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,image:IMG01,Name:"Dr. Ruby Perrin",Speciality:"Dental",PatientImg:IMG05,PatientName:'Charlene Reed',AppointmentDate:'9 Nov 2019',AppointmentTime: '11.00 AM - 11.15 AM',status: true,Amount:"$3200.00"},
                {id:2,image:IMG02,Name:"Dr. Darren Elde",Speciality:"Dental",PatientImg:IMG06,PatientName:'Travis Trimble',AppointmentDate:'5 Nov 2019',AppointmentTime: '11.00 AM - 11.15 AM',status: false,Amount:"$3100.00"},
                {id:3,image:IMG03,Name:"Dr. Deborah Angel",Speciality:"Cardiology",PatientImg:IMG07,PatientName:'Carl Kelly',AppointmentDate:'10 Dec 2019',AppointmentTime: '11.00 AM - 11.15 AM',status: true,Amount:"$4000.00"},
                {id:4,image:IMG04,Name:"Dr. Sofia Brient",Speciality:"Urology",PatientImg:IMG08,PatientName:'Charlene Reed',AppointmentDate:'20 Dec 2019',AppointmentTime: '11.00 AM - 11.15 AM',status: false,Amount:"$3500.00"},
                
            ]
        }
    }

    onChangeHandle=()=>{

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
            title: 'Patient Name',
            dataIndex: 'PatientName',
            render: (text, record) => (            
                <h2 className="table-avatar">
                  <a href="/admin/profile" className="avatar avatar-sm mr-2"><img alt="" src={record.PatientImg} /></a>
                  <a href="/admin/profile">{record.PatientName}</a>
                </h2>
              ), 
          },
          {
            title: 'Appointment Time',
            dataIndex: 'AppointmentTime',
            render: (text, record) => (            
                <>
                 <span>{record.AppointmentDate}</span>
                  <span className="text-primary d-block">{text}</span>
                </>
                
              ), 
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
              render: (e) => (< Switch/>)
          },
          {
            title: 'Amount',
            dataIndex: 'Amount',
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

export default TableAppointmentList;