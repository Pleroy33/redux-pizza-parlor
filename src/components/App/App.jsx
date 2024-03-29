import React from 'react';
import axios from 'axios';
import CustomerForm from '../CustomerForm/CustomerForm';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList'
import CustomerCheckout from '../CustomerCheckout/CustomerCheckout';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';


function App() {
  

  


  return (

    <Router>
    <div>
      <Route path = "/" exact>
        <PizzaList/>
      </Route>
    
      <Route path ="/CustomerForm/">
        <CustomerForm/>
      </Route>

      <Route path ="/CustomerCheckout/">
        <CustomerCheckout/>
      </Route>
  
      <Route path ="/Admin/">
        <Admin/>
      </Route>
      


      
      </div>
    </Router>
  );
}

export default App;
