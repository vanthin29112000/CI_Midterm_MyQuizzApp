import React, { Component } from 'react';
import ProductIncart from './ProductInCart/ProductIncart';
import './ShoppingCart.css'

class ShoppingCart extends Component {
    render() {
        return (
            <div className = "shoppingCart" >
                <div>
                    {/* Modal */}
                    <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                        <div className="modal-content ">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body ">
                                <div className = "title bg_grid">
                                    <p className = "title__item grid_item">Mã sản phẩm</p>
                                    <p className = "title__item grid_item">Hình ảnh</p>
                                    <p className = "title__item grid_item">Tên sản phẩm</p>
                                    <p className = "title__item grid_item">Số lượng</p>
                                    <p className = "title__item grid_item">Đơn giá</p>
                                    <p className = "title__item grid_item">Thành tiền</p>
                                </div>
                                {
                                    this.props.shoppingCart.map((ele,index)=><ProductIncart shoppingCart = {ele} increase = {this.props.increase} decrease = {this.props.decrease} delete = {this.props.delete} key = {index}/>)
                                }
                                
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                            <button type="button" className="btn btn-danger">Đặt hàng</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShoppingCart;