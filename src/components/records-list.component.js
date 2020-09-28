import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Record = props => (
    <tr>
        <td>{props.record.username}</td>
        <td>{props.record.Class}</td>
        <td>{props.record.enrollment_no}</td>
        <td>{props.record.address}</td>
        <td>{props.record.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.record._id}>Edit</Link> | 
            <a href="#" onClick={()=>{props.deleteRecord(props.record._id)}}> Delete</a>
        </td>
    </tr>
)

export default class RecordsList extends Component{
    constructor(props){
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = {records: []};
    }
    componentDidMount(){
        axios.get('http://localhost:5000/records')
        .then(response => {
            this.setState({
                records: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    deleteRecord(id){
        axios.delete('http://localhost:5000/records/'+id)
        .then(res => console.log(res.data));
        this.setState({
            records: this.state.records.filter(el => el._id !== id)
        })
    }
    recordList(){
        return this.state.records.map(currentrecord => {
            return <Record record={currentrecord} deleteRecord={this.deleteRecord} key={currentrecord._id} />;
        })
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Class</th>
                            <th>Enrollment No</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.recordList()}
                    </tbody>
                </table>
                <div className="ftr">
                    Developer: Kinshuk Hazra
                </div>
            </div>
        );
    }
}