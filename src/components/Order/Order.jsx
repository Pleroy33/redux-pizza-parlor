import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
function Orders() {
  const orders = useSelector((store) => store.order);

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>cost</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.cost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Orders;
