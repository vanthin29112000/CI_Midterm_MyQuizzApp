import React, { Component } from 'react';
import './ToDoItem.css'

class ToDoItem extends Component {
    render() {
        const {id,title,isCompleted} = this.props.item ;
        
        return (
            <div className = "todo-item">
                {
                    isCompleted  
                    ? [<p className = "true">{title}</p>  ]
                    : [<p className = "">{title}</p>
                        ,<button className = "" onClick = {()=>this.props.onChangeIsComplete(id)}>Delete</button>]
                }
            </div>
        );
    }
}

export default ToDoItem;