import React, { Component } from 'react';
import Default from '../Default/Default';
import Product from "../Product/Product";
import {storeProducts} from "../../../data";
import {ProductConsumer} from '../../../context';
import "./ProductList.css";


export class ProductList extends Component {
   
    render() {    
        return (         
                <div className="wrapper">
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product}/>
                            })
                            }}
                        </ProductConsumer>
                   </div>                 
                </div>
          
        )
    }
}

export default ProductList
