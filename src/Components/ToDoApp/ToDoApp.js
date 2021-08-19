import React, { Component } from 'react';
import AddToDo from './AddToDo/AddToDo';
import FilterToDo from './FilterToDo/FilterToDo';
import './ToDoApp.css'
import ToDoList from './ToDoList/ToDoList';

class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                { id: 1, title: "Đi cafe với gấu", isCompleted: true },
                { id: 2, title: "Học ReactJS", isCompleted: false },
                { id: 3, title: "Học cách thổi nến", isCompleted: false },
                { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
                { id: 5, title: "Trade coin", isCompleted: false },
              ]
            ,toDoShow : []
            ,wordFilter : ""

        }
    }

    onChangeWordFilter = (e)=>{
        this.filterTask(e);
    }

    filterTask = (key) =>{

        if(key !== "")
        {
            let tempArr = this.state.todos.filter((ele) => ele.title.toLowerCase().includes(key));
            this.setState({
                toDoShow : tempArr,
                wordFilter : key
            })
        }
        else {
            this.setState({
                toDoShow : this.state.todos,
                wordFilter : key
            })
        }
    }

    onAddToDo = (title)=>{
        let tempObject = {
            id : this.state.todos.length ,
            title : title,
            isCompleted : false
        }

        this.setState({
            todos : [...this.state.todos, tempObject]
        },()=>{
            this.filterTask(this.state.wordFilter)
        })
    }

    onChangeIsComplete = (id) =>{
        let index = this.state.todos.findIndex((ele) => ele.id === id);
        let tempArr = this.state.todos;
        tempArr[index].isCompleted = true;
        
        this.setState({
            todos : tempArr,
        })
    }

    render() {
        return (
            <div className = "bg-image">
                <div className = "bg-ToDoApp">
                    <FilterToDo onChangeWordFilter = {this.onChangeWordFilter}/>
                    <ToDoList listTodo = {this.state.todos} toDoShow = {this.state.toDoShow} wordFilter = {this.state.wordFilter} onChangeIsComplete = {this.onChangeIsComplete}/>
                    <AddToDo onAddToDo = {this.onAddToDo} />
                </div>
            </div>
            
        );
    }
}

export default ToDoApp;