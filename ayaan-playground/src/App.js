import React, { Component } from 'react';
import './App.css';
import Employee from './component/Employee.js'
//import { Router } from 'react-router';
import Router from './Router.js'
import { NavLink } from 'react-router-dom';

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to ="/">Home</NavLink></li>
    <li><NavLink to ="/cart">Cart</NavLink></li>
  </ul>
</nav>

export default class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      employees: [
        {id: 1,name: "Madala",group: "Java"},
        {id: 2,name: "Ayaan",group: "Todler"},
        {id: 3,name: "Swapna",group: "Medical Streaming"}
      ]
    }
  };
  
  render() {
      return(
        <div className = 'page-container'>
            {/* <Employee {...this.state} /> */}
            <Navigation/>
            <Router/>
        </div>
      )
  }
}