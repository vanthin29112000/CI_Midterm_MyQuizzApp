import React, { Component } from 'react';
import ListProduct from './ListProduct/ListProduct';
import ProductInfo from './ListProduct/ProductInfo/ProductInfo';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import './SmartPhone.css'
class SmartPhone extends Component {
    constructor (props){
        super(props);
        this.state = {
            productInfo : {
                id: 1,
              name: "Samsung Galaxy A10",
              price: "40906000",
              img: "assets/img/samsung-galaxy.jpg",
              info: {
                screen: "AMOLED Full HD 9.0",
                os: "Android 9.0",
                frontCamera: "20MP",
                backCamera: "Chính 48MB, phụ 30MP",
              },
              ram: "4 GB",
              rom: "64 GB",
            },
            shoppingCart : [
             
            ]
        }

        ;

        this.Products = [
            {
              id: 1,
              name: "Samsung Galaxy A10",
              price: "40906000",
              img: "assets/img/samsung-galaxy.jpg",
              info: {
                screen: "AMOLED Full HD 9.0",
                os: "Android 9.0",
                frontCamera: "20MP",
                backCamera: "Chính 48MB, phụ 30MP",
              },
              ram: "4 GB",
              rom: "64 GB",
            },
            {
              id: 2,
              name: "IPhone12",
              price: "200306000",
              img: "assets/img/iphone-12.jpg",
              info: {
                screen: "Full HD 12.0",
                os: "IOS 14",
                frontCamera: "20MP",
                backCamera: "Chính 100MB, phụ 30MP",
              },
              ram: "16 GB",
              rom: "32 GB",
            },
            {
              id: 3,
              name: "Xiaomi Note 10",
              price: "10005000",
              img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
              info: {
                screen: "OLED 10.0",
                os: "Android 8.0",
                frontCamera: "69MP",
                backCamera: "Chính 96MB, phụ 30MP",
              },
              ram: "10 GB",
              rom: "64 GB",
            },
          ];
    }

    //Change product infomation
    onChangeInfo = (id)=>{
        let index = this.Products.findIndex((product)=>
            product.id === id 
        );
        
        if(index !== -1)
        {
            this.setState({
                productInfo : this.Products[index]
            })
        }
    }

    // Add Product Incart 
    onAddProductInCart = (id)=>{
      let index = this.state.shoppingCart.findIndex((item)=>
        item.product.id === id
      )
      let arrTemp = this.state.shoppingCart;
      
      if(index !== -1) //product exist
      {
        arrTemp[index].count ++; 
        this.setState({shoppingCart : arrTemp})
      }
      else //product not exist
      {
        let indexProduct = this.Products.findIndex((item)=>item.id === id);
        arrTemp.push({
          product : this.Products[indexProduct],
          count : 1,
      })
        this.setState ({
          shoppingCart : arrTemp
      })
    }
  }

  /*Change Amount product */
  
  //increase
  onIncreaseAmountProduct = (id)=>{
    let index = this.state.shoppingCart.findIndex((item)=>
        item.product.id === id
      )
      let arrTemp = this.state.shoppingCart;
      if(index !== -1) //product exist
      {
        arrTemp[index].count ++; 
        this.setState({shoppingCart : arrTemp})
      }
  }

  //decrease
  onDecreaseAmountProduct = (id)=>{
    let index = this.state.shoppingCart.findIndex((item)=>
        item.product.id === id
      )
      let arrTemp = this.state.shoppingCart;
      if(index !== -1 && arrTemp[index].count > 1) //product exist
      {
        arrTemp[index].count --; 
        this.setState({shoppingCart : arrTemp})
      }
  }

  onDeleteProduct = (id) => {
    let index = this.state.shoppingCart.findIndex((item)=>
        item.product.id === id
      )
      let arrTemp = this.state.shoppingCart;
      if(index !== -1) //product exist
      {
        arrTemp.splice(index,1); 
        this.setState({shoppingCart : arrTemp})
        console.log(arrTemp);
      }
  }
    render() {
        return (
            <div className = "bg-SmartPhone">
                <div className = "SmartPhone__title">
                  <p>Bài tập giỏ hàng</p>
                  {/* Button trigger modal */}
                  <div className = " btn__ShoppingCart">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Giỏ hàng
                  </button>
                  </div>
                  
                </div>
                <ListProduct Products = {this.Products} eventChangeInfo = {this.onChangeInfo} eventAddProduct = {this.onAddProductInCart}/>
                <ProductInfo product = {this.state.productInfo} />
                <ShoppingCart shoppingCart = {this.state.shoppingCart} increase = {this.onIncreaseAmountProduct} decrease = {this.onDecreaseAmountProduct} delete = {this.onDeleteProduct}/>
            </div>
        );
    }
}

export default SmartPhone;