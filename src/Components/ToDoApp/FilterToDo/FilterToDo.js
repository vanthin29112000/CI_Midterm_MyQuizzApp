import React, { Component } from 'react';
import './FilterToDo.css'

class FilterToDo extends Component {

    onChangeWord = (e) =>{
        const {value} = e.target
        this.props.onChangeWordFilter(value);
    }

    render() {
        return (
            <div className = "filter">
                <p className = "title size">Filter tasks (by name)</p>
                <input type = "text" name = "wordFilter" onChange = {this.onChangeWord} ></input>
                <button  className = "btn_click">Clear</button>
            </div>
        );
    }
}

export default FilterToDo;