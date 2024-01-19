import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { HashRouter as Router, Route, Link } from "react-router-dom";



function CustomerCheckout (){
console.log ('in checkout')
const total = useSelector(store => store.total)


    return (
        <>
<h1>Prime Pizza</h1>

<h2>Checkout</h2>


<table>
    
    <th>Name</th><th>Cost</th>
    
    <tr>

    </tr>
</table>

<p>Total: {total}</p>

</>



    )
}

export default CustomerCheckout 