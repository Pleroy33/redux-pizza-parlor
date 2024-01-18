import React from 'react';
import axios from 'axios';
import CustomerForm from '../CustomerForm/CustomerForm';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const pizzaList = useSelector(store => store.pizzaList);
  const cart  = useSelector(store => store.cart); // destructuring them for easier use.
  const total = useSelector(store => store.total)


  useEffect(() => {
    fetchPizzas();
    console.log("Cart: ", cart); // Add this line to check the structure of cart
  }, [cart]);

  const fetchPizzas = () => {
    axios.get('/api/pizza')
      .then( response => {
        console.log('Pizza List: ', response.data)
        dispatch({type: 'SET_PIZZA_LIST', payload: response.data})
      })
      .catch(error => {
        console.error(error)
        alert('Could not fetch books! It is broken')
      })
  }



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'></h1>
        <p>Total: {total}</p>
        <button>NEXT</button>
      </header>
      {pizzaList.map((pizza) => (
        <>
   <li key={pizza.id}> {pizza.name}: {pizza.price} <img src ={pizza.image_path}/></li>
   <button onClick={() => dispatch({type: 'ADD', payload: pizza})}>Add</button>
   <button onClick={() => dispatch({type: 'REMOVE', payload: pizza})}>Remove</button>
   </>
   
))} 
    </div>
  );
}

export default App;
