import { Route, Switch } from 'react-router-dom'

import "./App.css";
import { Order } from "./Components/Order/Order";
import { Agreement } from "./Components/Agreement/Agreement";
import { Payment } from "./Components/Payment/Payment";
import { CompletedOrder } from "./Components/CompletedOrder/CompletedOrder";

import { useState } from "react";
import { CartProvider } from "./store/cartProvider";

export const App = () => {
  const [ordered, setOrdered] = useState(null);

  const orderHandler = (data) => {
    setOrdered(data);
  };

  return (
    <CartProvider>
      <Switch>
      <div id="App">
        <Route exact path='/'>
        <Order />
        </Route>
        <Route path='/order/agreement'>
        <Agreement />
        </Route>
        <Route path='/order/payment'>
        <Payment />
        </Route>
        <Route path='/order/orderCompleted'>
        <CompletedOrder />
        </Route>
      </div>
      </Switch>
    </CartProvider>
  );
};

