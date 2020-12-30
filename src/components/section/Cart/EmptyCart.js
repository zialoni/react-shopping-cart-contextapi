import React, { Component } from 'react';
import "./Cart.css";

export class EmptyCart extends Component {
    render() {
        return (
            <div class="empty">
                <span>You have no items in the cart</span>
            </div>
        )
    }
}

export default EmptyCart
