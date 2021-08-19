import React, { Component } from 'react';
import './CustomBurgur.css'
import Topping from './Topping/Topping';

class Customburgur extends Component {
    render() {
        const {total,increase,decrease,topping,reset} = this.props;
        return (
            <div className = "bg-customBurger">
                <p className = "bg-customBurger__title">Custom your Burger</p>
                <div className = "burger__item">
                    <div className = "bg__grid">
                        <p className = "topping">TOPPING</p>
                        <p>OPTION</p>
                        <p>UNIT PRICE</p>
                        <p>PRICE</p>
                    </div>
                    {
                        topping.map((ele,index)=><Topping topping = {ele} increase = {increase} decrease = {decrease} key = {index}/>)
                    }
                </div>
                <div className = "bg__grid total">
                    <p className = "topping">
                            Total cost
                    </p>
                    <p></p>
                    <p></p>
                    <p>{total}$</p>
                </div>

                <div className = "btn__option">
                    <button onClick = {()=>reset(true)}>ORDER NOW</button>
                    <button onClick = {()=>reset(false)}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Customburgur;