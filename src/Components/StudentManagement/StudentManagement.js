import React, { Component } from 'react';
import InfoStudent from './InfoStudent/InfoStudent';
import ListStudent from './ListStudent/ListStudent';
import './StudentManagement.css'

class StudentManagement extends Component {
    constructor(){
        super();
        this.state = {
            students : [
                {
                    MaSV : "1",
                    fullName : "Phan Văn Thìn",
                    phonenumber : "0909",
                    email : "vanthin1203@gmail.com",
                    mathScores : 8,
                    chemistryScores :9,
                    physicalScores : 10,
                    GPA : 9
                },
                {
                    MaSV : "1",
                    fullName : "Phan Văn hùng",
                    phonenumber : "0909",
                    email : "vanthin1203@gmail.com",
                    mathScores : 8,
                    chemistryScores :9,
                    physicalScores : 10,
                    GPA : 1
                }
                ,{
                    MaSV : "1",
                    fullName : "Phan Văn Khải",
                    phonenumber : "0909",
                    email : "vanthin1203@gmail.com",
                    mathScores : 8,
                    chemistryScores :9,
                    physicalScores : 10,
                    GPA : 5
                }
            ]
        }
    }

    onAddStudent = (student) =>{

        this.setState({
            students : [...this.state.students, student]
        })
    }

    //sort 
    onSortGPAIncrease = (e)=>{
        const {value} = e.target;
        let tempArr = this.state.students;

        switch (value){
            case "GPAIncrease" : {
                tempArr.sort((a,b)=>Number(a.GPA) - Number(b.GPA));
                break;
            }
            case "GPADecrease" : {
                tempArr.sort((a,b)=>Number(b.GPA) - Number(a.GPA));
                break;
            }
            default :{
                tempArr.sort((a,b)=> a.fullName.toUpperCase().localeCompare(b.fullName.toUpperCase()));
                break;
            }
        }
          
        this.setState({
            students : tempArr
        })
    }

    onDeleteStudent = (id) =>{
        let index = this.state.students.findIndex((ele)=>ele.id === id);
        let tempArr = this.state.students;
        tempArr.splice(index-1,1);

        this.setState({
            students : tempArr
        })
    }
    render() {
        return (
            <div className = "bg-StudentManagement">
                <div className = "studentManament">
                    <div className="info-Student">
                        <p className = "title info-title">Thông tin sinh viên</p>
                        <InfoStudent onAddStudent = {this.onAddStudent}/>
                    </div>
                    <div className = "list-student">
                        <div className = "title list-student__title-grid">
                            <p>Mã SV</p>
                            <p>Họ tên</p>
                            <p>Số điện thoại</p>
                            <p>Email</p>
                            <p>Điểm TB</p>
                            <div>
                                <select name="sort" className="sort" onChange={this.onSortGPAIncrease}>
                                    <option value>Sort By</option>
                                    <option value="GPAIncrease">GPA tăng dần</option>
                                    <option value="GPADecrease">GPA giảm dần</option>
                                    <option value="fullname">Họ tên</option>
                                </select>
                            </div>
                        </div>
                        <div className = "list-student__item">
                            {
                                this.state.students.length !== 0 
                                ? this.state.students.map((ele,index)=> <ListStudent item = {ele} key ={index} onDeleteStudent = {this.onDeleteStudent}/>) 
                                : <p className = "notify-list">Không có sinh viên nào</p> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentManagement;