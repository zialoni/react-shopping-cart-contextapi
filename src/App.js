
import React, { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer"

import {Switch, BrowserRouter as Router} from "react-router-dom";

export class App extends Component {
  render() {
    return (
     
      <div>
        <Header/>
        <Section/> 
        <Footer/>       
      </div>
    
    )
  }
}

export default App

