import React, { Component } from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import './ToDoList.css'

class ToDoList extends Component {
    
    render() {
        let tempJSX = [];
        if(this.props.toDoShow.length !== 0)
        {
            tempJSX = this.props.toDoShow.map((ele,index)=><ToDoItem item = {ele} key = {index} onChangeIsComplete = {this.props.onChangeIsComplete}/>)
        }
        else{
            if(this.props.wordFilter === ""){
                tempJSX = this.props.listTodo.map((ele,index)=><ToDoItem item = {ele} key = {index} onChangeIsComplete = {this.props.onChangeIsComplete}/>);
            }
            else{
                tempJSX = [<p>Không có mục tiêu mà bạn tìm</p>] 
            }
        }
        
        return (
            
            <div className = "bg-todo">
                <p className = "title todo__title">TO DO</p>
                <div className = "todo-list">
                    {
                        tempJSX
                    }
                    
                </div>
            </div>
        );
    }
}

export default ToDoList;