import React, { Component } from 'react';
import TemplateBurger from './TemplateBurger/TemplateBurger';
import './BurgerStore.css'
import Customburgur from './CustomBurger/Customburgur';
class BurgerStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            toppings : [
                {
                    id : 1,
                    name : "Salad",
                    nameClass : "salad",
                    amount : 0,
                    price : 10
                },
                {
                    id : 2,
                    name : "Cheese",
                    nameClass : "cheese",
                    amount : 0,
                    price : 20
                },
                {
                    id : 3,
                    name : "Meat",
                    nameClass : "meat",
                    amount : 0,
                    price : 25
                },
                {
                    id : 4,
                    name : "Bacon",
                    nameClass : "bacon",
                    amount : 0,
                    price : 28
                }
            ],
            total : 0
        }

        
    }
    onTotal = (price) =>{
        this.setState({
            total : this.state.total + price
        })
    }

    onIncreaseAmount = (id)=>{
        let index = this.state.toppings.findIndex((topping)=>topping.id ===id);
        let arrTemp = this.state.toppings;

        if(index !== -1){
            arrTemp[index].amount++;
            this.setState({
                toppings : arrTemp
            })
            this.onTotal(arrTemp[index].price);
        }
    }

    onDecreaseAmount = (id)=>{
        let index = this.state.toppings.findIndex((topping)=>topping.id ===id);
        let arrTemp = this.state.toppings;

        if(index !== -1 && arrTemp[index].amount > 0){
            arrTemp[index].amount--;
            this.setState({
                toppings : arrTemp
            })
            this.onTotal(arrTemp[index].price * -1);
        }
    }

    onOrderNow = (selection)=>{
        if(this.state.total != 0)
        {
            let tempArr = this.state.toppings;

            let temp = tempArr.map((ele)=>{
            return{
                ...ele,
                amount : 0
            } 
            })

            this.setState({
                toppings : temp,
                total : 0
            })
            if(selection == true)
            {
                alert("Payment success !!!");
            }
            else
            {
                alert("Reset success !!!");
            }
        }
        else{
            alert("Please start adding ingredients");
        }

    }

    render() {
        return (
            <div className = "burgerStore">
                <p className = "burgerStore__title">L'Demajor Burger</p>
                <div className = "burgerStore__item">
                    <div className = "template-Burger" >
                        <p>Your taste Burger</p>
                        <TemplateBurger toppings = {this.state.toppings} total = {this.state.total}/>
                    </div>
                    <div className ="custom-Burger">
                        <Customburgur topping = {this.state.toppings} total = {this.state.total} increase = {this.onIncreaseAmount} decrease = {this.onDecreaseAmount} reset = {this.onOrderNow}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BurgerStore;