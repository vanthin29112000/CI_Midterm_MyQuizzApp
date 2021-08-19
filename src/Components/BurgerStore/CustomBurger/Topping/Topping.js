import React, { Component } from 'react';
import './Topping.css'

class Topping extends Component {
    render() {
        const {id,name,amount,price} = this.props.topping;
        const {increase,decrease} = this.props;
        return (
            <div className = "bg__grid">
                <p className = "topping">{name}</p>
                <p className = "option">
                    <button className = "less" onClick = {()=>decrease(id)}>Less</button>
                    <button className = "more" onClick = {()=>increase(id)}>More</button>
                </p>
                <p>{price}</p>
                <p>{amount*price}</p>
            </div>
        );
    }
}

export default Topping;