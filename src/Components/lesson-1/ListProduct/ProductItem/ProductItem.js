import React, { Component } from 'react';
import './ProductItem.css'
class ProductItem extends Component {
    render() {
        const {id,name,img} = this.props.item;
        return (
            <div className = "product__item">
                <img src = {img}/>
                <div className = "product__info">
                    <p>{name}</p>
                    <div className ="btn-option">
                        <button className = "green" onClick = {()=> this.props.eChangeInfo(id)}>Xem chi tiết</button>
                        <button className = "red" onClick = {()=> this.props.eAddProduct(id)}>Thêm giỏ hàng </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;         