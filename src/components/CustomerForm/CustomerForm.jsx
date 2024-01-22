import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import store from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function CustomerForm() {
    const total = useSelector(store => store.total)
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [delivery, setDelivery] = useState('')
  
    const dispatch = useDispatch();
    const history = useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newCustomer = { name, address, city, zip, delivery };
      console.log('Submitting customer:', newCustomer);
      dispatch({ type: "SET_CUSTOMER", payload: newCustomer });
      setName('');
      setAddress('');
      setCity('');
      setZip('');
      history.push('/CustomerCheckout')
    }
  
    return (
        <>
        <h1>Prime Pizza</h1> <p>${total}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder='Zip' value={zip} onChange={(e) => setZip(e.target.value)} />
        <input type="radio" id="Delivery" name="deliveryMethod" value="Delivery" onChange={(e) => setDelivery(e.target.value)} checked={delivery === "Delivery"} />
    <label htmlFor="Delivery">Delivery</label>
    <input type="radio" id="Pickup" name="deliveryMethod" value="Pickup" onChange={(e) => setDelivery(e.target.value)} checked={delivery === "Pickup"} />
    <label htmlFor="Pickup">Pickup</label>
    <button type = 'submit'>Checkout</button>
  
      </form>
      </>
    );
  }
  
  





export default CustomerForm