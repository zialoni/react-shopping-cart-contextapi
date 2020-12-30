import React, { Component } from 'react';
import Details from "./section/Details/Details";
import ProductList from "./section/ProductList/ProductList";
import Cart from "./section/Cart/Cart";
import Default from "./section/Default/Default";
import Modal from "./section/Modal/Modal";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

export class Section extends Component {
    render() {
        return (
            <section>
            <Switch>
               <Route exact path="/" component={ProductList}/>
               <Route path="/details" component={Details}/>
               <Route path="/cart" component={Cart}/>
               <Route component={Default}/>
            </Switch>
            <Modal/>
            </section>
        )
    }
}

export default Section
