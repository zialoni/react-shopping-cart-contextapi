import React, { Component } from 'react';
import {ProductConsumer} from '../../../context';
import {Link} from 'react-router-dom';
import "./Modal.css";

export class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {title,price} = value.modalProduct;
                    if(!modalOpen){
                    return null
                    } else {
                         return ( <div class="modal">
                                      <div class="content-modal">
                                        <div class="header-modal">
                                            <h2>{title}</h2>
                                            <span>${price}</span>
                                        </div>
                                        <div class="icon-modal" className="fa fa-check"></div>
                                        <p>CONGRATS! <span>{title}</span> ADDED TO THE CART</p>
                                        <div class="line"></div>
                                       
                                        <div class="buttons-modal">
                                        <Link to='/' onClick={()=>closeModal()}>Store</Link>
                                        <Link to='/cart' onClick={()=>closeModal()}>Cart</Link>
                                        </div>
                                        

                                    </div>              
                    
                                 </div>
                       );                     
                    }
                }}
            </ProductConsumer>
            
        )
    }
}

export default Modal
