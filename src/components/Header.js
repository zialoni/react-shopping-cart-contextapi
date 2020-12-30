import React, { Component } from 'react';
import Logo from "./header/Logo";
import Navbar from "./header/Nav";

export class Header extends Component {
    render() {
        return (
            <header>
             <Logo/>
             <Navbar/>       
          </header>
        )
    }
}

export default Header
