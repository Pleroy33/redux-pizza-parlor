import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'




function CustomerCheckout() {
  console.log('in checkout');
  const cart = useSelector(store => store.cart);
  const globalTotal = useSelector(store => store.total);
  const customer = useSelector(store => store.orders.at(-1)); // Assuming the last element is the current customer



  const handleSubmit = event => {
      event.preventDefault();

      const newOrder = {
          customer_name: customer?.name,
          street_address: customer?.address,
          city: customer?.city,
          zip: customer?.zip,
          type: customer?.delivery,
          total: globalTotal,
          pizzas: cart
      };
console.log(newOrder)
      axios.post('/api/order', newOrder)
          .then(response => {
              console.log('Order submitted successfully',newOrder);
              // Additional success handling
          })
          .catch(error => {
              console.error('Error submitting order:', error);
              alert('Error submitting order: ' + error.message);
          });
  };

  return (
      <>
          <h1>Prime Pizza</h1>
          <h2>Checkout</h2>
          <h3>Customer Info</h3>
          {customer && (
              <ul> 
                  <li>{customer.name}</li> 
                  <li>{customer.address}</li>
                  <li>{customer.city}</li>
                  <li>{customer.zip}</li>
                  <li>{customer.delivery}</li>
              </ul>
          )}

          {cart.map(item => (
              <ul key={item.id}> 
                  <li>{item.name}</li>
                  <li>{item.price}</li>
              </ul>
          ))}

          <p>Total: {globalTotal}</p>
          <form onSubmit={handleSubmit}>
              <button data-testid="next" type="submit">
                  SUBMIT
              </button>
          </form>
      </>
  );
}

export default CustomerCheckout