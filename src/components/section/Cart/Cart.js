import React, { Component } from 'react';
import "./Cart.css";
import EmptyCart from "./EmptyCart";
import CartElement from "./CartElement"
import {ProductConsumer} from "../../../context";
import CartTotal from "./CartTotal";


export class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                             <React.Fragment>
                                <CartElement value={value}/>
                                <CartTotal value={value} history={this.props.history} />
                             </React.Fragment>
                            );
                        } else {
                            return <EmptyCart/>
                        }
                    }
                }
           
            </ProductConsumer>
        )
    }
}

export default Cart
