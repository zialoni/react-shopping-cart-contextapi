import React from 'react';
import "./Cart.css";
import StripeCheckout from 'react-stripe-checkout';

function CartTotal({value, history}) {
    function handleToken(token, addresses) {
        console.log({token, addresses})
    }
    const {cartSubTotal, cartTax, cartTotal} = value;
    return (
        <div className="cart-total">
        <p>
            <span><strong>Sub Total</strong></span>
            <span><strong>$ </strong>{cartSubTotal}</span>
        </p>
        <p>
            <span><strong>Tax</strong></span>
            <span><strong>$ </strong>{cartTax}</span>
        </p>
        <p>
            <span><strong>Total</strong></span>
            <span><strong>$ </strong>{cartTotal}</span>
        </p>
        
        <StripeCheckout stripeKey="" token={handleToken}/>

    </div>
    )
}

export default CartTotal
