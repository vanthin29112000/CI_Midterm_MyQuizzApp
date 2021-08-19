import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleToDo : ""
        }
    }

    onChangeState = (e)=>{
        const {value} = e.target ;
        
        this.setState ({
            titleToDo : value
        })
    }

    onPushTitle = () =>{
        this.props.onAddToDo(this.state.titleToDo);
        this.setState({
            titleToDo : ""
        })
    }
    render() {
        // const {onAddToDo} = this.props;
        return (
            <div className = "filter">
                <p className = "title size">ADD ITEM</p>
                <input type = "text" anme = "title" onChange = {this.onChangeState} value = {this.state.titleToDo}></input>
                <button  className = "btn_click" onClick = {this.onPushTitle}>Add</button>
            </div>
        );
    }
}

export default AddToDo;