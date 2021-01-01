import React, { Component } from 'react';
import "./Cart.css";

export class EmptyCart extends Component {
    render() {
        return (
            <div className="empty-cart">
                <span>You have no items in the cart</span>
            </div>
        )
    }
}

export default EmptyCart
