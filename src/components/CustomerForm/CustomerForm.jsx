import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import store from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function CustomerForm() {
    const total = useSelector(store => store.total)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
  
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newCustomer = { name, address, city, zip };
      console.log('Submitting customer:', newCustomer);
      dispatch({ type: "SET_CUSTOMER", payload: newCustomer });
      setName('');
      setAddress('');
      setCity('');
      setZip('');
    }
  
    return (
        <>
        <h1>Prime Pizza</h1> <p>${total}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder='Zip' value={zip} onChange={(e) => setZip(e.target.value)} />
        <Link type="submit" to ='/CustomerCheckout/'><button>ORDER</button></Link>
      </form>
      </>
    );
  }
  
  





export default CustomerForm