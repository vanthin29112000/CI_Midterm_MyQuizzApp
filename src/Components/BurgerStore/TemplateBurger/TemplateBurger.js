import React, { Component } from 'react';
import './TemplateBurger.css'
import TemplBugerItem from './TemplBugerItem/TemplBugerItem';

class TemplateBurger extends Component {
    render() {
        const {toppings,total} = this.props;
        return (
            <div className="box">
            {/* Phần bánh burger phía trên */}
            <div className="bread-top">
                <div className="seeds" />
                <div className="seeds2" />
            </div>
            {
                total == 0 ? <p> Please start adding ingredients </p>:toppings.map((ele,index)=><TemplBugerItem topping = {ele} key = {index}/>)
            }
            {/* Phần bánh burger phía dươi */}
            <div className="bread-bottom" />
            </div>

        );
    }
}

export default TemplateBurger;