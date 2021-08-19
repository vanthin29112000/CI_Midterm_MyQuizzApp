import React, { Component } from 'react';
import './ProductInfo.css'
class ProductInfo extends Component {
    render() {
        const {name,img,ram,rom} = this.props.product;
        const {screen,os,frontCamera, backCamera} = this.props.product.info;        
        return (
            <div className = "bg-ProductInfo">
                <div className = "img-prodiuct">
                    <p>{name}</p>
                    <img src = {img}/>
                </div>

                <table className = "specifications">
                    <p className ="caption">Thông số kĩ thuật</p>
                    <tr>
                        <td className = "title">Màn hình</td>
                        <td className = "info">{screen}</td>
                    </tr>
                    <tr>
                        <td className = "title">Hệ điều hành</td>
                        <td className = "info">{os}</td>
                    </tr>
                    <tr>
                        <td className = "title">Camera trước</td>
                        <td className = "info">{frontCamera}</td>
                    </tr>
                    <tr>
                        <td className = "title">Camera sau</td>
                        <td className = "info">{backCamera}</td>
                    </tr>
                    <tr>
                        <td className = "title">RAM</td>
                        <td className = "info">{ram}</td>
                    </tr>
                    <tr>
                        <td className = "title">ROM</td>
                        <td className = "info">{rom}</td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default ProductInfo;