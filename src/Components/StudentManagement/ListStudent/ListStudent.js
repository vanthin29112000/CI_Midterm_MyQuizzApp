import React, { Component } from 'react';

class ListStudent extends Component {
    render() {
        const {MaSV,fullName,phonenumber,email,GPA} = this.props.item;
        return (
            <div className = "student-item">
                <p>{MaSV}</p>
                <p>{fullName}</p>
                <p>{phonenumber}</p>
                <p>{email}</p>
                <p>{GPA}</p>
                <div>
                    <button className = "edit-info btn-success">Chỉnh sửa</button>
                    <button className = "delete-info btn-danger" onClick = {()=>this.props.onDeleteStudent(MaSV)}>Xóa</button>
                </div>
            </div>
        );
    }
}

export default ListStudent;