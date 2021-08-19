import React, { Component } from 'react';
import './InfoStudent.css'
import IndoStudentItem from './InfoStudentItem/IndoStudentItem';

class InfoStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            student : {
                MaSV : "",
                phonenumber : "",
                fullName : "",
                email : "",
                mathScores : "",
                chemistryScores : "",
                physicalScores : "",
                GPA : ""
            }
        }

        this.item = {
            left : [
                {
                    id : "l1",
                    title : "Mã SV",
                    name : "MaSV",
                    type : "text"
                },
                {
                    id : "l2",
                    title : "Số điện thoại",
                    name : "phonenumber",
                    type : "text"
                }
                ,
                {
                    id : "l3",
                    title : "Điểm toán",
                    name : "mathScores",
                    type : "number"
                },
                {
                    id : "l4",
                    title : "Điểm hóa",
                    name : "chemistryScores",
                    type : "number"
                }
            ],
            right : [
                {
                    id : "r1",
                    title : "Họ tên",
                    name : "fullName",
                    type : "text"
                },
                {
                    id : "r2",
                    title : "Email",
                    name : "email",
                    type : "email"
                }
                ,
                {
                    id : "r3",
                    title : "Điểm lý",
                    name : "physicalScores"
                    ,type : "number"
                }
            ]     
        }
    }

    onChangeHandle = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;

        let object = this.state.student ;
        object[name] = value;

        this.setState({
            student : object
        })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault();
        const {mathScores,chemistryScores,physicalScores} = this.state.student;
        let numGPA = Math.round(((Number(mathScores)+Number(physicalScores)+Number(chemistryScores))/3)*10)/10;
        let tempArr = this.state.student;
        tempArr.GPA = numGPA;
        
        this.setState({
            student : tempArr
        },()=>{
            this.props.onAddStudent(this.state.student);
            this.setState({
                student : {
                    MaSV : "",
                    phonenumber : "",
                    fullName : "",
                    email : "",
                    mathScores : "",
                    chemistryScores : "",
                    physicalScores : "",
                    GPA : ""
                }
            })
        })
    }

    render() {
        return (
            <form className = "student-info" onSubmit = {this.onSubmitHandler}>
                <div className = "student-info__left">
                    {
                        this.item.left.map((ele)=>
                        <IndoStudentItem item = {ele} key = {ele.id} onChangeHandle = {this.onChangeHandle} value = {this.state.student[ele.name]}/>)
                    }
                </div>
                <div className = "student-info__right">
                    {
                        this.item.right.map((ele)=>
                        <IndoStudentItem item = {ele} key = {ele.id} onChangeHandle = {this.onChangeHandle} value = {this.state.student[ele.name]} />)
                    }
                </div>
                <div></div>
                <div>
                    <button type="submit" className = "btn-submit__add-student">Thêm sinh viên</button>    
                </div>   
            </form>
        );
    }
}

export default InfoStudent;