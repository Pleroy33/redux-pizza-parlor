import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { HashRouter as Router, Route, Link } from "react-router-dom";



function CustomerCheckout (){
console.log ('in checkout')
const cart = useSelector(store => store.cart)
const globalTotal = useSelector(store => store.total)
const customer = useSelector(store => store.orders)
console.log(customer)

const customer_name = ''
const street_address = ''
const city = ''
const zip = ''
const type = ''
const total = ''
const pizzas = ''



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
          {name}
          {cart.price}
          
          </li>
          
      
      ))}


<p>Total: {total}</p>
<button >checkout</button>
</>



    )
}


export default CustomerCheckout 