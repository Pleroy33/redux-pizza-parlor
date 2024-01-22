import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import App from '../components/App/App';

const total = (state = 0, action) => {
  if(action.type === 'ADD'){
    return state += parseFloat(action.payload.price)
  }
  if(action.type === 'REMOVE'){
    return state - action.payload.price;
    
  }
  console.log(state)

  return (state);
}

const pizzaList = (state = [], action) => {
  if(action.type === 'SET_PIZZA_LIST'){
    return action.payload
  }

  return state;
}
const cart = (state = [], action) => {
  if(action.type === 'ADD'){
    return [...state, action.payload]
  }
  if(action.type === 'REMOVE'){
    const pizzaId = action.payload.id
    return state.filter(pizza => pizza.id !== pizzaId);
  }

  return state;
}
const orders = (state = [], action) => {
  if(action.type === 'SET_CUSTOMER'){
    return [...state, action.payload]
  }

  return state;
}
const store = createStore(
  combineReducers({
    cart,
    pizzaList,
    total,
    orders
  }),
  applyMiddleware(logger),
);


export default store;
