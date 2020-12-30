import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../../context";
import "./Product.css";
import PropTypes from "prop-types";

export class Product extends Component {
    render() {
        const {id, title, desc, img, price, inCart} = this.props.product;
        console.log({id});
        return (          
                <div className="card">
                    <img src={img} alt="product"/>
                    <ProductConsumer>
                        {(value) => (
                             <div class="content">
                             <div class="row">
                                 <div class="details">
                                     <span>{title}</span>
                                   
                                 </div>
                                 <div class="price">${price}</div>
                             </div>
                             <div class="desc">{desc}</div>
                             <div class="buttons">
                                <Link to="/details" onClick={()=> value.handleDetail(id)}>Details</Link>
                                <button disabled={inCart ? true : false}
                                 onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                 }}
                                >ADD TO CART</button>
                             </div>
                         </div>
                        )}
                   
                    </ProductConsumer>
                </div>          
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

export default Product
