import React from 'react';
import "./Cart.css";

function CartDesign({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div class="container">
        <div class="cart-chk">
            <div class="products-chk">
                <div class="product-chk">
                    <img src={img}/>

                    <div class="product-chk-info">

                        <h2 class="product-chk-name">{title}</h2>
                        <h2 class="product-chk-price"><strong>Price: </strong>${price}</h2>
                        <h2 class="product-chk-offer"><strong>Item Total: </strong>${total}</h2>
                           <p class="product-chk-count">
                               <span onClick={() => decrement(id)}><i class="fa fa-minus fa-2x"></i></span>
                               <span class="count">{count}</span>
                               <span onClick={() => increment(id)}><i class="fa fa-plus fa-2x"></i></span>
                               
                           </p>
                           <p class="product-chk-remove">  
                              <i class="fa fa-trash fa-1x"></i>                      
                              <span class="remove" onClick={() => removeItem(id)}>Remove</span>               
                           </p>
                      </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default CartDesign
