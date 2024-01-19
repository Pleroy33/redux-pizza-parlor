import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { HashRouter as Router, Route, Link } from "react-router-dom";



function CustomerCheckout (){
console.log ('in checkout')
const cart = useSelector(store => store.cart)
const total = useSelector(store => store.total)
const customer = useSelector(store => store.orders)
console.log(customer)


// const handleSubmit = event => {
//     event.preventDefault();

//     console.log(`Adding order`, {customer, cart});

//     const newOrder = {
//         customer_name,
//         street_address,
//         city,
//         zip,
//         type,
//         total,
//         pizzas
//     }

//     // TODO - axios request to server to add order
//     axios.post('/api/order', newOrder)
//       .then( response => {
//         console.log("Add new book worked!")
//       })
//       .catch(error => {
//         console.error(error)
//         alert('Sorry, the book you submitted didnt work bro!')
//       })




    return (
        <>
<h1>Prime Pizza</h1>

<h2>Checkout</h2>
<h3>Customer Info</h3>
{customer.map((customer) => (
          
            <li key={customer.id}> 
            {customer.name} ,
            {customer.address} ,
            {customer.city},
            {customer.zip},
            {customer.delivery}
            </li>
            
        
        ))}

{cart.map((cart) => (
          
          <li key={cart.id}> 
          {cart.name}
          {cart.price}
          
          </li>
          
      
      ))}


<p>Total: {total}</p>

</>



    )
}


export default CustomerCheckout 