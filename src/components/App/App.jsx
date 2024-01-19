import React from 'react';
import axios from 'axios';
import CustomerForm from '../CustomerForm/CustomerForm';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList'
import Orders from '../Order/Order';

import { HashRouter as Router, Route, Link } from "react-router-dom";


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

      <Route path ="/Order/">
        <Orders/>
      </Route>
      

      
      </div>
    </Router>
  );
}

export default App;
