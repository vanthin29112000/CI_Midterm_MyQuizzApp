import React, { Component } from 'react';
import './InfoStudentItem.css'
class IndoStudentItem extends Component {
    render() {
        const {type,title,name} = this.props.item;
        return (
            <div className = "student-info__input">
                <label htmlFor = {name}>{title}</label> <br/>
                {
                    type ==="number"
                    ?<input type={type} name={name} min = "0" max= "10" onChange = {this.props.onChangeHandle} value = {this.props.value} required/> 
                    :<input type={type} name={name} onChange = {this.props.onChangeHandle} value = {this.props.value} required/>
                }
                
            </div>
        );
    }
}

export default IndoStudentItem;