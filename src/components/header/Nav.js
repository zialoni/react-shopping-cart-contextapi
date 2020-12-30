import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Nav extends Component {
    state = {
        toggle:false
    }
    menuToggle = () => {
        this.setState({
            toggle:!this.state.toggle
        })
    }
    
    render() {

        const {toggle} = this.state;
        return (
            <>
                <ul className={toggle ? "toggle" : ""}>
                
                <li onClick={this.menuToggle}><Link to="/">SHOP</Link></li>
               
                <li onClick={this.menuToggle} className="cart"><Link to="/cart"><i className="fa fa-shopping-cart fa-2x"></i></Link></li>
                
                <li className="close" onClick={this.menuToggle}>X</li>           
            </ul>
            <div className="menu" onClick={this.menuToggle}>Menu</div>
            </>
        )
    }
}

export default Nav
