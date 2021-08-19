import React, { Component } from 'react';
import './ProductIncart.css'

class ProductIncart extends Component {
    
    render() {
        console.log("hello")
        const {id,name,img,price} = this.props.shoppingCart.product;
        const{count} = this.props.shoppingCart;
        return (
            <div className = "listPro__cart bg_gridItem">
                <p className = "grid_item">{id}</p>
                <p className = "grid_item"><img src={img} /></p>
                <p className = "grid_item">{name}</p>
                <p className = "grid_item counter">
                    <button class="btn btn-primary" onClick = {()=> this.props.decrease(id)}>-</button>
                    <input type = "text" disabled value = {count}></input>
                    <button class="btn btn-primary" onClick = {()=> this.props.increase(id)}>+</button>
                </p>
                <p className = "grid_item">{price}</p>
                <p className = "grid_item">{price*count}</p>
                <button className = "grid_item btn btn-danger" onClick = {()=>this.props.delete(id)}>Xóa</button>
            </div>
        );
    }
}

export default ProductIncart;