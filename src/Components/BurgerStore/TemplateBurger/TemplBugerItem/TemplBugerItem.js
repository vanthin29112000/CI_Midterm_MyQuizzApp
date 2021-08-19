import React, { Component } from 'react';

class TemplBugerItem extends Component {
    render() {
        const {topping} = this.props;
        let temp = [];
        for(let i = 1 ; i <= topping.amount;i++)
        {
            temp.push(<div className={topping.nameClass} />);
        }
        return (
        <>
            {temp.map((ele)=>ele)}
        </>
            
        );
    }
}

export default TemplBugerItem;