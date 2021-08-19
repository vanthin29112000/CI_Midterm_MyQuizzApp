import React, { Component } from 'react';
import './ListProduct.css'
import ProductItem from './ProductItem/ProductItem';
class ListProduct extends Component {
    render() {
        return (
            <div className = "bg-listproduct">
                {
                    this.props.Products.map((product,index)=>
                        <ProductItem item = {product} eChangeInfo = {this.props.eventChangeInfo} eAddProduct = {this.props.eventAddProduct} key = {index}/>
                    )
                }
                
            </div>
        );
    }
}

export default ListProduct;