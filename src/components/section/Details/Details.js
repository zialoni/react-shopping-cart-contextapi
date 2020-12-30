import React, { Component } from 'react';
import {ProductConsumer} from "../../../context";
import {Link} from "react-router-dom";
import "./Details.css";


export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => { 
                        const {id, company, img, info, price, title, inCart} = value.detailProduct;
                        return (
                           <div className="product">
                              <div className="detail">
                                  <div className="big-img">
                                      <img src={img} alt=""/>
                                  </div>
                                  <div className="box"> 
                                        <div class="row-detail">
                                            <h2>{title}</h2>                            
                                            <span>${price}</span>
                                        </div>
                                        <p>{info}</p>                                 
                                       <Link to="/"><button>Back to Product</button></Link>
                                       <button disabled={inCart ? true : false}
                                           onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                           
                                          }}
                                           >ADD TO CART</button>
                                                                     
                                  </div>
                              </div>
                           </div> 
                        )
                    }
                }
                
            </ProductConsumer>
        )
    }
}

export default Details
