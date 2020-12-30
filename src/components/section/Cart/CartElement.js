import React from 'react';
import CartDesign from "./CartDesign";

function CartElement({value}) {
    const {cart} = value;
    console.log(value, cart);
    return (
       <React.Fragment>
           {cart.map(item=>{
               return <CartDesign key={item.id} item={item} value={value}/>
           })}
       </React.Fragment>
    )
}

export default CartElement
